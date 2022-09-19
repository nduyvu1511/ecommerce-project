import { avatar as avatarBlank, thumbnailImage } from "@/assets"
import { CategoryItem, HeaderMobile, HomeCategory, navMobileLinks, Popup, Seo } from "@/components"
import { MainBanner, MainContent, ProductSaleContainer, SecondaryBanner } from "@/container"
import { MainLayout } from "@/layout"
import { setOpenCartModal } from "@/modules"
import { API_URL } from "@/services"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { AiOutlineUser } from "react-icons/ai"
import { BiCart } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { useBanner, useCartOrder, useCategory, useWishlist } from "shared/hook"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { RootState } from "../core"

const Home = () => {
  useWishlist(true)
  const { data: categories } = useCategory(true)
  const { carts } = useCartOrder()
  const router = useRouter()
  const dispatch = useDispatch()
  const { data: banners, isValidating: isBannerLoading } = useBanner()
  const { token, userInfo: { avatar = "" } = { userInfo: undefined } } = useSelector(
    (state: RootState) => state.user
  )

  return (
    <>
      <Seo
        title="Womart - Mua online, tiêu dùng tiết kiệm"
        thumbnailUrl={thumbnailImage}
        url={"https://womart.vn"}
        description="Womart Shop là mô hình bán lẻ trực tiếp D2C và B2B ( bán sỉ ) trực tiếp online kết hợp với các điểm dịch vụ offline nhằm loại bỏ các chi phí trung gian mang lại lợi thế giá rẻ cho người tiêu dùng"
      />

      <HeaderMobile
        showSearchInput
        rightChild={
          <>
            {token ? (
              <Link passHref href="/account">
                <div className="image-container">
                  <Image
                    src={avatar ? `${API_URL}${avatar}` : avatarBlank}
                    alt=""
                    layout="fill"
                    className="image"
                    objectFit="cover"
                  />
                </div>
              </Link>
            ) : (
              <button
                onClick={() => router.push(`/${token ? "account" : "login"}`)}
                className="btn-reset header__main-top-actions-icon-mobile"
              >
                <AiOutlineUser />
              </button>
            )}

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

      <section className="home">
        {isBannerLoading ? (
          <div className="container">
            <MainBanner
              banners={{
                left: null,
                right: null,
              }}
            />
          </div>
        ) : banners?.length > 1 ? (
          <div className="container">
            <MainBanner
              banners={{
                left: (banners as any)?.[0]?.images || null,
                right: (banners as any)?.[1]?.images || null,
              }}
            />
          </div>
        ) : null}

        {/* saleProduct */}
        <ProductSaleContainer />

        <div className="container">
          <HomeCategory />
        </div>

        {isBannerLoading ? (
          <div className="container">
            <SecondaryBanner banners={null} />
          </div>
        ) : null}

        {banners?.length > 2 ? (
          <div className="container">
            <SecondaryBanner banners={(banners as any)?.[2]?.images} />
          </div>
        ) : null}

        {/* Content */}
        <div className="container">
          <MainContent />
        </div>

        <br />

        {/* Category */}
        <div className="container">
          <div className="home__category">
            <ul className="home__category-list grid grid-col-2 grid-col-sm-3 grid-col-md-4 grid-col-lg-6 grid-col-xl-8">
              {categories.map(
                (cate) => cate.icon && <CategoryItem key={cate.id} category={cate} />
              )}
            </ul>
          </div>
        </div>
      </section>

      <div className="nav__mobile">
        <ul className="nav__mobile-list">
          {navMobileLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() =>
                nav.onClick ? dispatch(nav.onClick && nav.onClick(true)) : router.push(nav.id)
              }
              className="nav__mobile-list-item"
            >
              {nav.icon}
              <p>{nav.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <Popup />
    </>
  )
}

Home.Layout = MainLayout

export default Home
