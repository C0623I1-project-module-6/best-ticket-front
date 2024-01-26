import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {getEventById} from "../../features/EventSlice.js";
import UserFooter from "../footer/UserFooter.jsx"
import {FacebookIcon, FacebookShareButton} from "react-share";

const BookingManagerPromotion = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const event = useSelector((state) => state.event.event);
    const eventId = useParams().eventId;

    useEffect(() => {
        dispatch(getEventById(eventId))
    }, [dispatch, eventId]);

    return (<>
        <div className="w-full bg-white">
            <div className="w-[80%] mx-[10%] pt-[5%] text-black">
                <div className="w-[80%] text-2xl">{event !== null ? event.name : <div>Loading...</div>}</div>
                <div className="w-[80%]">{event !== null ? event.duration : <div>Loading...</div>}</div>
                <hr className="my-5 border-0.5px border-black"/>
            </div>
            <div className="w-[80%] mx-[10%] text-black">
                <div className="flex text-xl">
                    Link quảng bá:
                    <a onClick={() => {
                        navigate(`/event/${eventId}`)
                    }}
                       className="">
                        <button className="text-[#95C897] hover:text-indigo-600">
                            http://bestticket.com/event/{eventId}
                        </button>
                    </a>
                </div>
                <div>
                    <button className='border bg-[#5075AF] text-center py-2 px-20 text-white'>
                        <FacebookShareButton
                            url={`http://bestticket.com/${eventId}`}
                            hashtag={"#c06bestticket"}
                            className="flex"
                        >
                            <FacebookIcon size={22}/> Chia sẻ lên Facebook
                        </FacebookShareButton>
                    </button>
                </div>
                <hr className="my-5 border-0.5px border-black"/>
            </div>
            {/*<div className="w-[80%] mx-[10%] text-black">*/}
            {/*    <div> Chia sẻ lên website, blog</div>*/}
            {/*    <div>Sao chép đoạn mã dưới đây để tạo widget bán vé trên website hoặc blog của bạn</div>*/}
            {/*</div>*/}
        </div>
        <div>
            <UserFooter/>
        </div>
    </>)
};


export default BookingManagerPromotion;