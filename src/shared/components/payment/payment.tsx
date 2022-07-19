/* eslint-disable @next/next/no-img-element */
import { companyIcon } from "@/assets"
import { InputCheckbox } from "@/components"
import { RootState } from "@/core/store"
import { Payment as IPayment } from "@/models"
import { setPayment } from "@/modules"
import { API_URL } from "@/services"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { notify } from "reapop"
import { useOrder, usePayment } from "shared/hook"

interface PaymentProps {
  paymentList: IPayment[]
}

export const Payment = ({ paymentList }: PaymentProps) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { token } = useSelector((state: RootState) => state.user)
  const { payment, address, delivery, productList } = useSelector((state: RootState) => state.order)
  const { updateOrderDraft } = useOrder()
  const { orderDraft } = useSelector((state: RootState) => state.order)
  const { createPayment } = usePayment(false)

  // Functions
  const handleAddPayment = async (paymentProps: IPayment) => {
    if (!orderDraft?.order_id) return
    if (!delivery) {
      dispatch(notify("Bạn cần phải chọn phương thức vận chuyển trước!", "warning"))
      return
    }
    if (paymentProps.provider === "vnpay") {
      createPayment(
        {
          sale_order_id: orderDraft.order_id,
          token,
          acquirer_id: paymentProps.acquirer_id,
          returned_url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/checking-checkout-status?sale_order_id=${orderDraft.order_id}`,
        },
        (data: any) => {
          router.push({
            query: { sale_order_id: orderDraft.order_id },
          })
          window.open(data.vnpay_payment_url, "name", "height=600,width=800")?.focus()
          // setToSessionStorage(COMPOUNDING_VNPAY_CODE, data.vnpay_code)
        }
      )
    } else {
      if (paymentProps?.acquirer_id !== payment?.acquirer_id) {
        updateOrderDraft({
          partner_shipping_id: address?.id,
          acquirer_id: paymentProps.acquirer_id,
          handleSuccess: () => {
            dispatch(setPayment(paymentProps))
          },
        })
      }
    }
  }

  return (
    <div
      className={`payment__order checkout-item ${
        !address || !delivery ? "payment__order-disabled" : ""
      }`}
    >
      <h3 className="checkout-heading">Phương thức thanh toán</h3>
      <ul className="payment__order__list grid grid-col-1">
        {paymentList.length > 0 &&
          paymentList.map(
            (item) =>
              item.state === "enabled" && (
                <li
                  key={item.acquirer_id}
                  onClick={() => handleAddPayment(item)}
                  className={`payment__order__list-item ${
                    payment?.acquirer_id === item.acquirer_id
                      ? "payment__order__list-item-active"
                      : ""
                  }`}
                >
                  <div className="payment__order__list-item-content">
                    <img
                      src={item?.image_url ? `${API_URL}${item?.image_url || ""}` : companyIcon}
                      alt=""
                    />
                    <p>{item.name}</p>
                  </div>
                  <InputCheckbox
                    type="radio"
                    isChecked={payment?.acquirer_id === item.acquirer_id}
                    onCheck={() => handleAddPayment(item)}
                  />
                </li>
              )
          )}
      </ul>
    </div>
  )
}
