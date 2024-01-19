import img from "../../assets/img/cover-event.jpg"
import {FaFacebookF} from "react-icons/fa";
import {CiCalendarDate} from "react-icons/ci";

export const TicketBookingStep3 = () => {

    const numberOfRows = 5;
    const seatsPerRow = 20;

    const generateSeatCodes = () => {
        const seatCodes = [];
        for (let row = 1; row <= numberOfRows; row++) {
            const rowChar = String.fromCharCode(64 + row); // Chuyển số thành ký tự A, B, C,...
            for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
                const seatCode = `${rowChar}-${seatNumber.toString().padStart(2, '0')}`;
                seatCodes.push(seatCode);
            }
        }
        return seatCodes;
    };

    const seatCodes = generateSeatCodes();
    return (
        <>
            <div className=" mx-56">
                <h1 className="text-center font-bold text-3xl my-4">Đặt vé thành công</h1>
                <img src={img} alt="cover-event"/>
                <p className="text-center my-4">Cảm ơn bạn đã đặt vé tại TicketBox.vn</p>
                <div className="text-center text-white">
                    <a className="inline-block p-4 bg-[#3D5A99] mr-3" href=""><FaFacebookF/>
                    </a>
                    <a className="inline-block p-4 bg-[#90BA3E]" href=""><CiCalendarDate/>

                    </a>
                </div>
                <table className="table-auto border border-solid my-10">
                    <tr className="bg-gray-700 text-left">
                        <th colSpan="2" className="p-4">Thông tin đơn hàng</th>
                    </tr>
                    <tr className="border border-solid border-black	">
                        <td className="w-1/5 py-2 border border-solid border-black">Mã đơn hàng</td>
                        <td>4C97CP
                        </td>
                    </tr>
                    <tr className="border border-solid border-black	">
                        <td className="w-1/5 py-2 border border-solid border-black">Ngày đặt vé</td>
                        <td>11/01/2024
                        </td>
                    </tr>
                    <tr className="border border-solid border-black	">
                        <td className="w-1/5 py-2 border border-solid border-black">Thông tin đặt vé</td>
                        <td>1 x Nhà nghèo
                        </td>
                    </tr>
                    <tr className="border border-solid border-black	">
                        <td className="w-1/5 py-2 border border-solid border-black">Hình thức thanh toán</td>
                        <td>Miễn phí - Nhận vé qua email
                            Vé điện tử sẽ được gửi đến địa chỉ email: mfdat2015@gmail.com

                            Vui lòng in vé và đem theo đến sự kiện hoặc xuất trình mã vé (barcode/QR code) trên smart
                            phone.

                            Trong trường hợp bạn không nhận được email xác nhận từ chúng tôi, vui lòng kiểm tra thư mục
                            Spam của bạn.

                            Nếu có, hãy đánh dấu email đó là "Không phải Spam", để bạn có thể nhận được các thông tin
                            khác từ Ticketbox.
                        </td>
                    </tr>
                </table>
                <div className="">
                    {seatCodes.map((seatCode) => (
                        <div className="flex" key={seatCode}>{seatCode}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
