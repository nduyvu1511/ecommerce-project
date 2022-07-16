import { RootState } from "@/core/store"
import { Payment } from "@/models"
import orderApi from "@/services/orderApi"
import { useDispatch, useSelector } from "react-redux"
import { notify } from "reapop"
import useSWR from "swr"

interface PaymentSWR {
  data: Payment[]
  error: any
  isValidating: boolean
}

const usePayment = (): PaymentSWR => {
  const dispatch = useDispatch()
  const { token } = useSelector((state: RootState) => state.user)
  const { productList, orderDraft, address } = useSelector((state: RootState) => state.order)

  const { data, error, isValidating } = useSWR(
    "payment",
    token && productList && orderDraft
      ? () =>
          orderApi.getPaymentList({ token }).then((res: any) => {
            if (res?.result?.success) {
              return res.result.data
            } else {
              dispatch(notify(res.result.message, "error"))
            }
          })
      : null,
    {
      revalidateOnFocus: false,
    }
  )

  return {
    data,
    error,
    isValidating,
  }
}

export { usePayment }

