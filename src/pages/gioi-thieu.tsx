/* eslint-disable react/no-unescaped-entities */
import { Breadcrumb, HeaderMobile } from "@/components"
import { MainLayout, MainNoFooter } from "@/layout"

const GioiThieu = () => {
  return (
    <section className="static__page-container">
      <HeaderMobile centerChild={<p>Giới thiệu</p>} />
      <section className="container">
        <Breadcrumb breadcrumbList={[{ name: "Giới thiệu", path: "/" }]} />
        <div className="static__page">
          <h1>Giới thiệu</h1>
          <p>
            Womart Shop là Shop Online bán lẻ cho Người Tiêu Dùng ( B2C) và tích hợp hệ thống quản
            lý kênh phân phối sỉ ( B2B), quản lý hệ thống kênh phân phối ( Distribution management
            system – DMS ) cho các cửa hàng tạp hóa , các nhà phân phối , các nhân viên thị trường
            đang bán kênh GT ( kênh phân phối truyền thống ) trên cả nước, các Cộng Tác Viên đang
            tìm kiếm 1 công ty phân phối hàng đúng pháp lý, đa dạng nghành hàng để bán hàng với
            thương hiệu cá nhân nhằm kiếm thêm thu nhập hằng ngày với hệ thống các cửa hàng bán lẻ,
            tạp hóa liên kết, các điểm dịch vụ của Công Ty TNHH Womart D2C Việt Nam ( Điểm Bán Hàng
            Womart – Womart POS ) phân phối hàng tiêu dùng thực phẩm với tiêu chí : đơn giản - hàng
            chuẩn pháp lý , nói không với hàng giả, hàng kém chất lượng - giá bình dân , hàng hóa đa
            dạng, đổi trả bảo hành nhanh tại các điểm dịch vụ Womart POS.
          </p>
          <br />
          <p>
            Womart Shop rất phù hợp với các nhãn hàng cần triển khai kênh GT nhanh và rộng cùng 1
            lúc , mô hình Womart Shop phù hợp các công ty vận hành kinh doanh theo mô hình Bán Hàng
            Trực Tiếp ( Direct to customer - D2C ), B2B2C đặc biệt là các công ty là Nhà Sản Xuất,
            Sản Xuất Nông Nghiệp, các nhãn hàng Nhập Khẩu mới cần 1 kênh phân phối ít tốn kém nhiều
            chi phí đế bán trực tiếp đến Người Tiêu Dùng nhằm marketing trực tiếp, thông qua các
            kênh online , sàn TMĐT nhằm loại bỏ các chi phí trung gian đem lại giá thành tốt nhất
            cho NTD từ đó nâng cao nâng lực cạnh tranh và xây dựng thương hiệu trước các DN lớn và
            nhãn hàng lớn đã có sãn các điểm bán lẻ và kênh phân phối.
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
          <a href="mailto:cs@womart.vn">
            Email:{" "}
            <span
              style={{
                textDecoration: "underline",
                color: "blue",
              }}
            >
              cs@womart.vn
            </span>
          </a>
        </div>
      </section>
    </section>
  )
}

GioiThieu.Layout = MainLayout
export default GioiThieu
