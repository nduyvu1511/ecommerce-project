import { Breadcrumb, HeaderMobile } from "@/components"
import { MainLayout } from "@/layout"

const DangKyPhanPhoi = () => {
  return (
    <section className="static__page-container">
      <HeaderMobile centerChild={<p>Đăng ký phân phối với Womart</p>} />
      <section className="container">
        <Breadcrumb breadcrumbList={[{ name: "Đăng ký phân phối với Womart", path: "/" }]} />
        <div className="static__page">
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
          <h2>LÝ DO NÊN HỢP TÁC VỚI WOMART.VN</h2>
          <ul style={{ listStyle: "none" }}>
            <li>
              - Hàng hóa trên Womart 100% là các sản phẩm của các công ty đã có thương hiệu , có
              Đăng Ký Kinh Doanh và đạt các Chứng Chỉ về Chất Lượng do đúng các cơ Quan có Uy Tín và
              Thẩm Quyền Cấp ( Phân biệt các giải thưởng của các Tổ Chức Xã Hội, Phi Chính Phủ gây
              hiểu nhầm ).
            </li>
            <li>
              - Hàng hóa có mức chiết khấu cao từ 15% - 45% và giá bán mềm so với thị trường đối với
              hàng cùng loại do loại bỏ nhiều chi phí phân phối trung gian.
            </li>
            <li>
              - Do các sản phẩm rõ ràng NSX nên bảo hành, đổi trả và đối chiếu rõ ràng trên web
              womart.vn cũng như website của các nhãn hàng.
            </li>
            <li>- Giao hàng nhanh cho Khách Hàng từ 1-3 ngày. ( Không quá 72h )</li>
            <li>
              - Số lượng NPP, CTV, Nhân Viên Thị Trường được giới hạn số lượng nhất định trong phạm
              vi phân phối nhất định tránh dẫm chân lên nhau và xung đột lợi ích.
            </li>
            <li>
              - Được hỗ trợ đào tạo trực tuyến – offline ( tại điểm Womart POS tại địa phương ) hằng
              tuần vào T7-CN để giúp đội nhóm gắn kết và hỗ trợ lẫn nhau.
            </li>
            <li>- Được hỗ trợ tài chính nhằm xoay vòng nguồn vốn bán hàng và tăng thu nhập.</li>
          </ul>
          <br />
          <h2>ĐỐI TƯỢNG PHÙ HỢP CỘNG TÁC BÁN HÀNG VỚI WOMART</h2>
          <ul style={{ listStyle: "none" }}>
            <li>
              - Các tiệm Tạp Hóa, Nhà Phân Phối cần thêm nguồn hàng để bán hàng phù hợp khu vực này.
            </li>
            <li>
              - Các Anh Chị Em làm Nhân Viên Thị Trường khi đi chào hàng, đi thị trường cần nguồn
              hàng đa dạng để chào hàng cho các cửa hàng, tạp hóa, NPP để tối ưu chi phí đi lại cũng
              như tối ưu thu nhập và hiệu suất công việc.
            </li>
            <li>
              - Các Chị Em muốn tìm cơ hội để có thêm 1 nghề tay trái uy tín đàng hoàng, được xã hội
              tôn trọng bằng việc bán hàng các sản phẩm uy tín và tư vấn cho cộng đồng xung quanh
              mình đang sống , xây dựng cộng đồng hỗ trợ các dịch vụ xã hội liên quan như : đào tạo
              cộng đồng cho phụ nữ, tiếng anh cho trẻ em, trợ giúp pháp lý cộng đồng miễn phí. (
              Womart yêu cầu kiểm tra bài test trước khi tham gia hệ thống bán hàng CTV của Womart
              tại địa phương )
            </li>
          </ul>
          <br />
          <h2>CÁCH THỨC :</h2>
          <b>Bước 1:</b>{" "}
          <p>
            Cửa hàng bán lẻ, Tạp Hóa, Nhà Phân Phối, Nhân Viên Thị Trường kênh GT truyền thống, CTV
            bán hàng Womart è sẽ được cấp 1 USER login ( đăng nhập ) để đăng nhập vào hệ thống của
            Womart thông qua Web/app để thấy các sản phẩm và giá các sản phẩm mà mình được bán.
          </p>
          <b>Bước 2:</b>{" "}
          <p>
            Với các đơn hàng đặt hàng từ USER này sẽ được xác nhận trong vòng 4h vào giao hàng trong
            vòng 72 cho Khách Hàng.
          </p>
        </div>
      </section>
    </section>
  )
}

DangKyPhanPhoi.Layout = MainLayout
export default DangKyPhanPhoi
