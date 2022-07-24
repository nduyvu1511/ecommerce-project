import { RootState } from "@/core/store"
import { formatMoneyVND, getAttributeList, getPriceProduct, isArrayHasValue } from "@/helper"
import { AttributeWithParentId, ProductDetail as IProductDetail } from "@/models"
import { addProductCompare, setOpenScreenLoading } from "@/modules"
import { API_URL } from "@/services"
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import { FaShoppingBasket } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { RiArrowUpDownLine, RiLoader2Line } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { notify } from "reapop"
import { useCartOrder, useProductDetail } from "shared/hook"
import ButtonWishlist from "../button/buttonAddWishlist"
import ButtonShare from "../button/buttonShare"
import { InputQuantity } from "../inputs"
import { Star } from "../star"
import ProductImg from "./productImage"
import { ProductVariation } from "./productVariation"

interface ProductDetailProps {
  product: IProductDetail
  type?: "modal" | "detail"
}

export const ProductDetail = ({ product, type = "detail" }: ProductDetailProps) => {
  const dispatch = useDispatch()
  const divRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { token = "" } = useSelector((state: RootState) => state.user)
  const { addToCart } = useCartOrder(false)
  const { getProductVariation } = useProductDetail({ type: "detail", initialValue: product })
  const [isAddLoading, setAddLoading] = useState<boolean>(false)
  const [openVariantModal, setOpenVariantModal] = useState<"buy" | "cart" | "">()
  const [quantity, setQuantity] = useState<number>(1)
  const [attributes, setAttributes] = useState<AttributeWithParentId[]>(() =>
    isArrayHasValue(product.attributes) ? getAttributeList(product) : []
  )
  // Functions
  const handleChangeVariantAttribute = (att: AttributeWithParentId) => {
    const newAttributes = attributes.map((item) => (item.parentId === att.parentId ? att : item))
    setAttributes(newAttributes)
    getProductVariation({
      product_id: product.product_prod_id,
      list_products: [
        {
          id: product.product_tmpl_id,
          lst_attributes_id: newAttributes.map((item) => item.id),
        },
      ],
      listAttribute: newAttributes,
    })
  }

  const handleAddOrBuyProduct = (type: "buy" | "cart") => {
    if (!token) {
      router.push("/login")
      return
    }

    if (isAddLoading) return

    type === "buy" ? dispatch(setOpenScreenLoading(true)) : setAddLoading(true)

    addToCart(
      {
        product_id: product.product_prod_id,
        product_qty: quantity,
        token,
        uom_id: product.uom.id,
        offer_pricelist: false,
      },
      type !== "buy",
      () => {
        if (type === "buy") {
          dispatch(setOpenScreenLoading(false))
          setOpenVariantModal("")
          router.push("/cart")
        } else {
          setAddLoading(false)
        }
      },
      () => {
        type === "buy" ? dispatch(setOpenScreenLoading(false)) : setAddLoading(false)
      }
    )
  }

  const handleAddToCompareList = () => {
    dispatch(notify("Đã thêm vào danh sách so sánh", "success"))
    dispatch(addProductCompare(product))
  }

  return (
    <>
      <div className="modal__product-content">
        {isArrayHasValue(product.image_url) ? (
          <ProductImg isStock={product.qty_available > 0} type={type} images={product.image_url} />
        ) : null}

        <div ref={divRef} className="product__intro">
          <div className="modal__product-header">
            <p className="modal__product-title">{product.product_name}</p>

            <div className="modal__product-sub">
              <p className="modal__product-sub-item modal__product-sub-item-star">
                <Star ratingValue={product.star_rating * 20} size={16} readonly />
              </p>

              <p className="modal__product-sub-item modal__product-sub-item-rating">
                {product.rating_count} đánh giá
              </p>

              <p className="modal__product-sub-item modal__product-sub-item-comment">
                {product.comment_count} bình luận
              </p>
            </div>
          </div>

          <div className="product__intro-price">
            <div className="product__intro-price-wrapper">
              <p
                className={`${
                  product?.daily_deal_promotion?.compute_price
                    ? "product__intro-price-old"
                    : "product__intro-price-current"
                }`}
              >
                {formatMoneyVND(
                  product?.daily_deal_promotion?.compute_price
                    ? product.price * quantity
                    : getPriceProduct(product) * quantity
                )}
              </p>

              {product?.daily_deal_promotion?.compute_price ? (
                <p className="product__intro-price-current">
                  {formatMoneyVND(getPriceProduct(product) * quantity)}
                </p>
              ) : null}

              <span className="product__intro-price-unit">
                / {quantity > 1 ? quantity : ""} {product?.uom?.name}
              </span>
            </div>
          </div>

          {product?.attributes && product.attributes.length > 0 ? (
            <div className="product__intro-variation-wrapper">
              {product.attributes.map((att) => (
                <ProductVariation
                  onChangeAttribute={(id) => {
                    handleChangeVariantAttribute(id)
                  }}
                  attribute={att}
                  key={att.id}
                />
              ))}
            </div>
          ) : null}

          <div className="product__intro-quantity">
            <p>Số lượng</p>
            <InputQuantity quantity={quantity} onChangeQuantity={(q: number) => setQuantity(q)} />
          </div>

          <div className="product__intro-shop">
            <button
              onClick={() => setOpenVariantModal("buy")}
              className="btn-primary product__intro-shop-cart-btn show-on-md"
            >
              <span>Mua ngay</span>
            </button>

            <button
              onClick={() => handleAddOrBuyProduct("buy")}
              className="btn-primary product__intro-shop-cart-btn hide-on-md"
            >
              <span>Mua ngay</span>
            </button>

            <button
              onClick={() => handleAddOrBuyProduct("cart")}
              className="product__intro-shop-btn"
            >
              {isAddLoading ? (
                <RiLoader2Line className="loader" />
              ) : (
                <>
                  <FaShoppingBasket />
                  <span>Thêm giỏ hàng</span>
                </>
              )}
            </button>

            <button
              onClick={() => setOpenVariantModal("cart")}
              className="product__intro-shop-btn-sm product__intro-shop-cart-mobile"
            >
              <FaShoppingBasket />
              <span>Thêm giỏ hàng</span>
            </button>
          </div>

          <div className="product__intro-bottom">
            <div className="product__intro-sub">
              <ButtonWishlist product={product} />

              <button onClick={handleAddToCompareList} className="product__intro-sub-item">
                <RiArrowUpDownLine />
              </button>
            </div>

            <div className="product__intro-bottom-separate"></div>
            <ButtonShare
              product_id={product.product_tmpl_id}
              imageUrl={`${process.env.REACT_APP_API_URL}${product.image_url[0]}`}
              name={product.product_name}
              description={product.description}
            />
          </div>
        </div>
      </div>

      {openVariantModal ? (
        <>
          <div className="product__variant-modal">
            <header className="product__variant-modal-header">
              <div className="product__variant-modal-header-left">
                {product?.image_url?.[0] ? (
                  <div className="image-container">
                    <Image
                      src={`${API_URL}${product?.image_url?.[0] || ""}`}
                      alt=""
                      layout="fill"
                      className="image"
                    />
                  </div>
                ) : null}

                <p>
                  {formatMoneyVND((product.price || 0) * quantity)}
                  <span>/</span>
                  <span>
                    {quantity} {product.uom.name}
                  </span>
                </p>
              </div>

              <button onClick={() => setOpenVariantModal("")} className="btn-reset">
                <IoClose />
              </button>
            </header>

            {product.attributes?.length > 0 ? (
              <div className="product__variant-modal-variants">
                {product.attributes.map((att) => (
                  <ProductVariation
                    onChangeAttribute={(att) => {
                      handleChangeVariantAttribute(att)
                    }}
                    attribute={att}
                    key={att.id}
                  />
                ))}
              </div>
            ) : null}

            <div className="product__variant-modal-quantity">
              <p>Số lượng</p>
              <InputQuantity quantity={quantity} onChangeQuantity={(q: number) => setQuantity(q)} />
            </div>

            <div className="product__variant-modal-btn">
              <button
                onClick={() => handleAddOrBuyProduct(openVariantModal)}
                className="btn-primary"
              >
                {isAddLoading ? (
                  <RiLoader2Line className="loader" />
                ) : (
                  <span>{openVariantModal === "buy" ? "Mua ngay" : "Thêm giỏ hàng"}</span>
                )}
              </button>
            </div>
          </div>

          <div
            onClick={() => setOpenVariantModal("")}
            className="product__variant-modal-overlay"
          ></div>
        </>
      ) : null}
    </>
  )
}
