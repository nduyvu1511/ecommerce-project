import { RootState } from "@/core/store"
import { productListToObjectIdQuantity } from "@/helper"
import { CreateOrderDraftProps } from "@/models"
import { setOpenScreenLoading, setOrderDraft } from "@/modules"
import orderApi from "@/services/orderApi"
import { useDispatch, useSelector } from "react-redux"
import { notify } from "reapop"
import { useCartOrder } from "./useCartOrder"

interface UpdateOrderHook {
  partner_shipping_id?: number | null
  acquirer_id?: number | null
  handleSuccess?: Function
  showLoading?: boolean
}

interface ProductSWR {
  createOrderDraft: (props?: CreateOrderDraftProps) => void
  createOrderDone: (props: (sale_order_id: number) => void) => void
  updateOrderDraft: (props: UpdateOrderHook) => void
}

const useOrder = (): ProductSWR => {
  const dispatch = useDispatch()
  const { token, userInfo: { id: customer_id = 0 } = { userInfo: undefined } } = useSelector(
    (state: RootState) => state.user
  )
  const { orderDraft, productList, payment, note, delivery } = useSelector(
    (state: RootState) => state.order
  )
  const { deleteCartItem } = useCartOrder(false)

  const createOrderDraft = async (orderDraftProps?: CreateOrderDraftProps) => {
    const { handleSuccess, handleError, showLoading = false } = orderDraftProps || {}
    if (!productList || !token || !customer_id || orderDraft) return

    showLoading && dispatch(setOpenScreenLoading(true))

    try {
      const res: any = await orderApi.createOrderDraft({
        api_version: "2.1",
        customer_id,
        token,
        note,
        list_products: [
          {
            products: productListToObjectIdQuantity(productList),
          },
        ],
      })
      showLoading && dispatch(setOpenScreenLoading(false))
      if (res?.error) {
        dispatch(
          notify(res.result.message || "Đơn hàng vừa tạo có lỗi, vui lòng thử lại!", "error")
        )
        return
      }

      if (res?.result?.success) {
        const order = res.result.data.sale_order_id?.[0]
        dispatch(setOrderDraft(order))
        handleSuccess && handleSuccess(order.order_id)
        return order
      } else {
        handleError && handleError()
        dispatch(
          notify(res.result.message || "Đơn hàng vừa tạo có lỗi, vui lòng thử lại!", "error")
        )
      }
    } catch (error) {
      showLoading && dispatch(setOpenScreenLoading(false))
    }
  }

  const createOrderDone = async (handleSuccess: (id: number) => void) => {
    if (!token || !productList || !delivery || !payment || !orderDraft) return
    dispatch(setOpenScreenLoading(true))

    try {
      const res: any = await orderApi.createOrderDone({
        order_id: [orderDraft.order_id],
        token,
      })
      // Disabled loading status
      dispatch(setOpenScreenLoading(false))
      const result = res?.result
      if (result?.success) {
        deleteCartItem(productList)
        const sale_order_id = result?.data?.sale_order_id?.[0]?.sale_order_id
        handleSuccess(sale_order_id)
      } else {
        dispatch(notify(result?.message || "Có lỗi xảy ra!", "error"))
      }
    } catch (error) {
      dispatch(setOpenScreenLoading(false))
    }
  }

  const updateOrderDraft = async (props: UpdateOrderHook) => {
    const { handleSuccess, partner_shipping_id, acquirer_id, showLoading = true } = props
    if (!orderDraft || !token || (!partner_shipping_id && !acquirer_id)) return

    showLoading && dispatch(setOpenScreenLoading(true))

    try {
      const res: any = await orderApi.updateOrderDraft({
        order_id: [orderDraft.order_id],
        partner_shipping_id: partner_shipping_id || null,
        token,
        acquirer_id: acquirer_id || null,
      })
      showLoading && dispatch(setOpenScreenLoading(false))

      if (res?.result === true) {
        handleSuccess && handleSuccess()
      } else {
        dispatch(
          notify(res?.result?.message || "Vui lòng chọn phương thức vận chuyển khác", "error")
        )
      }
    } catch (error) {
      showLoading && dispatch(setOpenScreenLoading(false))
    }
  }

  return {
    createOrderDraft,
    createOrderDone,
    updateOrderDraft,
  }
}

export { useOrder }
