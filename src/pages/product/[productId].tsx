import {
  Breadcrumb,
  HeaderMobile,
  ProductDetail,
  ProductDetailLoading,
  ProductItem,
  ProductTabs,
  Seo,
} from "@/components"
import { RootState } from "@/core/store"
import {
  getAttributeList,
  getFromLocalStorage,
  getListAttributeId,
  isArrayHasValue,
  isObjectHasValue,
  mergeProductAndProductDetail,
} from "@/helper"
import { MainLayout } from "@/layout"
import { BreadcrumbItem, Category, Product, ProductDetail as IProductDetail } from "@/models"
import { setAttributeList, setOpenCartModal, setProduct } from "@/modules"
import productApi from "@/services/productApi"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BiCart } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { useCartOrder, useProductDetail, useReview, useWishlist } from "shared/hook"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

interface ProduductDetailPageProps {
  product: IProductDetail
}

const ProductDetailPage = ({ product: productProps }: ProduductDetailPageProps) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { carts } = useCartOrder()
  const language = "vni"
  const { userInfo } = useSelector((state: RootState) => state.user)
  useWishlist(true)
  const { product, clearProductDetail } = useProductDetail({
    product: productProps,
  })
  const { clearComments } = useReview({
    shouldFetch: false,
    product_id: Number(router.query.productId) || 0,
  })
  const [breadcrumbList, setBreadcrumbList] = useState<BreadcrumbItem[]>([])

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
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.productId])

  // assign false to ref if the product detail page is unmount
  useEffect(() => {
    if (!product || !isObjectHasValue(product)) return

    dispatch(setProduct(product))
    const attributeList = getAttributeList(product)
    if (isArrayHasValue(attributeList)) {
      dispatch(setAttributeList(attributeList))
    }

    return () => {
      clearProductDetail()
      dispatch(setProduct(undefined))
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

  if (router.isFallback)
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
            <ProductDetail isLoading={false} product={product} type="detail" />
          </section>

          {isObjectHasValue(product) ? (
            <div className="product__detail-tabs-wrapper">
              <ProductTabs product={product} />
            </div>
          ) : null}

          {/* Related Products */}
          {isArrayHasValue(relatedProducts) ? (
            <div className="product__detail-related product__detail-item">
              <h3 className="product__detail-heading">
                {language === "vni" ? "sản Phẩm liên quan" : "Related products"}
              </h3>
              <Swiper
                className={`${
                  relatedProducts && relatedProducts?.length <= 4 ? "swiper-hide-navigation" : ""
                }`}
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
                {relatedProducts &&
                  isArrayHasValue(relatedProducts) &&
                  relatedProducts.map((product, index) => (
                    <SwiperSlide key={index}>
                      <ProductItem product={product} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          ) : null}

          {isArrayHasValue(viewedproducts) ? (
            <div className="product__detail-recently product__detail-item">
              <h3 className="product__detail-heading">
                {language === "vni" ? "Sản phẩm đã xem" : "Viewed recently products"}
              </h3>
              <Swiper
                className={`${viewedproducts.length <= 4 ? "swiper-hide-navigation" : ""}`}
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
                {viewedproducts.map((product, index) => (
                  <SwiperSlide key={index}>
                    <ProductItem product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
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
  console.log(getFromLocalStorage("partner_id"))

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
