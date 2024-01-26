import {CiBank, CiCreditCard1} from "react-icons/ci";
import {FaPencil, FaUser} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import {FaPhone} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {fetchGetUser, selectUserEdit, selectUserLogin} from "../../features/user/UserSlice.js";
import {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup"
import {Modal} from 'antd';
import {updateStatusFail} from "../../api/TicketApi.js";
import {setValues} from "../../features/UserFormInTicketBookingSlice.js";


export const TicketBookingStep2 = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserLogin);
    const userEdit = useSelector(selectUserEdit);
    const seatTickets = useSelector(state => state.seat)
    console.log(userEdit)
    const [open, setOpen] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [timeLeft, setTimeLeft] = useState(600);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    return prevTime;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const minutes = `0${Math.floor(timeLeft / 60)}`.slice(-2);
    const seconds = `0${timeLeft % 60}`.slice(-2);

    const handleClick = async () => {
        try {
            const response = await updateStatusFail(seatTickets.seats);
            history.back();

            return response;
        } catch (error) {
            console.error('Error:', error);
        }
        history.back();
    }


    useEffect(() => {
        dispatch(fetchGetUser(user.id))
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',
            email: '',
            confirmEmail: '',
            paymentMethod: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Không được bỏ trống!"),
            phoneNumber: Yup.number().min(10, "Số điện thoại có 10 số").required("Không được bỏ trống!"),
            email: Yup.string().email('Invalid Email').required("Không được bỏ trống!"),
            confirmEmail: Yup.string().oneOf([Yup.ref('email')], 'email không khớp với email đã nhập!').required("Không được bỏ trống!")
        }),
        onSubmit: (values) => {
            dispatch(setValues(values))
            props.callbackData(2);
        }
    })


    return (
        <>
            <div className="mx-40 text-black py-5">
                <div className="flex gap-10 items-center justify-center bg-neutral-400 py-5">
                    <div className="w-3/5 flex-col">
                        {timeLeft > 0 ? (
                                <div className="text-center  w-full flex justify-center py-4">
                                    <div className="w-1/2 ">
                                        <p className="text-xl">Vui lòng hoàn tất đặt vé trong</p>
                                        <p className="my-3 text-xl"><span className='bg-white p-4'>{minutes}</span> : <span
                                            className='bg-white p-4'>{seconds}</span></p>
                                    </div>

                                </div>
                            )
                            :
                            (<div>
                                <Modal
                                    open={open}
                                    closable={false}
                                    footer={null}
                                >
                                    <div className='text-center'>
                                        <p className="text-xl">Hết thời gian thanh toán vui lòng đặt vé mới</p>
                                        <button className="py-3 px-5 bg-green-700 text-white my-3 text-xl"
                                                onClick={handleClick}>Đặt vé mới
                                        </button>
                                    </div>
                                </Modal>
                            </div>)
                        }

                        <p className="m-7">THÔNG TIN NGƯỜI NHẬN VÉ</p>
                        <form id='myForm' onSubmit={formik.handleSubmit}>
                            <div className="flex mx-2">
                                <div className="w-full mx-5">
                                    <label htmlFor="">Họ Tên</label>
                                    <input type="text" value={formik.values.fullName} name='name'
                                           onChange={formik.handleChange}
                                           className="w-full input bg-white"/>
                                    {formik.errors.name && formik.touched.name && (
                                        <p className='text-red-700'>{formik.errors.name}</p>
                                    )}
                                </div>
                                <div className="w-full mx-3">
                                    <label htmlFor="">Số điện thoại</label>
                                    <input type="number" value={formik.values.phoneNumber} name='phoneNumber'
                                           onChange={formik.handleChange}
                                           className="w-full input bg-white"/>
                                    {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                        <p className='text-red-700'>{formik.errors.phoneNumber}</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex mx-2">
                                <div className="w-full mx-5">
                                    <label htmlFor="">Email</label>
                                    <input type="email" value={formik.values.email} name='email'
                                           onChange={formik.handleChange}
                                           className="w-full input bg-white"/>
                                    {formik.errors.email && formik.touched.email && (
                                        <p className='text-red-700'>{formik.errors.email}</p>
                                    )}
                                </div>
                                <div className="w-full mx-5">
                                    <label htmlFor="">Nhập lại email</label>
                                    <input type="email" value={formik.values.confirmEmail} name='confirmEmail'
                                           onChange={formik.handleChange}
                                           className="w-full input bg-white"/>
                                    {formik.errors.confirmEmail && formik.touched.confirmEmail && (
                                        <p className='text-red-700'>{formik.errors.confirmEmail}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <p className="py-4 m-4">HÌNH THỨC THANH TOÁN</p>
                                <div className="flex gap-2 mx-2">
                                    <div className="w-full flex pb-4">
                                        <input
                                            type="radio"
                                            id="creditCard"
                                            name="paymentMethod"
                                            value="Thẻ tín dụng"
                                            checked={formik.values.paymentMethod === 'Thẻ tín dụng'}
                                            onChange={formik.handleChange}
                                            className="mx-2 bg-white"
                                        />
                                        <div className="flex bg-white p-2 w-full">
                                            <div className="my-auto text-xl mr-2"><CiCreditCard1/></div>
                                            <div>Thẻ tín dụng</div>
                                        </div>
                                    </div>
                                    <div className="w-full flex pb-4">
                                        <input
                                            type="radio"
                                            id="internetBanking"
                                            name="paymentMethod"
                                            value="Thanh toán qua ngân hàng"
                                            checked={formik.values.paymentMethod === 'internetBanking'}
                                            onChange={formik.handleChange}
                                            className="mx-2 bg-white"
                                        />
                                        <div className="flex bg-white p-2 w-full">
                                            <div className="my-auto text-xl mr-2"><CiBank/></div>
                                            <div>Sử dụng Internet Banking</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                        <hr/>
                    </div>
                    <div className="w-2/5 mx-5">
                        <div className="bg-white px-5">
                            <h4 className="text-black pt-3 pb-1 font-bold text-x">THÔNG TIN NGƯỜI NHẬN VÉ</h4>
                            <hr className="border-2 border-solid"/>

                            <div className="flex py-1 ">
                                <div className="w-1/2 flex items-center">
                                    <span className="mr-3"><FaUser/></span>
                                    <span>Họ Tên: </span>
                                </div>
                                <div className="w-1/2 text-right">{user !== null ? user.fullName : <div></div>}</div>
                            </div>
                            <hr className="border-2 border-dashed"/>

                            <div className="flex py-1 ">
                                <div className="w-1/2 flex items-center">
                                    <span className="mr-3"><MdEmail/></span>
                                    <span>Email: </span>
                                </div>
                                <div className="w-1/2 text-right">{user !== null ? user.email : <div></div>}</div>
                            </div>
                            <hr className="border-2 border-dashed"/>

                            <div className="flex py-1 ">
                                <div className="w-1/2 flex items-center">
                                    <span className="mr-3"><FaPhone/></span>
                                    <span>Điện thoại : </span>
                                </div>
                                <div className="w-1/2 text-right"></div>
                            </div>

                            <div className="font-bold">HÌNH THỨC THANH TOÁN</div>
                            <hr className="border-2 border-solid"/>
                            {selectedOption === 'creditCard' && (
                                <div className="py-2 border-b border-dashed border-gray-500">
                                    Thẻ Tín dụng
                                </div>
                            )}
                            {selectedOption === 'internetBanking' && (
                                <div className="py-2 border-b border-dashed border-gray-500">
                                    Sử dụng Internet Banking
                                </div>
                            )}

                            <div className="flex justify-between">
                                <div className="font-bold py-3">THÔNG TIN ĐẶT VÉ</div>
                                <div className="flex items-center">
                                    <span><FaPencil/></span>
                                    <span>Sửa</span>
                                </div>
                            </div>
                            <hr className="border-2 border-solid"/>

                            <div className="flex justify-between py-3">
                                <span>Loại vé</span>
                                <span>Số lượng</span>
                            </div>
                            <hr className="border border-dashed"/>
                            {seatTickets.ticketTypes.map((ticketType, index) => (
                                <div className="flex justify-between py-2" key={index}>
                                    {ticketType === "VIP" && (
                                        <>
                                            <div className="w-2/3" key={index}>
                                                <p>Vé {ticketType}</p>
                                                <p>{/* Dữ liệu của loại vé VIP */}</p>
                                                <p>{" " + seatTickets.seats[index]}</p>
                                            </div>
                                            <div className="w-1/3 text-right">
                                                <p>1</p>
                                                <p>{seatTickets.price[index]} VNĐ</p>
                                            </div>
                                        </>

                                    )}
                                    {ticketType === "THƯỜNG" && (
                                        <>
                                            <div className="w-2/3">
                                                <p>Vé {ticketType}</p>
                                                <p>{/* Dữ liệu của loại vé Standard */}</p>
                                                <p>{" " + seatTickets.seats[index]}</p>
                                            </div>
                                            <div className="w-1/3 text-right">
                                                <p>1</p>
                                                <p>{seatTickets.price[index]} VNĐ</p>
                                            </div>
                                        </>
                                    )}
                                    {ticketType === "LẦU" && (
                                        <>
                                            <div className="w-2/3">
                                                <p>Vé {ticketType}</p>
                                                <p>{/* Dữ liệu của loại vé Standard */}</p>
                                                <p>{" " + seatTickets.seats[index]}</p>
                                            </div>
                                            <div className="w-1/3 text-right">
                                                <p>1</p>
                                                <p>{seatTickets.price[index]} VNĐ</p>
                                            </div>
                                        </>
                                    )}

                                </div>
                            ))}

                        </div>

                        <div className="pl-5 bg-[#666666] py-4 flex text-white">
                            <span className="w-4/6 ">Tổng cộng: </span>
                            <span>{seatTickets.totalPrice} VND</span>
                        </div>
                        <p className="text-xs text-center italic py-4">Vui lòng kiểm tra kỹ đơn hàng trước khi hoàn
                            tất</p>
                        <button className="bg-[#7CA629] py-3 px-2 w-full text-white" form='myForm' type="submit">Tiếp
                            tục
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}
