/* eslint-disable react/no-unescaped-entities */
import { Breadcrumb, HeaderMobile } from "@/components"
import { MainNoFooter } from "@/layout"

const GioiThieu = () => {
  return (
    <section className="static__page-container">
      <HeaderMobile centerChild={<p>Giới thiệu</p>} />
      <section className="container">
        <Breadcrumb breadcrumbList={[{ name: "Giới thiệu", path: "/" }]} />
        <div className="static__page">
          <h1>Giới thiệu</h1>
          <p>
            Womart Shop là Shop Online kết hợp với hệ thống cửa hàng bán lẻ , điểm dịch vụ phân phối
            hàng tiêu dùng thực phẩm với tiêu chí : đơn giản - hàng chuẩn pháp lý - giá bình dân ,
            hàng hóa đa dạng, đổi trả bảo hành nhanh .
          </p>
          <br />
          <p>
            Womart Shop vận hành mô hình kinh doanh Bán Hàng Trực Tiếp ( Direct to customer - D2C )
            dành cho các Nhà Sản Xuất và DN nhỏ có thể triển khai từ NSX đến trực tiếp NTD thông qua
            các kênh online , sàn TMĐT nhằm loại bỏ các chi phí trung gian đem lại giá thành tốt
            nhất cho NTD từ đó nâng cao nâng lực cạnh tranh và xây dựng thương hiệu trước các DN lớn
            và nhãn hàng lớn đã có sãn các điểm bán lẻ và kênh phân phối.
          </p>
          <br />
          <p>CÔNG TY TNHH WOMART D2C VIỆT NAM</p>
          <p>Mã số thuế : 0315675278 ( NGÀY CẤP: 15/05/2019)</p>
          <p>
            Địa chỉ: A10.08, Block A, Tầng 10, Tòa nhà Officetel Sky Center, Số 5B Phổ Quang, Phường
            2, Quận Tân Bình,Tp. Hồ Chí Minh, Việt Nam
          </p>
          <p>Tài khoản Ngân Hàng : 232323668 - NGÂN HÀNG TMCP Á ChÂU ( ACB ) CHI NHÁNH KHÁNH HỘI</p>
          <p>Hotline CSKH : 1900.58.88.54</p>
          <br />
          <p>Văn phòng: 028.36368466/69</p>
          <br />
          <p>Fax: 028.36366269</p>
          <br />
          <p>Email: cs@womart.vn</p>
        </div>
      </section>
    </section>
  )
}

GioiThieu.Layout = MainNoFooter
export default GioiThieu
