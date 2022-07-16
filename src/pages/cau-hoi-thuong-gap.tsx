/* eslint-disable react/no-unescaped-entities */
import { Breadcrumb, HeaderMobile } from "@/components"
import { MainLayout } from "@/layout"
import React from "react"

const CauHoiThuongGap = () => {
  return (
    <>
      <HeaderMobile centerChild={<p>Câu hỏi thường gặp</p>} />
      <section className="container">
        <Breadcrumb breadcrumbList={[{ name: "Câu hỏi thường gặp", path: "/" }]} />
        <div className="">
          <h2>TÀI KHOẢN:</h2>
          <h3>1. Làm thế nào để đăng ký tài khoản tại website womart.vn?</h3>
          <p>1. Làm thế nào để đăng ký tài khoản tại website womart.vn?</p>
          <ul>
            <p>Để đăng ký tài khoản Quý khách làm theo các bước sau:</p>
            <li>Bước 1: Chọn Tài Khoản</li>
            <li>Bước 2: Chọn Đăng ký</li>
            <li>Bước 3: Nhập thông tin theo hướng dẫn</li>
          </ul>
        </div>
        <div className="">
          <h3>
            2. Những lợi ích nào mà khách hàng nhận được khi có tài khoản của Womart Shop? Khi trở
            thành khách hàng của Womart Shop, Quý khách được hưởng những quyền lợi và Chương trình
            ưu đãi hấp dẫn chỉ dành riêng cho khách hàng đăng ký tài khoản tại Womart Shop bao gồm:
          </h3>

          <ul>
            <li>Nhận được tin tức các chương trình khuyến mãi nhanh nhất và sớm nhất.</li>
            <li>Các chương trình tri ân khách hàng thành viên và những dịch vụ cộng thêm.</li>
            <li>
              Có tài khoản tại Womart Shop, đơn hàng của bạn sẽ được chúng tôi quản lý tốt hơn.
            </li>
          </ul>
        </div>
        <div className="">
          <h3>3. Nếu tôi không đăng ký tài khoản ở Womart Shop thì có mua hàng được không?</h3>
          <p>
            Quý khách có thể mua hàng mà không cần đăng ký tài khoản, Quý khách hàng chỉ cần điền
            đầy đủ thông tin giao hàng theo hướng dẫn để hoàn tất đặt hàng.
          </p>
        </div>

        <div className="">
          <h3>4. Nếu tôi muốn thay đổi thông tin tài khoản đã đăng ký thì phải làm sao?</h3>
          <ul>
            <li>Bước 1: Đăng nhập Tài Khoản</li>
            <li>Bước 2: Chọn Thông Tin Tài Khoản</li>
            <li>Bước 3: Chọn Cập Nhật Tài Khoản</li>
            <li>Bước 4: Điền thông tin cập nhật</li>
            <li>Bước 5: Nhấp “Cập nhật” để hoàn tất thay đổi</li>
          </ul>
        </div>

        <div className="">
          <h2>ĐẶT HÀNG</h2>
          <h3>5. Làm thế nào để đặt hàng tại womart.vn ?</h3>
          <p>Mua hàng tại Womart Shop đơn giản và tiện lợi chỉ với 2 bước:</p>
          <p>Bước 1: Chọn Sản Phẩm</p>
          <ul>
            <li>
              Xem và chọn sản phẩm, nhấn “Mua ngay” hoặc nhập số lượng rồi “Thêm vào giỏ hàng".
            </li>
            <li>Vào “Giỏ hàng” nếu cần kiểm tra thông tin sản phẩm, giá và số lượng.</li>
            <li>Nhấp “Cập nhật” để thay đổi số lượng sản phẩm hoặc xóa sản phẩm</li>
            <li>Chọn “Thanh Toán” để tiến hành thực hiện các phương thức thanh toán.</li>
          </ul>

          <p>Bước 2: Điền Thông Tin & Thanh Toán</p>
          <ul>
            <li>
              “Đăng ký tài khoản mua hàng” để tạo tài khoản Womart Shop; hoặc mua không cần tài
              khoản.
            </li>
            <li>Điền thông tin giao hàng và thanh toán.</li>
            <li>Kiểm tra thông tin hóa đơn và đặt hàng.</li>
          </ul>
        </div>

        <div className="">
          <h3>6. Tôi có thể đặt hàng qua điện thoại được không?</h3>
          <p>
            Quý khách hàng có thể liên hệ với Bộ phận Chăm sóc Khách hàng Womart Shop để được nghe
            tư vấn đặt hàng.
          </p>
          <ul>
            <li>Điện thoại: 1900.58.88.54 – 028.36368466/69</li>
            <li>Email: cs@womart.vn</li>
            <li>
              Thời gian nhận cuộc gọi: từ 08 giờ sáng đến 15 giờ 30 chiều - Từ Thứ 2 đến Chủ Nhật
            </li>
          </ul>
        </div>

        <div className="">
          <h2>ĐƠN HÀNG</h2>
          <h3>7. Đơn hàng và thuế VAT.</h3>

          <p>- Đơn hàng đã bao gồm thuế giá trị gia tăng VAT không?</p>
          <p>
            Tất cả sản phẩm được bán tại website womart.vn, giá đã bao gồm thuế giá trị gia tăng VAT
          </p>
          <p>
            Tất cả các đơn hàng tại Womart Shop đều có hóa đơn VAT và được cho vào chung với thùng
            hàng.
          </p>
          <p>Hóa đơn cũng là điều kiện cần thiết khi quý khách muốn đổi trả hàng.</p>
        </div>

        <div className="">
          <h3>8. Làm cách nào để hủy đơn hàng đã đặt?</h3>
          <p>Để hủy Đơn hàng, Quý khách thông báo cho Womart Shop qua địa chỉ liên lạc:</p>
          <ul>
            <li>Điện thoại : 1900.58.88.54 – 028.36368466/69</li>
            <li>Email: cs@womart.vn</li>
            <li>
              Thời gian nhận cuộc gọi: từ 08 giờ sáng đến 15 giờ 30 chiều - Từ Thứ 2 đến Chủ Nhật
            </li>
          </ul>
        </div>

        <div className="">
          <h2>GIAO NHẬN HÀNG</h2>
          <h3>9. Womart Shop giao hàng trong bao lâu?</h3>
          <p>
            Womart Shop giao hàng các ngày trong tuần (kể cả thứ 7 và Chủ nhật). Thời gian giao hàng
            từ 2 đến 3 ngày tính từ khi đơn hàng được đặt thành công và có sự xác nhận của nhân viên
            chăm sóc khách hàng của Womart Shop
          </p>
        </div>

        <div className="">
          <h3>10. Phí vận chuyển</h3>
          <h4>- Tôi có phải trả phí vận chuyển không?</h4>
          <p>Womart Shop miễn phí vận chuyển cho các đơn hàng có hóa đơn như sau:</p>
          <ul></ul>
          <li>
            Đối với đơn hàng có giá trị từ 300.000 VNĐ đến 999.999 VNĐ: Womart Shop miễn phí vận
            chuyển đối với các quận: quận 1, quận 3, quận 4, quận 10, quận Bình Thạnh và quận Phú
            Nhuận.
          </li>
          <li>
            Đối với đơn hàng có giá trị từ 999.999 VNĐ đến 1.999.999 VNĐ: Womart Shop miễn phí vận
            chuyển đối với các quận: quận 1, quận 3, quận 4, quận 10, quận 5, quận 11, quận Bình
            Thạnh, quận Phú Nhuận, Tân Bình, Gò Vấp.
          </li>
          <li>
            Đối với đơn hàng có giá trị trên 2.000.000 VNĐ: Womart Shop miễn phí vận chuyển hầu hết
            các quận ngoại trừ Nhà Bè, Hóc Môn và Bình Chánh. Đối với những đơn hàng có giá trị dưới
            300.000 VNĐ: Womart Shop mức phí vận chuyển dao động từ 20.000 VNĐ đến 40.000 VNĐ tùy
            theo khu vực quý khách đặt đơn hàng và giá trị đơn hàng. Womart Shop giao hàng cho các
            quận thuộc Thành phố Hồ Chí Minh, ngoại trừ huyện Cần Giờ, và huyện Củ Chi.
          </li>
        </div>

        <div className="">
          <h3>11. Tôi có thể đổi trả lại hàng hóa không?</h3>
          <h4>Qúy khách có thể đổi trả hàng tại Womart Shop.</h4>

          <ul>
            <li>
              Thời gian đổi trả: Trong vòng 10 ngày cho sản phẩm điện máy, và trong vòng 14 ngày cho
              các sản phẩm còn lại
            </li>
            <li>
              Thời gian thông báo đổi trả: trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp
              sản phẩm thiếu phụ kiện, quà tặng; hoặc bể vỡ.
            </li>
            <li>Thời gian gởi chuyển trả sản phẩm: trong vòng 14 ngày từ nhận sản phẩm. </li>
            <li>
              Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến Phòng Dịch Vụ
              Khách hàng - A10.08, Block A, Tầng 10, Tòa nhà Officetel Sky Center, Số 5B Phổ Quang,
              Phường 2, Quận Tân Bình,Tp. Hồ Chí Minh, Việt Nam
            </li>
          </ul>
        </div>

        <div className="">
          <h2>THANH TOÁN TẠI WOMART.VN</h2>
          <h3>12. Tôi có thể trả bằng những hình thức thanh toán nào?</h3>
          <p>Womart Shop cung cấp cho Khách hàng các phương thức thanh toán tiện lợi:</p>

          <ul>
            <li>Thanh toán bằng tiền mặt khi nhận hàng hóa ( COD – Cash On Delivery)</li>
            <li>Thanh toán qua cổng thanh toán Payoo/ Napas, Momo</li>
            <li>Thanh toán cà thẻ khi nhận hàng qua máy CCT</li>
          </ul>
        </div>

        <div className="">
          <h3>Tôi có thể thanh toán bằng thẻ khi nhận hàng được không?</h3>
          <p>
            Qúy khách có thể thực hiện thanh toán qua thẻ khi nhận hàng tại địa chỉ giao hàng bằng
            máy CCT.
          </p>
        </div>

        <div className="">
          <h3>14. Khi thanh toán trả trước bằng thẻ, tôi có phải chịu phí không?</h3>
          <p>
            Quý khách toàn toàn không phải chịu bất cứ loại hình phí dịch vụ nào khi thanh toán
            trước bằng các loại thẻ.
          </p>
        </div>

        <div className="">
          <h3> Thanh toán ở Womart Shop có an toàn không?</h3>
          <p>
            Quý khách có thể hoàn toàn yên tâm khi thanh toán thẻ tại Womart Shop, đối tác thanh
            toán của Womart Shop được duyệt và kiểm định với các cam kết bảo mật thông tin khách
            hàng chặt chẽ.
          </p>
        </div>

        <div className="">
          <h2>BẢO HÀNH</h2>
          <h3> 16. Điều Kiện Bảo Hành Sản Phẩm Miễn Phí Là Gì?</h3>
          <p>Sản phẩm được bảo hành khi đủ các điều kiện sau:</p>
          <ul>
            <li>Có Phiếu bảo hành và hóa đơn hoặc biên nhận khi yêu cầu bảo hành</li>
            <li>Phiếu bảo hành phải được điền đầy đủ thông tin sản phẩm chính xác.</li>
            <li>Phiếu bảo hành phải còn nguyên vẹn, không chấp và, bôi xóa, sửa chữa</li>
            <li>Tem bảo hành và tem niêm phong của sản phẩm còn nguyên vẹn.</li>
            <li>
              Những hư hỏng kỹ thuật của sản phẩm được Trung tâm bảo hành xác nhận do lỗi của nhà
              sản xuất
            </li>
            <li>Màn hình LCD có số điểm chấm từ 05 điểm trở lên</li>
          </ul>
          <p>Lưu ý: Bảo hành theo đúng chính sách bảo hành của nhà sản xuất</p>
        </div>

        <div className="">
          <h2>CÁC VẤN ĐỀ KHÁC LIÊN QUAN ĐẾN SẢN PHẨM VÀ THAO TÁC TRÊN WEBSITE WOMART.VN</h2>
          <h3>
            17. Khi tôi gặp các vấn đề về đặt hàng, mua hàng và các vấn đề khác khi thao tác tại
            website womart.vn thì liên hệ với ai?
          </h3>
          <p>Quý khách có thể liên hệ:</p>
          <h4>Bộ phận chăm sóc Khách hàng womart.vn:</h4>
          <ul>
            <li>
              A10.08, Block A, Tầng 10, Tòa nhà Officetel Sky Center, Số 5B Phổ Quang, Phường 2,
              Quận Tân Bình,Tp. Hồ Chí Minh, Việt Nam
            </li>
            <li>
              Điện thoại: 1900.58.88.54 – 028.36368466/69 (Thời gian nhận cuộc gọi: từ 08 giờ sáng
              đến 15 giờ 30 chiều - Từ Thứ 2 đến Chủ Nhật ).
            </li>
            <li>Email:cs@womart.vn</li>
          </ul>
          <p>Lưu ý: Bảo hành theo đúng chính sách bảo hành của nhà sản xuất</p>
        </div>
      </section>
    </>
  )
}

CauHoiThuongGap.Layout = MainLayout
export default CauHoiThuongGap
