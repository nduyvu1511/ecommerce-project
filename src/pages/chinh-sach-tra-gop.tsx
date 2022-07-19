import { Breadcrumb, HeaderMobile } from "@/components"
import { MainNoFooter } from "@/layout"
import React from "react"

const ChinhSachDoiTra = () => {
  return (
    <>
      <HeaderMobile centerChild={<p>Chính sách trả góp</p>} />
      <div className="static__page-container">
        <div className="container">
          <Breadcrumb breadcrumbList={[{ name: "Chính sách trả góp", path: "/" }]} />
          <div className="static__page">
            <div className="">
              <h1>Chính sách trả góp & HOÀN TIỀN</h1>

              <p>
                Womart Shop luôn cam kết giao đến khách hàng những sản phẩm mới 100%, trong tình
                trạng tốt nhất, nguyên đai nguyên kiện và chính xác đầy đủ theo đơn hàng đã đặt.
                Những trường hợp trả hàng và hoàn tiền sẽ được xem xét như sau:
              </p>
              <p>
                - Sản phẩm bị lỗi, sai loại sản phẩm, sai kích cỡ, thiếu sản phẩm so với đơn hàng
                được đặt.
              </p>
              <p>- Sản phẩm bị hết hạn sử dụng.</p>
              <p>- Sản phẩm hư hỏng, bể vỡ trong quá trình vận chuyển.</p>
              <br />
              <h3>Thời gian đổi trả:</h3>
              <p>Trong vòng 10 ngày đối với sản phẩm điện máy.</p>
              <p>Trong vòng 14 ngày đối với các sản phẩm khác.</p>
            </div>
            <div className="">
              <h3>Lưu ý: Ngoại trừ một số sản phẩm không được áp dụng đổi trả hàng như sau:</h3>
              <table>
                <thead>
                  <tr>
                    <th>Danh mục sản phẩm</th>
                    <th>Loại sản phẩm không áp dụng đổi trả</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Thực Phẩm</td>
                    <td>Đồ khô, tươi sống, đông lạnh, nấu chín</td>
                  </tr>
                  <tr>
                    <td>Thời Trang, Làm Đẹp, Sức Khỏe </td>
                    <td>Hàng đồ lót, mỹ phẩm, Đồng Hồ</td>
                  </tr>
                  <tr>
                    <td>Điện máy</td>
                    <td>
                      Điện lạnh, Điện tử lớn, Ipad, Iphone, phụ kiện và các thiết bị điện tử đã kích
                      hoạt bảo hành
                    </td>
                  </tr>
                  <tr>
                    <td>Khác</td>
                    <td>Các sản phẩm khuyến mãi, thanh lý, đã qua sử dụng, trả góp</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="">
              <h2>2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả</h2>
              <ul>
                <li>
                  Thời gian thông báo đổi trả: trong vòng 24h kể từ khi nhận sản phẩm đối với trường
                  hợp sản phẩm thiếu phụ kiện, quà tặng; hoặc bể vỡ.
                </li>
                <li>
                  Thời gian gởi chuyển trả sản phẩm: trong vòng 14 ngày từ ngày nhận sản phẩm.
                </li>
                <li>Khách hàng có thể gởi qua đường bưu điện hoặc mang sản phẩm trực tiếp đến:</li>
                <li>
                  Địa chỉ : A10.08, Block A, Tầng 10, Tòa nhà Officetel Sky Center, Số 5B Phổ Quang,
                  Phường 2, Quận Tân Bình,Tp. Hồ Chí Minh, Việt Nam
                </li>
              </ul>
            </div>

            <div className="">
              <h2>3. Trường hợp áp dụng đổi trả:</h2>
              <ul>
                <li>Sản phẩm bị lỗi kỹ thuật, hư hỏng của nhà sản xuất,</li>
                <li>Sản phẩm hết hạn sử dụng hoặc có dấu hiệu đã qua sử dụng, hàng nhái.</li>
                <li>Lỗi khi giao hàng thiếu, bể vỡ trước khi đến tay khách hàng</li>
                <li>Giao sai sản phẩm, màu sắc, kích thước, thông số kỹ thuật.</li>
              </ul>
            </div>

            <div className="">
              <h2> 4. Điều kiện áp dụng đổi trả</h2>
              <ul>
                <li>
                  Sản phẩm còn nguyên vẹn, đầy đủ bao bì, hộp, mút xốp, tài liệu hướng dẫn sử dụng
                  linh kiện,phụ kiện,quà tặng (nếu có)
                </li>
                <li>
                  Đầy đủ hóa đơn VAT, hóa đơn mua hàng, phiếu bảo hành,tem trên sản phẩm, số Serial,
                  Imei trên máy phải trùng khớp với hóa đơn
                </li>
                <li>
                  Tình trạng sản phẩm không bị trầy xướt, nứt vỡ, ẩm ướt, dính hóa chất, can thiệp
                  sửa chữa. Sản phẩm chưa có dấu hiệu sử dụng.
                </li>
                <h3>Lưu ý, trường hợp đổi trả sản phẩm vì không ưng ý:</h3>
                <li>
                  Womart Shop sẽ không hoàn lại phí vận chuyển ban đầu và các loại mã giảm giá/chiết
                  khấu (nếu có).
                </li>
                <li>Không áp dụng đối với các sản phẩm thuộc danh mục không hỗ trợ đổi trả.</li>
                <li>
                  Trường hợp sản phẩm đã vượt quá thời hạn đổi trả và còn trong thời hạn bảo hành,
                  Womart Shop sẽ hướng dẫn bảo hành theo quy định của nhà cung cấp.
                </li>
                <li>
                  Trường hợp sản phẩm cần đổi không còn hàng, Womart Shop sẽ hoàn lại tiền mà không
                  có đòi hỏi nào trong trường hợp này.
                </li>
                <li>
                  Không hỗ trợ đổi trả đối với Phiếu mua hàng online hoặc sản phẩm trong chương
                  trình khuyến mãi.
                </li>
              </ul>
            </div>

            <div className="">
              <h2> 5. Thời gian và phương thức hoàn tiền:</h2>
              <h3>
                Womart Shop hỗ trợ Quý khách nhiều lựa chọn hoàn tiền khác nhau dựa trên cách thức
                thanh toán Quý khách đã chọn lúc mua sản phẩm:
              </h3>
              <ul>
                <li>
                  Thanh toán khi nhận hàng (COD) : Chuyển khoản trong vòng 9 -12 ngày làm việc kể từ
                  thời điểm Womart Shop nhận được hàng hóa đổi trả.
                </li>
                <li>
                  Thanh toán online bằng thẻ ATM hoặc thẻ tín dụng VISA/MASTER/JCB/AMEX qua cổng
                  Payoo, VNPay, ZaloPay : Chuyển khoản trong vòng 09-12 ngày làm việc, tùy thuộc vào
                  ngân hàng phát hành thẻ của Quý Khách
                </li>
                <li>
                  Thanh toán Online qua Ví điện tử Momo/ Grab Moca/ ZaloPay: hoàn tiền vào ví trong
                  vòng 05 - 07 ngày làm việc.
                </li>
                <li>
                  Thanh toán qua thẻ sau khi nhận hàng (CCT) : chuyển khoản trong vòng 09-12 ngày
                  làm việc kể từ thời điểm Womart Shop nhận được hàng đổi trả.
                </li>
              </ul>

              <h3>
                Trong trường hợp đã vượt quá thời gian trên nhưng Quý khách vẫn chưa nhận được hoàn
                tiền, Quý khách vui lòng liên hệ trực tiếp ngân hàng để được hỗ trợ hoặc liên lạc
                với Womart Shop qua:
              </h3>
              <p>
                Quầy Dịch Vụ Khách Hàng: A10.08, Block A, Tầng 10, Tòa nhà Officetel Sky Center, Số
                5B Phổ Quang, Phường 2, Quận Tân Bình,Tp. Hồ Chí Minh, Việt Nam (Quầy Dịch Vụ Khách
                Hàng)
              </p>
              <p>Hotline : 1900.58.88.54 – 028.36368466/69 (8:30-17:30)</p>
              <p>Email: cs@womart.vn</p>
              <p>Phiếu yêu cầu đổi trả hàng đã được gởi kèm trong kiện hàng của Quý Khách.</p>
            </div>

            <div className="">
              <h2>3. Quy trình đổi/ trả sản phẩm:</h2>
              <br />
              <ul>
                <li>
                  Bước 1: Khách hàng điền vào Phiếu yêu cầu đổi trả hàng được gởi kèm trong kiện
                  hàng, hoặc liên hệ với Womart Shop qua hotline 077.650.8686 (8:30-17:30) hoặc
                  email: cs@womart.vn để được hướng dẫn cách đổi/trả sản phẩm. (Nếu sản phẩm/ đơn
                  hàng đáp ứng đủ các điều kiện đổi trả). Quý khách vui lòng điền hoặc chuẩn bị đầy
                  đủ các thông tin sau:
                  <p>- Mã số đơn hàng;</p>
                  <p>- Tên sản phẩm;</p>
                  <p>- Lý do đổi trả, lỗi sản phẩm nếu có (mô tả chi tiết và kèm ảnh chụp);</p>
                  <p>- Nhu cầu cần hỗ trợ: đổi/trả.</p>
                </li>
                <li>
                  Bước 2: Trong vòng 03 ngày sau khi thông báo, Khách hàng gửi sản phẩm, hàng hóa
                  theo đường bưu điện hoặc đem trực tiếp tới Womart Shop theo địa chỉ phía trên. Quý
                  khách vui lòng gởi kèm:
                  <p>- Hóa đơn bán hàng và Hóa đơn giá trị gia tăng (nếu có);</p>
                  <p>- Phụ kiện đi kèm sản phẩm và tặng khuyến mãi kèm theo (nếu có).</p>
                </li>
                <li>Bước 3: Nhân viên Womart Shop nhận sản phẩm và kiểm tra sản phẩm.</li>
                <li>
                  Bước 4: Nhân viên Womart Shop thông báo và cập nhật với Khách hàng về trạng thái
                  của yêu cầu đổi trả.
                </li>
                <li>Bước 5: Khách hàng nhận sản phẩm thay thế hoặc nhận tiền hoàn lại.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ChinhSachDoiTra.Layout = MainNoFooter
export default ChinhSachDoiTra
