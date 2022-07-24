import { RootState } from "@/core/store"
import { getListAttributeId, isObjectHasValue, mergeProductAndProductDetail } from "@/helper"
import {
  AttributeWithParentId,
  GetProductDetail,
  Product,
  ProductDetail,
  ProductDetailRes,
} from "@/models"
import productApi from "@/services/productApi"
import { useSelector } from "react-redux"
import useSWR, { KeyedMutator } from "swr"

interface Res {
  data: ProductDetail | undefined
  isValidating: boolean
  clearProduct: Function
  isInitialLoading: boolean
  mutate: KeyedMutator<any>
  getProductVariation: (
    product: GetProductDetail & { listAttribute: AttributeWithParentId[] }
  ) => void
}

interface Props {
  type: "detail" | "modal"
  initialValue?: ProductDetail | Product
}

const useProductDetail = ({ type, initialValue }: Props): Res => {
  const { userInfo } = useSelector((state: RootState) => state.user)
  const { isValidating, data, mutate, error } = useSWR<any>(
    (type === "detail" && userInfo?.id) || type === "modal" ? "get_product_detail" : null,
    () =>
      productApi
        .getProductDetail({
          partner_id: userInfo?.id,
          list_products: initialValue ? [getListAttributeId(initialValue)] : [],
          product_id: initialValue?.product_tmpl_id || 0,
        })
        .then((res: any) => {
          const productDetail: ProductDetailRes = res?.result?.data?.detail
          return {
            ...mergeProductAndProductDetail({ product: initialValue as Product, productDetail }),
            price: productDetail?.price || initialValue?.price || 0,
          }
        })
        .catch((err) => console.log(err)),
    {
      dedupingInterval: 1000,
      revalidateOnFocus: false,
      fallbackData: initialValue,
    }
  )

  const getProductVariation = (
    params: GetProductDetail & { listAttribute: AttributeWithParentId[] }
  ) => {
    productApi
      .getProductDetail({
        ...params,
        partner_id: userInfo?.id || 0,
      })
      .then((res: any) => {
        const productDetail: ProductDetailRes = res.result.data.detail
        if (isObjectHasValue(productDetail)) {
          mutate(
            mergeProductAndProductDetail({
              productDetail,
              product: data,
            }),
            false
          )
        }
      })
  }

  const clearProduct = () => {
    mutate(undefined, false)
  }

  return {
    data,
    isValidating,
    clearProduct,
    isInitialLoading: data === undefined && error === undefined,
    mutate,
    getProductVariation,
  }
}

export { useProductDetail }
