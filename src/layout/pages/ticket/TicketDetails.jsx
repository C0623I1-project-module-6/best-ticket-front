import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {selectShowTicketFinished} from "../../../features/TicketSlice.js";
import {showAllTicketFinished} from "../../../api/TicketApi.js";
// import {
//     getTicketsByStatusUpcoming,
//     selectShowTicketUpcoming,
// } from "../../../features/TicketSlice";

function TicketDetails(props) {
    const [keyword, setKeyword] = useState(props.value);
    // const { status } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tickets = useSelector(selectShowTicketFinished);
    console.log(tickets)
    const showTicketFinished = async (status) => {
        dispatch(showAllTicketFinished(status));
    };
    useEffect(() => {
        setKeyword(props.value);
        showTicketFinished();
        console.log(keyword);
    }, []);
    return (
        <>
            <div className="w-full flex bg-blue-gray-900">
                <div className="left w-2/12">hell</div>
                <div className="center w-7/12">
                    <div className="center-top">
                        <h2>Tên sự kiện</h2>
                        <p>Thời gian</p>
                        <p>Địa điểm</p>
                    </div>
                    <hr />
                    <div className="center-bottom">Hình ảnh gì đó</div>
                </div>
                <div
                    className="right w-3/12"
                    style={{ writingMode: "vertical-rl" }}
                >
                    Mã barcode quay ngang
                </div>
</div>
        </>
    );
}

export default TicketDetails;
