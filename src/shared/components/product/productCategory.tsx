import { RootState } from "@/core/store"
import { isArrayHasValue } from "@/helper"
import { Product } from "@/models"
import { useSelector } from "react-redux"
import { useCartOrder } from "shared/hook"
import { ProductItemLoading } from "../loader"
import { ProductItem } from "./productItem"
import { ProductItemList } from "./productItemList"

interface ProductCategoryProps {
  data: Product[]
  gridView: number
  isLoading?: boolean
}

export const ProductCategory = ({ data, gridView, isLoading }: ProductCategoryProps) => {
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
    <div
      className={`product__list-container grid ${
        gridView === 1 ? "" : `grid-col-2 grid-col-sm-3 grid-col-lg-3`
      } grid-col-xl-${gridView}`}
    >
      {isArrayHasValue(data) && !isLoading ? (
        <>
          {gridView === 1
            ? data.map((product, index) => (
                <ProductItemList
                  isAddingToCart={currentProductLoading === product.product_prod_id}
                  onAddToCart={handleAddToCart}
                  key={index}
                  product={product}
                />
              ))
            : data.map((product, index) => (
                <ProductItem
                  isAddingToCart={currentProductLoading === product.product_prod_id}
                  onAddToCart={handleAddToCart}
                  key={index}
                  product={product}
                />
              ))}
        </>
      ) : null}

      {/* Show when product status is fetching and has no data */}
      {isLoading
        ? Array.from({ length: 24 }).map((_, index) => <ProductItemLoading key={index} />)
        : null}
    </div>
  )
}
