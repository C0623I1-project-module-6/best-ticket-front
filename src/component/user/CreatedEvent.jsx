import {FaPlus} from "react-icons/fa";

export default function CreatedEvent() {
    return(
        <div>
            <div className="px-10 py-5">
                <div className="flex justify-between items-center">
                    <h1 className=" text-xl font-serif"> SỰ KIỆN CỦA BẠN</h1>
                    <div className="font-serif flex gap-2 bg-green-400 w-[200px] h-[40px] justify-center items-center rounded-lg  text-white cursor-pointer">
                        <FaPlus />
                        <p>TẠO SỰ KIỆN </p>
                    </div>
                </div>
            </div>
        </div>
    )
}