import { ProductSaleItem } from "@/components"
import { RootState } from "@/core/store"
import { isArrayHasValue } from "@/helper"
import { Product, ProductSale } from "@/models"
import productApi from "@/services/productApi"
import { useSelector } from "react-redux"
import { useCartOrder } from "shared/hook"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import useSWR from "swr"

export const ProductSaleContainer = () => {
  const { addToCart, currentProductLoading } = useCartOrder(false)
  const token = useSelector((state: RootState) => state.user.token)
  const {
    data: productSales,
    isValidating,
    mutate,
  } = useSWR(
    "product_deals",
    () =>
      productApi.getSaleProductList(token).then((res: any) => {
        if (isArrayHasValue(res?.result?.data)) {
          return res?.result?.data
        }
        return []
      }),
    {
      revalidateOnFocus: false,
    }
  )

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
    <>
      {productSales && productSales?.length > 0 ? (
        <div className="container home__sale-container">
          {productSales?.map((product: ProductSale) => (
            <ProductSaleItem
              currentProductLoading={currentProductLoading}
              onAddToCart={handleAddToCart}
              key={product.deal_id}
              isLoading={isValidating}
              setProductsSale={(deal_id: number) =>
                mutate([
                  ...productSales.filter((item: ProductSale) => item.deal_id !== deal_id),
                  ,
                  false,
                ])
              }
              productSale={product}
            />
          ))}
        </div>
      ) : null}
    </>
  )
}
