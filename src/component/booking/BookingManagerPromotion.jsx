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

    // const handleFacebookSharingButtonClick = () => {
    //     const url = `http://bestticket.com/${eventId}`;
    //     const hashtag = "#c06bestticket";
    //
    //     const windowWidth = 500;
    //     const windowHeight = 400;
    //     const windowLeft = window.screen.width / 2 - windowWidth / 2;
    //     const windowTop = window.screen.height / 2 - windowHeight / 2;
    //
    //     window.open(
    //         `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&hashtag=${encodeURIComponent(hashtag)}`,
    //         "_blank",
    //         `width=${windowWidth},height=${windowHeight},left=${windowLeft},top=${windowTop}`
    //     );
    // };

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
                <div className="my-3">
                    <FacebookShareButton
                        url={`http://bestticket.com/${eventId}`}
                        hashtag={"#c06bestticket"}
                        className="flex w-[50%] justify-center"
                        style={{
                            backgroundColor: "#5075AF",
                            color: "white",
                            borderRadius: "0.25rem",
                            padding: "0.75rem 1rem",
                            fontSize: "1rem",
                            cursor: "pointer"
                        }}
                    >
                        <FacebookIcon size={30} round/>
                        <span className="ml-2 text-xl">Chia sẻ lên Facebook</span>
                    </FacebookShareButton>
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