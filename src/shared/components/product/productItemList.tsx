import { Product } from "@/models"
import { ProductListLoading } from "../loader"
import { ProductItem } from "./productItem"

interface ProductItemListProps {
  product: Product
  isLoading?: boolean
}

export const ProductItemList = ({ product, isLoading }: ProductItemListProps) => {
  return (
    <>
      {isLoading ? (
        <ProductListLoading type="large" />
      ) : (
        <div className="product__item-list">
          <ProductItem product={product} />
        </div>
      )}
    </>
  )
}
