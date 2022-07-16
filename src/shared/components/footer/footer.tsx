/* eslint-disable @next/next/no-img-element */
import { appStoreIcon, boCongThuong, googlePlayIcon, paymentMethodsImage } from "@/assets"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { IoLocationOutline } from "react-icons/io5"
import { RiFacebookCircleFill, RiGlobalLine, RiYoutubeFill } from "react-icons/ri"

export const Footer = () => {
  const router = useRouter()

  return (
    <footer
      style={{
        marginBottom:
          router.pathname === "/" || router.pathname === "/product/[productId]" ? 60 : 0,
      }}
      className="footer"
    >
      <div className="footer__body">
        <div className="container">
          <ul className="footer__body-list grid grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4 grid-col-xl-5">
            <li className="footer__body-list-item">
              <h3 className="footer__body-list-item-heading">VỀ CHÚNG TÔI</h3>
              <Link href="/gioi-thieu">
                <a className="footer__body-list-item-title">Giới thiệu</a>
              </Link>
              <Link href="/su-menh">
                <a className="footer__body-list-item-title">Sứ mệnh</a>
              </Link>
            </li>

            <li className="footer__body-list-item">
              <h3 className="footer__body-list-item-heading">HỖ TRỢ KHÁCH HÀNG</h3>

              {[
                {
                  path: "/chinh-sach-dat-hang",
                  label: "Chính sách đặt hàng và điều khoản hợp đồng",
                },
                { path: "/phuong-thuc-van-chuyen", label: "Phương thức vận chuyển" },
                { path: "/chinh-sach-bao-mat", label: "Chính sách bảo mật" },
                { path: "/chinh-sach-doi-tra", label: "Chính sách đổi trả" },
                { path: "/chinh-sach-tra-gop", label: "Chính sách trả góp" },
                { path: "/cau-hoi-thuong-gap", label: "Câu hỏi thường gặp" },
              ].map(({ label, path }, index) => (
                <Link key={index} href={path}>
                  <a className="footer__body-list-item-title">{label}</a>
                </Link>
              ))}
            </li>

            <li className="footer__body-list-item">
              <h3 className="footer__body-list-item-heading">THÔNG TIN LIÊN HỆ</h3>
              {[
                `Trụ sở: A10.08, Block A, Tầng 10, Tòa
                  nhà Officetel Sky Center - Phường 2
                  Quận Tân Bình - Tp. Hồ Chí Minh
                  Việt Nam`,
                "Hotline CSKH : 1900.58.88.54",
                "Văn phòng: 028.36368466/69",
                "Fax: 028.36366269",
                "Email: cs@womart.vn ",
                "Mã số thuế : 0315675278",
              ].map((item, index) => (
                <p className="footer__body-list-item-title" key={index}>
                  {item}
                </p>
              ))}
            </li>

            <li className="footer__body-list-item">
              <h3 className="footer__body-list-item-heading">THANH TOÁN & VẬN CHUYỂN</h3>
              <img className="img-fluid" src={paymentMethodsImage} alt="" />
            </li>

            <li className="footer__body-list-item">
              <h3 className="footer__body-list-item-heading">KẾT NỐI VỚI CHÚNG TÔI</h3>
              <div className="footer__body-icon-wrapper">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/womart.vietnam"
                >
                  <RiFacebookCircleFill />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCP8NAzxRVCDQAkwd1cxEpEg"
                >
                  <RiYoutubeFill />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://womart.com.vn/">
                  <RiGlobalLine />
                </a>
              </div>

              <div className="footer__main-contact-right">
                <h3 className="footer__body-list-item-heading footer__main-contact-right-heading">
                  Tải Ứng dụng trên điện thoại{" "}
                </h3>
                <div className="footer__body-image-wrapper">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.satavan.app"
                  >
                    <div className="image-container image-wrapper-item">
                      <Image src={googlePlayIcon} alt="" layout="fill" className="image" />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.satavan.app"
                  >
                    <div className="image-container image-wrapper-item image-wrapper-last">
                      <Image src={appStoreIcon} alt="" layout="fill" className="image" />
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom-wrapper">
        {/* <div className="footer__body-address-wrapper">
          <div className="container">
            <div className="footer__body-address">
              <div className="footer__body-address-icon">
                <IoLocationOutline />
              </div>
              <div className="footer__body-address-info">
                <p>
                  <strong>Địa chỉ văn phòng:</strong> 1004B Âu Cơ, Phường Hòa Thạnh, Quận Tân Phú,
                  Tp. HCM.
                </p>

                <p>
                  Womart nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng
                  trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="footer__bottom">
            <div className="footer__bottom-left">
              <h4>© 2022 - Bản quyền của Công Ty Cổ Phần Womart - Womart.vn</h4>
              <p>
                Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố
                Hồ Chí Minh cấp ngày 06/01/2010
              </p>
            </div>
            <div className="footer__bottom-right">
              <img className="img-fluid" src={boCongThuong} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
