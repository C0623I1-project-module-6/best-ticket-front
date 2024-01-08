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
                <span className="loading loading-spinner text-error loading-lg"></span>
            </div>
        </>
    )
}

export default TicketDetails;
