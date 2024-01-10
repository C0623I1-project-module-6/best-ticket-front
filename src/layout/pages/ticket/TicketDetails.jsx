import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {getTicketsByStatusFinished, selectShowTicketFinished} from "../../../features/TicketSlice.js";


function TicketDetails(props) {
    const [keyword, setKeyword] = useState(props.value);
    const dispatch = useDispatch();
    const tickets = useSelector(selectShowTicketFinished);
    console.log(tickets.data)
    const showTicketFinished = async () => {

        dispatch(getTicketsByStatusFinished('Pending'));
    };

    useEffect(() => {
        setKeyword(props.value);
        showTicketFinished();

        console.log(keyword);
    }, []);
    return (
        <div className="w-full bg-blue-gray-900">
            {tickets.data?.map((ticket) => (
                <div style={{border:"1px solid black"}} className="flex py-3 px-5" key={ticket.id}>
                    <div className="left w-2/12 border-r ">{ticket.id}</div>
                    <div className="center w-8/12 pl-3">
                        <div className="center-top">
                            <h2>Tên sự kiện</h2>
                            <p>Thời gian</p>
                            <p>Địa điểm</p>
                        </div>
                        <div className="center-bottom ">Hình ảnh gì đó</div>
                    </div>
                    <div className="right w-2/12 border-l" style={{writingMode: "vertical-rl"}}>
                        Mã barcode quay ngang
                    </div>
                    <hr/>
                </div>

            ))}

        </div>
    );
}

export default TicketDetails;
