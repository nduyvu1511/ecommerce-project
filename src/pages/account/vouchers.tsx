import { cartEmptyIcon } from "@/assets"
import { PromotionItem } from "@/components"
import { AccountContainer } from "@/container"
import { MainAuthLayout } from "@/layout"
import { useRouter } from "next/router"
import { RiLoader4Line } from "react-icons/ri"
import { usePromotion } from "shared/hook"

const AccountGeneral = () => {
  const router = useRouter()
  const { data: promotionList, isValidating } = usePromotion()

  return (
    <AccountContainer
      headerMobileTitle="Kho voucher"
      breadcrumbList={[{ path: "/account", name: "kho voucher" }]}
      heading="Kho voucher"
    >
      <div className="voucher-container">
        {isValidating && promotionList?.length === 0 ? (
          <div className="loader-container">
            <RiLoader4Line className="loader" />
          </div>
        ) : null}

        {!isValidating && !promotionList?.length ? (
          <div className="voucher--empty">
            {cartEmptyIcon}

            <p>Danh sách voucher của bạn hiện đang trống </p>
          </div>
        ) : null}

        <ul className="voucher__list">
          {promotionList?.length > 0
            ? promotionList.map(
                (promo) =>
                  promo.is_use_promotion && (
                    <div key={promo.promotion_id} onClick={() => router.push("/category")}>
                      <PromotionItem promotion={promo} />
                    </div>
                  )
              )
            : null}
        </ul>
      </div>
    </AccountContainer>
  )
}

AccountGeneral.Layout = MainAuthLayout

export default AccountGeneral
