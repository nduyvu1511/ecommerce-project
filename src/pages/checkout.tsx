/* eslint-disable react-hooks/exhaustive-deps */
import { DeliveryOrder, Payment } from "@/components"
import { AddressOrder } from "@/components/address/addressOrder"
import { OrderContainer } from "@/container"
import { MainAuthLayoutNoFooter } from "@/layout"
import { clearOrderData, setAddress } from "@/modules"
import orderApi from "@/services/orderApi"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useCartOrder, useDelivery, useOrder, usePayment, useUserAddress } from "shared/hook"
import useSWR from "swr"
import { RootState } from "../core"

const Checkout = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { data: deliveryList = [] } = useDelivery()
  const { data: paymentList = [] } = usePayment()
  const { data: { shipping_adress: addressList = [] } = { data: [] } } = useUserAddress()
  const { token } = useSelector((state: RootState) => state.user)
  const addressOrder = useSelector((state: RootState) => state.order.address)
  const orderDraft = useSelector((state: RootState) => state.order.orderDraft)
  const productList = useSelector((state: RootState) => state.order.productList)

  const { addressDefault } = useSelector((state: RootState) => state.user)
  const { updateOrderDraft } = useOrder()
  const { sale_order_id } = router.query
  const { deleteCartItem } = useCartOrder(false)

  useSWR(
    orderDraft?.order_id && sale_order_id && token ? "get_payment_status" : null,
    () =>
      orderApi
        .getVNPAYStatusPayment({ sale_order_id: Number(sale_order_id), token })
        .then((res: any) => {
          const acquirer_id = res?.result?.data?.acquirer_data?.acquirer_id
          if (res?.result?.data && res?.result?.success) {
            updateOrderDraft({
              partner_shipping_id: addressOrder?.id,
              acquirer_id,
              handleSuccess: () => {
                orderApi
                  .createOrderDone({
                    order_id: [orderDraft?.order_id || 0],
                    token,
                  })
                  .then((res: any) => {
                    if (res?.result?.success) {
                      deleteCartItem(productList || [])
                      dispatch(clearOrderData())
                      router.push(
                        `/order-confirmed?sale_order_id=${res.result?.data?.sale_order_id?.[0]?.sale_order_id}`
                      )
                    }
                  })
              },
              showLoading: false,
            })
          } else {
            // dispatch(notify(res?.result?.message || "Thanh toán không thành công", "error"))
          }
        })
        .catch((err) => console.log(err)),
    { dedupingInterval: 1000, revalidateOnFocus: true }
  )

  useEffect(() => {
    if (addressOrder) {
      updateOrderDraft({
        partner_shipping_id: addressOrder.id,
      })
      return
    }
    if (addressDefault) {
      updateOrderDraft({
        partner_shipping_id: addressDefault.id,
      })
      dispatch(setAddress(addressDefault))
    }

    // return () => {
    //   dispatch(setPayment(undefined))
    // }
  }, [])

  if (!orderDraft) return null
  return (
    <OrderContainer isShowPromotion={false} headerTitle="Thanh toán">
      <section className="checkout-container">
        <AddressOrder addressList={addressList} />
        <DeliveryOrder deliveryList={deliveryList} />
        <Payment paymentList={paymentList} />
      </section>
    </OrderContainer>
  )
}

Checkout.Layout = MainAuthLayoutNoFooter
export default Checkout
