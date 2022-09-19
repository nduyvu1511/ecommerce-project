import { RootState } from "@/core/store"
import { isArrayHasValue } from "@/helper"
import { Product } from "@/models"
import { useSelector } from "react-redux"
import { useCartOrder } from "shared/hook"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { ProductItem } from "./productItem"

interface ProductSlideProps {
  products: Product[]
}

const ProductSlide = ({ products }: ProductSlideProps) => {
  const token = useSelector((state: RootState) => state.user.token)
  const { addToCart, currentProductLoading } = useCartOrder(false)

  const handleAddToCart = (product: Product) => {
    addToCart(
      {
        product_id: product.product_prod_id,
        product_qty: 1,
        token,
        uom_id: product.uom.id,
        offer_pricelist: false,
      },
      true
    )
  }

  return (
    <Swiper
      className={`${products && products?.length <= 4 ? "swiper-hide-navigation" : ""}`}
      modules={[Navigation]}
      slidesPerView={2}
      slidesPerGroup={2}
      navigation
      spaceBetween={5}
      breakpoints={{
        576: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        992: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1024: {
          slidesPerView: 5,
          slidesPerGroup: 5,
        },
        1200: {
          slidesPerView: 6,
          slidesPerGroup: 6,
        },
      }}
    >
      {products &&
        isArrayHasValue(products) &&
        products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductItem
              onAddToCart={handleAddToCart}
              isAddingToCart={currentProductLoading === product.product_prod_id}
              product={product}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export { ProductSlide }
