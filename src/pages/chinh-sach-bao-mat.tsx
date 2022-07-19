import { Breadcrumb, HeaderMobile } from "@/components"
import { MainNoFooter } from "@/layout"
import React from "react"

const ChinhSachBaoMat = () => {
  return (
    <>
      <HeaderMobile centerChild={<p>Chính sách bảo mật</p>} />
      <div className="static__page-container">
        <div className="container">
          <Breadcrumb breadcrumbList={[{ name: "Chính sách bảo mật", path: "/" }]} />

          <div className="static__page">
            <div className="">
              <h1> CHÍNH SÁCH BẢO MẬT</h1>
              <h2> CHÍNH SÁCH BẢO MẬT THÔNG TIN</h2>
              <p>
                Chính sách bảo mật thông tin này là cam kết của Công ty TNHH Womart D2C Việt Nam
                (“WOMART”) với tất cả các Khách hàng tham gia mua hàng qua Trang TMĐT và Ứng dụng
                thương mại điện tử bán hàng của WOMART - Ứng dụng Womart Shop (“Ứng dụng”). Trên
                tinh thần thượng tôn pháp luật và bảo vệ tối đa quyền lợi người tiêu dùng, WOMART
                luôn mong muốn hướng đến sự hoàn thiện nhất trong các chính sách của mình. Tất cả
                các chính sách, quy trình, quy định của WOMART đều được soạn thảo dựa trên nguyên
                tắc bảo đảm tối đa quyền lợi của Khách hàng. Nhằm phục vụ và cung cấp tốt hơn cho
                Khách hàng khi mua sắm tại Ứng dụng thương mại điện tử Womart Shop của WOMART,
                WOMART tiến hành thu thập thông tin của Khách hàng và cam kết bảo mật như bên dưới.
                Khách hàng có trách nhiệm tìm hiểu kỹ Chính sách này trước khi truy cập và sử dụng
                ứng dụng của WOMART. Việc Khách hàng truy cập vào ứng dụng và thực hiện các giao
                dịch cũng chính là sự xác nhận việc đã tìm hiểu kỹ và đồng ý với toàn bộ nội dung
                Chính sách này, kể cả các phiên bản sửa đổi, bổ sung của Chính Sách được cập nhật và
                công bố công khai trên ứng dụng tại từng thời điểm.
              </p>
            </div>

            <div className="">
              <h2> 1. MỤC ĐÍCH VÀ PHẠM VI THU THẬP THÔNG TIN</h2>
              <h3>+ Mục đích thu thập thông tin của Khách hàng</h3>
              <h4>
                Phù hợp với mục tiêu bán hàng của WOMART qua Ứng dụng thương mại điện tử bán hàng và
                phù hợp với nhu cầu mua sắm cũng như sử dụng các lợi ích từ các chương trình WOMART
                mang lại, WOMART và Khách hàng hiểu rằng, mục đích WOMART thu thập thông tin của
                Khách hàng chủ yếu là để hỗ trợ cho việc mua sắm của Khách hàng, hỗ trợ mối liên hệ
                giữa WOMART và Khách hàng, cụ thể như sau:
              </h4>
              <p>
                - Thông báo nhanh chóng và kịp thời đến Khách hàng các thông tin của chương trình
                khuyến mại, quảng cáo và/hoặc cho các mục đích xúc tiến thương mại khác;
              </p>
              <p>- Cung cấp một số tiện ích, nâng cao chất lượng dịch vụ hỗ trợ khách hàng.</p>
              <p>
                - Duy trì liên lạc với khách hàng, hỗ trợ cho khách hàng trong việc mua sắm và giải
                đáp thắc mắc của khách hàng liên quan đến hàng hóa của WOMART.
              </p>
              <p>
                - Giải quyết các vấn đề, tranh chấp phát sinh liên quan đến việc sử dụng ứng dụng
                Womart Shop.
              </p>
              <p>- Ngăn chặn những hoạt động vi phạm pháp luật Việt Nam.</p>
              <p>+ Phạm vi thu thập thông tin của Khách hàng</p>
              <h4>
                Trước khi thực hiện việc mua sắm tại Ứng dụng thương mại điện tử bán hàng của
                WOMART, WOMART mong muốn và Khách hàng cần thiết cung cấp những thông tin sau để
                việc mua sắm hàng hóa được diễn ra an toàn, nhanh chóng và hiệu quả:
              </h4>
              <p>- Họ và tên</p>
              <p>- Ngày tháng năm sinh</p>
              <p>- Địa chỉ liên lạc</p>
              <p>- Địa chỉ email</p>
              <p>
                Ngoài những thông tin trên, tại từng thời điểm, phù hợp với những tiện ích mà WOMART
                muốn cung cấp cho Khách hàng, WOMART có thể yêu cầu Khách hàng cung cấp thêm một số
                thông tin khác và WOMART mong khách hàng hiểu rằng việc cung cấp thông tin này là tự
                nguyện và hoàn toàn phù hợp với ý chí của Khách hàng.
              </p>
            </div>
            <div className="">
              <h2>2. PHẠM VI SỬ DỤNG THÔNG TIN</h2>
              <h3>
                Phù hợp với mục đích thu thập thông tin, WOMART sử dụng thông tin của khách hàng
                trong các trường hợp sau đây:
              </h3>
              <p>
                - Hoàn thiện hàng hóa và dịch vụ chăm sóc khách hàng của WOMART đáp ứng được nhu cầu
                của khách hàng;
              </p>
              <p>
                - Hỗ trợ thực hiện các chương trình xúc tiến thương mại của WOMART đến khách hàng;
              </p>
              <p>- Xử lý các vấn đề liên quan đến giao dịch giữa WOMART với khách hàng;</p>
              <p>
                - Liên lạc với khách hàng và/hoặc có thông tin cho việc gửi các thư ngỏ, thư cảm ơn
                đến khách hàng;
              </p>
              <p>
                - Gửi thông tin các chương trình khuyến mại, quảng cáo của WOMART đến khách hàng
                thông qua sự đồng ý trước đó của khách hàng;
              </p>
              <h4>- Ngoài ra, WOMART có thể chia sẻ thông tin khách hàng cho các mục đích sau:</h4>

              <p>
                Nghiên cứu thị trường và các báo cáo phân tích: WOMART có thể dùng thông tin khách
                hàng để nghiên cứu thị trường, tổng hợp, phân tích thông tin chung của Khách hàng
                (ví dụ độ tuổi trung bình, khu vực địa lý), thông tin chi tiết sẽ được ẩn và chỉ
                được dùng để phục vụ công việc thống kê. Trong trường hợp WOMART tiến hành khảo sát
                cần sự tham gia của Khách hàng, bất kỳ câu trả lời cho khảo sát hoặc thăm dò dư luận
                mà Khách hàng cung cấp cho WOMART sẽ không được chuyển cho bất kỳ bên thứ ba nào.
              </p>
              <p>
                Trao đổi thông tin Khách hàng với các công ty khác cùng thuộc tập đoàn WOMART và các
                đối tác có ký kết thỏa thuận liên kết chăm sóc Khách hàng với WOMART. Việc chia sẻ
                này giúp WOMART có thể cung cấp cho Khách hàng các thông tin về các sản phẩm và dịch
                vụ, liên quan đến hàng hóa, dịch vụ và vấn đề khác mà Khách hàng có thể quan tâm.
                Trong trường hợp các công ty liên kết của WOMART được cấp quyền truy cập thông tin
                Khách hàng, họ sẽ phải tuân thủ nghiêm ngặt các quy định bảo mật được mô tả trong
                Chính Sách này.
              </p>
              <p>
                Trao đổi thông tin Khách hàng với các bên thứ 3 là đối tác, đại lý của WOMART:
                WOMART có thể chuyển thông tin Khách hàng cho các đại lý và nhà thầu phụ để làm phân
                tích dữ liệu, tiếp thị và hỗ trợ dịch vụ Khách hàng. WOMART cũng có thể trao đổi
                thông tin Khách hàng với bên thứ ba cho mục đích chống gian lận và giảm rủi ro tín
                dụng.{" "}
              </p>
              <p>
                Trao đổi thông tin Khách hàng với các đối tác quảng cáo: Hệ thống theo dõi hành vi
                của Khách hàng được WOMART sử dụng trên kênh hiển thị quảng cáo (ví dụ như tiếp thị
                lại Khách hàng, hệ thống quản lý các chiến dịch quảng cáo DoubleClick, báo cáo về
                nhân khẩu, sở thích của Khách hàng với công cụ Google Analytics…) có thể thu thập
                được các thông tin như độ tuổi, giới tính, sở thích và số lần tương tác với số lần
                xuất hiện của quảng cáo. Với tính năng cài đặt quảng cáo, Khách hàng có thể lựa chọn
                thoát ra khỏi tính năng theo dõi hành vi Khách hàng của Google Analytics và lựa chọn
                cách xuất hiện của kênh hiển thị quảng cáo (trên Google hoặc Facebook…).{" "}
              </p>
              <p>
                - Các trường hợp khác mà WOMART được cho phép sử dụng bởi Khách hàng hoặc theo quy
                định của pháp luật hiện hành. Nếu Khách hàng không muốn nhận bất cứ thông tin quảng
                cáo, chương trình khuyến mại nào của WOMART thì có quyền từ chối bất cứ lúc nào bằng
                cách gửi yêu cầu ngưng nhận thông báo, thông tin từ ứng dụng của WOMART.
              </p>
            </div>
            <div className="">
              <h2>3. THỜI GIAN LƯU TRỮ THÔNG TIN</h2>
              <p>
                WOMART chỉ lưu giữ Thông tin về Khách hàng trong thời gian cần thiết cho mục đích mà
                Thông tin được thu thập hoặc theo yêu cầu của Hợp đồng hoặc theo quy định của pháp
                luật hiện hành và/hoặc cho đến khi Khách hàng thông báo rõ ràng với WOMART về một
                khoảng thời gian lưu trữ khác đi.
              </p>
            </div>
            <div className="">
              <h2> 4. ĐỊA CHỈ CỦA ĐƠN VỊ THU THẬP VÀ QUẢN LÝ THÔNG TIN CÁ NHÂN</h2>
              <p>Tên đơn vị: CÔNG TY TNHH WOMART D2C VIỆT NAM</p>
              <p>
                Địa chỉ: A10.08, Block A, Tầng 10, Tòa nhà Officetel Sky Center, Số 5B Phổ Quang,
                Phường 2, Quận Tân Bình,Tp. Hồ Chí Minh, Việt Nam
              </p>
              <p>Email: cs@womart.vn</p>
              <p>Điện thoại: 1900.58.88.54 – 028.36368466/69</p>
            </div>
            <div className="">
              <h2> 5. TIẾP CẬN VÀ CHỈNH SỬA DỮ LIỆU THÔNG TIN CÁ NH N CỦA KHÁCH HÀNG</h2>
              <p>
                - Khách hàng có quyền yêu cầu WOMART hoặc tự mình thực hiện kiểm tra, điều chỉnh
                những sai sót, cập nhật, bổ sung để hoàn thiện Thông tin cá nhân hoặc hủy bỏ Thông
                tin cá nhân bằng cách truy cập vào dữ liệu Thông tin cá nhân của mình trên tài khoản
                ứng dụng và thực hiện thao tác điều chỉnh.
              </p>
            </div>
            <div className="">
              <h2> 6. CAM KẾT BẢO MẬT THÔNG TIN CÁ NH N KHÁCH HÀNG</h2>
              <p>
                - WOMART cam đoan sẽ không bán, chia sẻ dẫn đến làm lộ thông tin cá nhân của Khách
                hàng mà không được sự đồng ý của Khách hàng, trừ trường hợp pháp luật hoặc cơ quan
                nhà nước có thẩm quyền yêu cầu, WOMART buộc phải thực hiện nghĩa vụ cung cấp thông
                tin của Khách hàng.{" "}
              </p>
              <p>
                Thông qua việc Khách hàng đọc hiểu Chính sách này và/hoặc đồng ý thực hiện giao dịch
                trên ứng dụng, WOMART hiểu rằng Khách hàng đã thể hiện sự đồng ý đối với các điều
                khoản về sử dụng và chia sẻ thông tin trong Chính sách này. Ngoài ra, tùy từng
                trường hợp phát sinh, WOMART sẽ tiến hành thu thập ý kiến Khách hàng và chỉ sử dụng,
                chia sẻ thông tin khi nhận được sự đồng ý.
              </p>
              <p>
                - Công ty cam kết sẽ không mặc định buộc Khách hàng phải sử dụng các dịch vụ đính
                kèm khi cài đặt và sử dụng ứng dụng của mình.
              </p>
              <p>
                - Tất cả thông tin giao dịch giữa Khách hàng và WOMART sẽ được bảo mật qua phần mềm
                Secure Sockets Layer (SSL) bằng cách mã hóa tất cả thông tin mà Khách hàng nhập vào.
              </p>
              <p>
                - Khách hàng không nên trao đổi những thông tin thanh toán, giao nhận của mình cho
                bên thứ ba nào khác để tránh rò rỉ thông tin. Khi sử dụng chung máy tính với nhiều
                người, Khách hàng vui lòng thoát khỏi tài khoản mỗi khi không sử dụng dịch vụ của
                WOMART nữa để tự bảo vệ thông tin về mật khẩu truy cập của mình.
              </p>
              <p>
                - Khách hàng có trách nhiệm bảo vệ thông tin tài khoản của mình và không cung cấp
                bất kỳ thông tin nào liên quan đến tài khoản và mật khẩu truy cập trên ứng dụng cho
                bên nào khác. Trường hợp Khách hàng tiết lộ thông tin dẫn đến thiệt hại, WOMART sẽ
                không chịu bất kỳ trách nhiệm nào đối với tất cả những vấn đề phát sinh.
              </p>
              <p>
                - Ngoài ra, Khách hàng tuyệt đối không được sử dụng bất kỳ hình thức nào để can
                thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu của ứng dụng. WOMART nghiêm cấm
                việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại
                hay xâm nhập vào dữ liệu của hệ thống ứng dụng. Đối với mọi vi phạm, Khách hàng sẽ
                bị tước bỏ mọi quyền lợi phát sinh từ việc sử dụng ứng dụng, đồng thời có thể bị yêu
                cầu xử lý theo quy định của pháp luật.
              </p>
              <p>
                - WOMART hiểu rằng quyền được bảo vệ thông tin cá nhân của Khách hàng cũng chính là
                trách nhiệm của WOMART. Trong trường hợp có bất kỳ khiếu nại, thắc mắc hay góp ý nào
                liên quan đến chính sách bảo mật của WOMART, Khách hàng vui lòng liên hệ bằng cách:
              </p>
              <p>Gửi thư trực tiếp đến địa chỉ trụ sở của WOMART;</p>
              <p>Gửi email đến địa chỉ: cs@womart.vn</p>
              <p>
                Gọi điện đến Hotline: 1900.58.88.54 – 028.36368466/69 - Hệ thống thanh toán thẻ trên
                ứng dụng được cung cấp bởi các đối tác cổng thanh toán đã được cấp phép hoạt động
                hợp pháp tại Việt Nam (“Đối Tác Cổng Thanh Toán”), theo đó, các tiêu chuẩn bảo mật
                thanh toán thẻ của ứng dụng đảm bảo tuân thủ theo các tiêu chuẩn bảo mật của Đối Tác
                Cổng Thanh Toán.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ChinhSachBaoMat.Layout = MainNoFooter
export default ChinhSachBaoMat
