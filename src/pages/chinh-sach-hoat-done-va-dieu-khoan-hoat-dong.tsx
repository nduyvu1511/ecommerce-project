import { Breadcrumb, HeaderMobile } from "@/components"
import { MainNoFooter } from "@/layout"

const ChinhSachHoatDong = () => {
  return (
    <>
      <div className="static__page-container">
        <HeaderMobile centerChild={<p>Chính sách đặt hàng và điều khoản hợp đồng</p>} />
        <div className="container">
          <Breadcrumb
            breadcrumbList={[{ name: "Chính sách đặt hàng và điều khoản hợp đồng", path: "/" }]}
          />
          <div className="static__page">
            <div className="">
              <h1>CHÍNH SÁCH ĐẶT HÀNG VÀ ĐIỀU KHOẢN HỢP ĐỒNG</h1>
              <h2>A. ĐIỀU KHOẢN GIAO DỊCH</h2>
              <p>
                Nhằm bảo vệ và đảm bảo cho quyền lợi Khách hàng một cách tốt nhất cũng như là giúp
                cho khách hàng hiểu rõ nội dung giao dịch khi mua hàng tại ứng dụng bán hàng (“ứng
                dụng”) của Công ty TNHH Womart D2C Việt Nam (sau đây gọi là “WOMART” hoặc “chúng
                tôi”), chúng tôi tại đây thông tin đến khách hàng những nội dung của điều khoản hợp
                đồng khi Khách hàng mua hàng trực tuyến tại ứng dụng của chúng tôi như sau:
              </p>
              <p>
                Lưu ý là Khách hàng cần đọc và hiểu rõ nội dung này trước khi đặt hàng trực tuyến.
                Việc truy cập vào ứng dụng và đặt mua hàng hóa từ phía khách hàng được xem như là
                khách hàng đã chấp nhận và hiểu rõ những nội dung và điều khoản của giao dịch giữa
                WOMART và khách hàng.
              </p>
            </div>

            <div className="">
              <h2>1. Đặt hàng và xác nhận đơn hàng</h2>
              <p>
                - Khi quý khách đặt hàng tại ứng dụng, chúng tôi sẽ nhận được yêu cầu đặt hàng và
                gửi đến quý khách mã số đơn hàng. Tuy nhiên, yêu cầu đặt hàng cần thông qua một bước
                xác nhận đơn hàng, WOMART chỉ xác nhận đơn hàng nếu yêu cầu đặt hàng của quý khách
                thỏa mãn các tiêu chí thực hiện đơn hàng tại ứng dụng.
              </p>
              <p>
                - Để yêu cầu đặt hàng được xác nhận nhanh chóng, quý khách vui lòng cung cấp đúng và
                đầy đủ các thông tin liên quan đến việc giao nhận, hoặc các điều khoản và điều kiện
                của chương trình khuyến mại (nếu có) mà quý khách tham gia.
              </p>
            </div>

            <div className="">
              <h2>2. Giá trị đơn hàng và hình thức thanh toán</h2>
              <p>
                - WOMART cung cấp các hình thức thanh toán: tiền mặt khi nhận hàng, thẻ Thanh toán
                Quốc tế, thẻ Thanh toán Nội địa, thanh toán qua Momo, Zalopay, Vnpay. Khách hàng vui
                lòng tham khảo thêm chính sách thanh toán của chúng tôi được công khai trên ứng
                dụng.
              </p>
              <p>
                - Trừ một số trường hợp có ghi chú riêng, thông thường quý khách có thể lựa chọn một
                trong các hình thức thanh toán trên khi tiến hành đặt hàng. Tuy nhiên, để đảm bảo
                tính an toàn dành cho quý khách trong quá trình thanh toán và tuân thủ quy định của
                pháp luật, đối những đơn hàng có giá trị từ 20.000.000 VNĐ (Hai mươi triệu đồng) trở
                lên, WOMART chỉ chấp nhận hình thức thanh toán trước bằng thẻ Thanh toán Quốc tế
                hoặc thẻ Thanh toán Nội địa.
              </p>
            </div>
            <div className="">
              <h2>3. Chương trình khuyến mại</h2>
              <p>
                - Với mong muốn mang lại nhiều lợi ích cho khách hàng, WOMART sẽ thực hiện các
                chương trình khuyến mại thông qua việc mua hàng trực tuyến. Chúng tôi sẽ thông báo
                cụ thể về nội dung, thể lệ chương trình khuyến mại trên ứng dụng mỗi khi thực hiện
                chương trình khuyến mại. Khách hàng vui lòng thường xuyên truy cập để tham gia
                chương trình khuyến mại của chúng tôi. Nhằm bảo vệ quyền lợi khách hàng và giúp
                chương trình khuyến mại được thực hiện đúng như đã thông báo, đăng ký với cơ quan
                nhà nước có thẩm quyền, Khách hàng vui lòng đọc và hiểu về chương trình khuyến mại
                của chúng tôi.
              </p>
              <p>
                - WOMART có quyền từ chối các đơn hàng không thỏa mãn điều khoản và điều kiện tham
                gia các chương trình khuyến mại mà không cần thông báo đến khách hàng. Vì vậy, xin
                quý khách vui lòng tham khảo kĩ Thể lệ của từng chương trình trước khi tham gia.
              </p>
            </div>
            <div className="">
              <h2> 4. Giao hàng và vận chuyển</h2>
              <p>
                Khách hàng vui lòng tham khảo “Chính sách vận chuyển và giao hàng” của WOMART được
                chúng tôi niêm yết trên ứng dụng.
              </p>
            </div>
            <div className="">
              <h2>5. Giá cả</h2>
              <p>
                - Giá cả sản phẩm được niêm yết trên Ứng dụng là giá bán cuối cùng đã bao gồm thuế
                Giá trị gia tăng (VAT). Giá cả của sản phẩm có thể thay đổi tùy thời điểm và chương
                trình khuyến mại kèm theo. Phí vận chuyển hoặc Phí thực hiện đơn hàng sẽ được áp
                dụng thêm nếu có, và sẽ được hiển thị rõ tại trang Thanh toán khi quý khách tiến
                hành đặt hàng.
              </p>
              <p>
                - Mặc dù chúng tôi cố gắng tốt nhất để bảo đảm rằng tất cả các thông tin và giá hiển
                thị là chính xác đối với từng sản phẩm, đôi khi sẽ có một số trường hợp bị lỗi hoặc
                sai sót. Nếu chúng tôi phát hiện lỗi về giá của bất kỳ sản phẩm nào trong đơn hàng
                của quý khách, chúng tôi sẽ thông báo cho quý khách trong thời gian sớm nhất có thể
                và gửi đến quý khách lựa chọn để xác nhận lại đơn hàng với giá chính xác hoặc hủy
                đơn hàng. Nếu chúng tôi không thể liên lạc với quý khách, đơn hàng sẽ tự động hủy
                trên hệ thống và lệnh hoàn tiền sẽ được thực hiện (nếu đơn hàng đã được thanh toán
                trước).
              </p>
            </div>
            <div className="">
              <h2> 6. Thông tin sản phẩm</h2>
              <p>
                - WOMART sẽ cung cấp thông tin chi tiết đối với từng sản phẩm mà chúng tôi đăng tải.
                Khách hàng nên có sự xem xét kỹ lưỡng trước khi thực hiện đặt hàng.{" "}
              </p>
              <p>
                - Trong trường hợp sản phẩm Khách hàng nhận được không đúng như những gì WOMART đã
                mô tả trong phần thông tin sản phẩm, Khách hàng vui lòng thông tin đến bộ phận Hỗ
                trợ khách hàng trong thời gian sớm nhất kể từ khi nhận hàng đồng thời đảm bảo sản
                phẩm trong tình trạng chưa qua sử dụng để được hỗ trợ đổi trả. Thông tin chi tiết về
                “Chính sách đổi trả hàng và hoàn tiền” vui lòng tham khảo trên ứng dụng.
              </p>
            </div>
            <div className="">
              <h2> 7. Chính sách về hàng giả, hàng nhái, hàng không đúng chất lượng</h2>
              <p>
                - WOMART luôn mong muốn và hướng đến việc cung cấp hàng hóa và chất lượng dịch vụ
                tốt nhất cho khách hàng qua các sản phẩm được đăng bán trên ứng dụng của chúng tôi
                và từ chối bán các sản phẩm sản xuất trái phép, sao chép, hàng giả, hàng nhái, không
                rõ nguồn gốc xuất xứ, v.v.
              </p>
              <p>
                - Trong trường hợp Khách hàng có nghi ngờ sản phẩm sản xuất trái phép, sao chép,
                hàng giả, hàng nhái, không rõ nguồn gốc xuất xứ, v.v., vui lòng thông báo ngay cho
                chúng tôi bằng cách liên hệ với Bộ phận Hỗ trợ khách hàng để được xác thực thông tin
                và hỗ trợ.
              </p>
            </div>
            <div className="">
              <h2>8. Quyền sở hữu trí tuệ</h2>
              <p>
                - Mọi quyền sở hữu trí tuệ (đã đăng ký hoặc chưa đăng ký), nội dung thông tin và tất
                cả các thiết kế, văn bản, đồ họa, phần mềm, hình ảnh, video, âm nhạc, âm thanh, biên
                dịch phần mềm, mã nguồn và phần mềm cơ bản đều là tài sản của chúng tôi. Toàn bộ nội
                dung của trang web được bảo vệ bởi pháp luật của Việt Nam và các công ước quốc tế.
              </p>
              <p>
                - Khách hàng không được sử dụng hoặc sao chép bất kỳ thông tin, hình ảnh, phần mềm,
                âm nhạc, v.v. và bất kỳ tài sản trí tuệ nào khác của WOMART cho bất kỳ mục đích gì
                khi chưa có sự đồng ý của WOMART.
              </p>
            </div>
            <div className="">
              <h2> 9. Quy định về bảo mật</h2>
              <p>
                - WOMART luôn đặt lên hàng đầu việc bảo mật thông tin và sử dụng các biện pháp tốt
                nhất để bảo vệ thông tin và việc thanh toán của Khách hàng. Thông tin của Khách hàng
                trong quá trình mua hàng và thanh toán sẽ được mã hóa để đảm bảo an toàn. Sau khi
                quý khách hoàn thành quá trình đặt hàng, Khách hàng sẽ thoát khỏi chế độ an toàn.
              </p>
              <p>
                - Mọi thông tin giao dịch sẽ được bảo mật nhưng trong trường hợp pháp luật hoặc cơ
                quan nhà nước có thẩm quyền yêu cầu, chúng tôi sẽ buộc phải thực hiện nghĩa vụ cung
                cấp những thông tin này.
              </p>
              <p>
                - Để có thể hiểu rõ về chính sách bảo mật thông tin của WOMART, Khách hàng có thể
                tham khảo thêm nội dung này tại “Chính sách bảo mật thông tin” của chúng tôi trên
                ứng dụng.{" "}
              </p>
            </div>
            <div className="">
              <h2> 10. Giải quyết hậu quả do lỗi nhập sai thông tin</h2>
              <p>
                - Khách hàng có trách nhiệm cung cấp thông tin đầy đủ và chính xác khi tham gia giao
                dịch tại ứng dụng. Trong trường hợp khách hàng nhập sai thông tin, WOMART có quyền
                từ chối thực hiện giao dịch.
              </p>
            </div>
            <div className="">
              <h2> 11. Giải quyết tranh chấp</h2>
              <p>
                - Bất kỳ khiếu nại hoặc tranh chấp phát sinh từ hoặc liên quan đến giao dịch trên
                ứng dụng hoặc các Quy định và Điều kiện trong chính sách này đều sẽ được giải quyết
                bằng hình thức thương lượng, hoặc tại Tòa án có thẩm quyền của Việt Nam theo quy
                định của pháp luật Việt Nam.
              </p>
            </div>
            <div className="">
              <h2> 12. Những quy định khác</h2>
              <p>
                - Tất cả các Điều Khoản và Điều Kiện trong chính sách này (và tất cả nghĩa vụ phát
                sinh từ hoặc liên quan đến Điều khoản và Điều kiện này) sẽ bị chi phối và được hiểu
                theo luật pháp Việt Nam. WOMART có quyền, tại từng thời điểm, sửa đổi các Điều khoản
                và Điều kiện này vào bất kỳ thời điểm nào và các sửa đổi đó sẽ có hiệu lực ngay tại
                thời điểm được đăng tải trên ứng dụng.
              </p>
            </div>

            <br />
            <h2>B. HƯỚNG DẪN ĐẶT HÀNG</h2>

            <h3>Bước 1: Lựa chọn sản phẩm</h3>
            <h4>
              Quý khách nhấn chọn vào sản phẩm muốn xem trong các danh mục sản phẩm theo 2 cách như
              sau
            </h4>
            <p>- Cách 1: Nhấp vào chữ XEM NHANH để xem sản phẩm ở dạng thu gọn.</p>

            <p>
              - Cách 2: Nhấp trực tiếp vào sản phẩm cần mua để xem các thông tin chi tiết, mô tả sản
              phẩm, hướng dẫn sử dụng và bảo quản … để đưa ra quyết định mua hàng đúng đắn.
            </p>

            <h3>Bước 2: Thêm vào giỏ hàng</h3>
            <p>
              Sau khi đã lựa chọn được sản phẩm ưng ý, quý khách tùy chỉnh mục số lượng, màu sắc và
              kích cỡ của sản phẩm cần mua và sau đó bấm chọn THÊM VÀO GIỎ HÀNG thì sản phẩm sẽ tự
              động thêm vào giỏ hàng của bạn.
            </p>

            <h3>Bước 3: Kiểm tra giỏ hàng</h3>
            <h4>
              Sau khi kết thúc việc chọn hàng, quý khách bấm chọn biểu tượng giỏ hàng để kiểm tra
              các thông tin trong giỏ hàng:
            </h4>

            <p>
              Tại đây, quý khách có thể điều chỉnh số lượng đặt hàng hoặc xóa bỏ sản phẩm đã chọn
              hoặc tiếp tục mua hàng. Bạn cũng có thể thêm ghi chú cho đơn hàng của mình.
            </p>
            <h3>Bước 4: Điền thông tin giao hàng</h3>
            <p>
              Sau khi hoàn tất kiểm tra đơn hàng, quý khách bấm chọn THANH TOÁN để đến trang điền
              thông tin giao hàng. Bạn đã có tài khoản của Womart Shop thì bấm chọn ĐĂNG NHẬP Bạn
              chưa có tài khoản thì điền đầy đủ vào phần thông tin giao hàng.
            </p>

            <h3>Bước 5: Tiến hành thanh toán</h3>

            <ul>
              <p>- Quý khách kiểm tra chi phí vận chuyển, thành tiền tổng cộng.</p>
              <p>- Nhập mã giảm giá nếu có</p>
              <p>- Lựa chọn phương thức thanh toán.</p>
              <p>- Quý khách bấm nút HOÀN TẤT ĐƠN HÀNG để kết thúc đặt hàng.</p>
            </ul>

            <h3>Bước 6: Hoàn tất đơn hàng</h3>

            <h4>
              Sau khi hoàn tất, quý khách quý khách sẽ được chuyển sang trang thông báo đặt hàng
              thành công bao gồm: Mã đơn hàng.
            </h4>
            <p>Thông tin đơn hàng</p>
            <p>Thông tin sản phẩm đặt mua</p>
            <p>Phương thức thanh toán đã chọn</p>
          </div>
        </div>
      </div>
    </>
  )
}

ChinhSachHoatDong.Layout = MainNoFooter
export default ChinhSachHoatDong
