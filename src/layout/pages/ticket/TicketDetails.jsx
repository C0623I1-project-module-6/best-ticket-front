import {useEffect, useState} from "react";

function TicketDetails(props) {
    const [keyword, setKeyword] = useState(props.value)
    useEffect(() => {
        setKeyword(props.value)
        console.log(keyword)
    }, [props]);
    return (
        <>
            <div>
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
            </div>
        </>
    )
}

export default TicketDetails;
