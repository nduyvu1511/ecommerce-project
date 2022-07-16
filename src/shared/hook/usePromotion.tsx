import { RootState } from "@/core/store"
import { Promotion, PromotionLine } from "@/models"
import { setOpenScreenLoading, setPromotion, setPromotionLineList } from "@/modules"
import orderApi from "@/services/orderApi"
import userApi from "@/services/userApi"
import { useDispatch, useSelector } from "react-redux"
import { notify } from "reapop"
import useSWR from "swr"

interface CouponSWR {
  data: Promotion[]
  error: any
  isValidating: boolean
  setCoupon: (coupon: Promotion) => void
  applyPromotion: (coupon_code: string, handleSuccess?: (props: PromotionLine[]) => void) => void
  cancelPromotion: (callback?: Function) => void
}

const usePromotion = (isFetch = true): CouponSWR => {
  const dispatch = useDispatch()
  const { token, userInfo: { id: partner_id = 0 } = { userInfo: {} } } = useSelector(
    (state: RootState) => state.user
  )
  const { orderDraft } = useSelector((state: RootState) => state.order)

  const { data, error, isValidating, mutate } = useSWR(
    "coupons",
    isFetch && token && partner_id
      ? () =>
          userApi.getPromotionList({ partner_id, token }).then((res: any) => {
            if (res.result) {
              if (res.result.success) {
                return res.result.data.list_promotion
              } else {
                dispatch(notify(res.result.message, "error"))
              }
            } else {
              dispatch(notify(res.error?.message, "error"))
            }
          })
      : null,
    {
      revalidateOnFocus: false,
    }
  )

  const setCoupon = (coupon: Promotion | undefined) => {
    dispatch(setPromotion(coupon))
  }

  const applyPromotion = async (coupon_code: string, handleSuccess?: Function) => {
    if (!token || !orderDraft) return
    dispatch(setOpenScreenLoading(true))
    try {
      const res: any = await orderApi.applyPromotion({
        coupon_code,
        order_id: orderDraft.order_id,
        token,
      })
      dispatch(setOpenScreenLoading(false))

      const result = res.result
      if (result?.success) {
        dispatch(notify("Đã áp dụng voucher", "success"))
        const promotion = data.find((item: Promotion) => item.coupon_code === coupon_code)
        dispatch(setPromotion(promotion))
        const promotionLineList = result?.data?.promtion_line
        dispatch(
          setPromotionLineList(promotionLineList?.length > 0 ? promotionLineList : undefined)
        )
        handleSuccess && handleSuccess()
      } else {
        dispatch(notify(result.message, "error"))
      }
    } catch (error) {
      dispatch(setOpenScreenLoading(false))
    }
  }

  const cancelPromotion = async (handleSuccess?: Function) => {
    if (!token || !orderDraft) return

    const res: any = await orderApi.cancelPromotion({
      order_id: orderDraft?.order_id,
      token,
    })

    const result = res.result
    if (result.success) {
      dispatch(setPromotion(undefined))
      dispatch(setPromotionLineList(undefined))
      handleSuccess && handleSuccess()
    } else {
      dispatch(notify(result.message, "error"))
    }
  }

  return {
    data,
    error,
    isValidating,
    setCoupon,
    applyPromotion,
    cancelPromotion,
  }
}

export { usePromotion }
