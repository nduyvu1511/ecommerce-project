import { ScreenLoading } from "@/components"
import orderApi from "@/services/orderApi"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import useSWR from "swr"
import { RootState } from "../core"

const CheckingCheckoutStatus = () => {
  const router = useRouter()
  const { sale_order_id } = router.query
  const { token } = useSelector((state: RootState) => state.user)
  const { vnp_ResponseCode } = router.query

  const { isValidating } = useSWR(
    sale_order_id && token && vnp_ResponseCode === "00" ? "checking_checkout_status" : null,
    () =>
      orderApi
        .confirmTransaction({ sale_order_id: Number(sale_order_id), token })
        .then((res: any) => {
          if (res.result?.success) {
            window.close()
          }
        })
        .catch((err) => console.log(err))
  )

  return (
    <div className="checking__checkout-page">
      {isValidating ? (
        <ScreenLoading />
      ) : (
        <div>
          {router.isReady && vnp_ResponseCode !== "00" ? "Thanh toán không thành công" : ""}
        </div>
      )}
    </div>
  )
}

export default CheckingCheckoutStatus
