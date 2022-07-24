import {
  Breadcrumb,
  HeaderMobile,
  ProductDetail,
  ProductDetailLoading,
  ProductSlide,
  ProductTabs,
  Seo,
} from "@/components"
import { RootState } from "@/core/store"
import {
  getFromLocalStorage,
  getListAttributeId,
  isArrayHasValue,
  isObjectHasValue,
  mergeProductAndProductDetail,
} from "@/helper"
import { MainLayout } from "@/layout"
import { BreadcrumbItem, Category, Product, ProductDetail as IProductDetail } from "@/models"
import { setOpenCartModal, setProduct } from "@/modules"
import productApi from "@/services/productApi"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { useRouter } from "next/router"
import Script from "next/script"
import { useEffect, useRef, useState } from "react"
import { BiCart } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { useCartOrder, useProductDetail, useReview, useWishlist } from "shared/hook"

interface ProduductDetailPageProps {
  product: IProductDetail
}

const ProductDetailPage = ({ product: productProps }: ProduductDetailPageProps) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { carts } = useCartOrder()
  useWishlist(true)
  const secondFetch = useRef<boolean>(false)
  const userInfo = useSelector((state: RootState) => state.user.userInfo)
  const { clearComments } = useReview({
    shouldFetch: false,
    product_id: Number(router.query.productId) || 0,
  })
  const [breadcrumbList, setBreadcrumbList] = useState<BreadcrumbItem[]>([])

  const {
    data: product,
    clearProduct: clearProductDetail,
    isValidating,
    mutate,
  } = useProductDetail({ type: "detail", initialValue: productProps })

  // State
  const getProductsFromSession = sessionStorage.getItem("viewedProducts")
  const [viewedproducts, setViewedProducts] = useState<Array<Product>>(
    getProductsFromSession ? JSON.parse(getProductsFromSession) : []
  )
  const [relatedProducts, setRelatedProducts] = useState<Array<Product>>()

  // Get viewed products by session storage
  useEffect(() => {
    if (router.query?.productId && product?.category?.id) {
      productApi
        .getProductList({
          category_id: Number(product.category.id),
          limit: 12,
          partner_id: userInfo?.id || 0,
        })
        .then((res: any) => {
          const products: Product[] = res.result
          setRelatedProducts(
            [...products].filter((item) => item.product_tmpl_id !== product.product_tmpl_id)
          )
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.productId])

  // Get category breadcrumb
  useEffect(() => {
    const categories: Category[] = product?.category.relate || []
    if (categories?.length > 0) {
      setBreadcrumbList([
        ...categories.map((item) => ({
          path: `/category/${item.id}`,
          name: item.name,
        })),
        { name: product?.product_name || "", path: "" },
      ])
    } else {
      setBreadcrumbList([{ name: product?.product_name || "", path: "/" }])
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.productId])

  // assign false to ref if the product detail page is unmount
  useEffect(() => {
    if (!router.isReady) return
    if (!product || !isObjectHasValue(product)) return
    if (!secondFetch.current) {
      secondFetch.current = true
    } else {
      mutate()
    }
    dispatch(setProduct(product))
    return () => {
      clearProductDetail()
      clearComments()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.productId])

  // Get viewed recently products
  useEffect(() => {
    if (!isObjectHasValue(product)) return

    if (isArrayHasValue(viewedproducts)) {
      const existProduct = viewedproducts.find(
        (pro) => pro.product_tmpl_id === product?.product_tmpl_id
      )

      if (existProduct) {
        const newProducts = [...viewedproducts].filter(
          (product) => product.product_tmpl_id !== existProduct.product_tmpl_id
        )
        return setViewedProducts([existProduct, ...newProducts])
      }
    }

    const newProducts = [product as Product, ...viewedproducts]
    sessionStorage.setItem("viewedProducts", JSON.stringify(newProducts))
    setViewedProducts(newProducts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, product])

  if (router.isFallback || isValidating)
    return (
      <div className="product__detail-loading">
        <div className="container">
          <ProductDetailLoading />
        </div>
      </div>
    )

  if (!product) return null
  return (
    <>
      <Seo
        title={product?.name || ""}
        thumbnailUrl={
          product?.image_url?.[0] ||
          "https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/212711279_266812501879715_2497633353306262097_n.png?stp=c127.0.757.395a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=M7bK8QeQxhwAX-ZFxcG&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT-LfkFpjPdTONGSnbub0O9Cj6Wnvp1QIPz_UKqL8gqiNg&oe=62D8B90E"
        }
        url={`https://womart.vn/product/${product?.product_tmpl_id || ""}`}
        description={product?.name || ""}
      />

      <HeaderMobile
        centerChild={<p>{product?.product_name || ""} </p>}
        showHomeButton={true}
        rightChild={
          <>
            <button
              onClick={() => dispatch(setOpenCartModal(true))}
              className="btn-reset header__main-top-actions-icon-mobile"
            >
              <BiCart />
              <span className="cart__quantity-absolute">{carts.length}</span>
            </button>
          </>
        }
      />

      <div className="product__detail-container">
        <div className="container">
          {isObjectHasValue(product) ? <Breadcrumb breadcrumbList={breadcrumbList} /> : null}
          <section className="product__detail-wrapper">
            <ProductDetail product={product} />
          </section>

          {isObjectHasValue(product) ? (
            <div className="product__detail-tabs-wrapper">
              <ProductTabs product={product} />
            </div>
          ) : null}

          {/* Related Products */}
          {relatedProducts && isArrayHasValue(relatedProducts) ? (
            <div className="product__detail-related product__detail-item">
              <h3 className="product__detail-heading">Sản Phẩm liên quan</h3>
              <ProductSlide products={relatedProducts} />
            </div>
          ) : null}

          {viewedproducts && isArrayHasValue(viewedproducts) ? (
            <div className="product__detail-recently product__detail-item">
              <h3 className="product__detail-heading">Sản phẩm đã xem</h3>
              <ProductSlide products={viewedproducts} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

ProductDetailPage.Layout = MainLayout
export default ProductDetailPage

export const getStaticPaths: GetStaticPaths = async () => {
  const res: any = await productApi.getProductList({ limit: 100 })

  return {
    paths: res.result.map((item: Product) => ({
      params: { productId: item.product_tmpl_id + "" },
    })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const product_id = Number(context.params?.productId) || 0

  const {
    result: [product],
  }: any = await productApi.getProductList({
    product_id,
  })

  if (!isObjectHasValue(product))
    return {
      notFound: true,
    }

  const {
    result: {
      data: { detail: productDetail },
    },
  }: any = await productApi.getProductDetail({
    product_id: product.product_prod_id,
    list_products: [getListAttributeId(product)],
    partner_id: getFromLocalStorage("product_id") || 0,
  })

  let newProduct: IProductDetail | null = null

  if (isObjectHasValue(product) && isObjectHasValue(productDetail)) {
    newProduct = mergeProductAndProductDetail({ product, productDetail })
  }

  return {
    props: {
      product: newProduct,
    },
    revalidate: 10,
  }
}
