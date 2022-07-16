import { Breadcrumb } from "@/components"
import { OrderStatus } from "@/components/account/status"
import { MainAuthLayoutNoFooter } from "@/layout"
import userApi from "@/services/userApi"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import useSWR from "swr"
import { RootState } from "../core"

const OrderConfirmed = () => {
  const router = useRouter()
  const { sale_order_id } = router.query
  const { token } = useSelector((state: RootState) => state.user)

  const { data: orderDone, isValidating } = useSWR(
    token && sale_order_id ? "get_order_done" : null,
    () =>
      userApi
        .getDetailOrderHistory({ sale_order_id: Number(sale_order_id), token })
        .then((res: any) => res?.result?.data?.info_booking)
        .catch((err) => console.log(err))
  )

  return (
    <section className="order__confirm-container">
      <div className="container">
        <Breadcrumb breadcrumbList={[{ name: "Chi Tiết đơn hàng", path: "" }]} />
      </div>
      {orderDone ? (
        <div className="order__confirm">
          <OrderStatus type="order" order={orderDone} />
        </div>
      ) : null}
    </section>
  )
}

OrderConfirmed.Layout = MainAuthLayoutNoFooter

export default OrderConfirmed
