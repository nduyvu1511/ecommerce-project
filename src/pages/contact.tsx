import { Breadcrumb, HeaderMobile } from "@/components"
import { MainLayout } from "@/layout"
import { FiPhoneCall } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"
import { MdLocationPin } from "react-icons/md"

const Contact = () => {
  const language = "vni"

  return (
    <>
      <HeaderMobile centerChild={<p>Liên hệ</p>} />

      <section className="contact__container">
        <div className="container">
          <Breadcrumb breadcrumbList={[{ name: "Liên hệ", path: "" }]} />
          <header className="contact__header">
            <h2 className="contact-heading">{language === "vni" ? "Liên Lạc" : "Get In Touch"}</h2>
            <p className="contact-paragraph">CÔNG TY TNHH WOMART D2C VIỆT NAM</p>
          </header>

          <div className="contact__body">
            <ul className="contact__body-list grid grid-col-1 grid-col-md-2 grid-col-lg-3">
              <li className="contact__body-list-item">
                <MdLocationPin />
                <h5>
                  A10.08, Block A, Tầng 10, Tòa nhà Officetel Sky Center, Số 5B Phổ Quang, Phường 2,
                  Quận Tân Bình,Tp. Hồ Chí Minh, Việt Nam
                </h5>
                <p>{language === "vni" ? "Địa chỉ của chúng tôi" : "Our address"}</p>
              </li>

              <li className="contact__body-list-item">
                <FiPhoneCall />
                <h5>1900.58.88.54</h5>
                <p>
                  {language === "vni" ? "Liên hệ bằng số điện thoại" : "Contact by phone number"}
                </p>
              </li>

              <li className="contact__body-list-item">
                <HiOutlineMail />
                <h5>cs@womart.vn</h5>
                <p>{language === "vni" ? "Liên hệ bằng email" : "Contact by email"}</p>
              </li>
            </ul>

            <div className="contact__body-form-wrapper">
              <header className="contact__body-form-header">
                <h3 className="contact-heading">
                  {language === "vni" ? "Gửi Cho Chúng Tôi" : "Send Us"}
                </h3>
              </header>

              <form action="#" className="contact__body-form">
                <div className="form-item">
                  <input type="text" placeholder="Tên của bạn" className="form-item-input" />
                </div>

                <div className="form-item">
                  <input type="text" placeholder="Email của bạn" className="form-item-input" />
                </div>

                <div className="form-item">
                  <textarea
                    placeholder={language === "vni" ? "Lời nhắn" : "Your message"}
                    className="form-item-input"
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                  ></textarea>
                </div>

                <button className="btn-primary">Gửi lời nhắn</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Contact.Layout = MainLayout

export default Contact
