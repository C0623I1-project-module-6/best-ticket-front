export default function CreateEventSideBar(){
    const steps = ["Thông tin sự kiện","Thời gian & loại vé","Cài đặt","Thông tin thanh toán"]
    return(
        <div className="w-[30vw] bg-purple-800  text-white text-xl ">
            {steps.map((step,index)=>(
                <div className="flex gap-5 items-center hover:bg-white hover:text-black p-5 ">
                    <span className="rounded-full bg-green-400 h-10 w-10 flex items-center justify-center" >{index+1}</span>
                    <p>{step}</p>
                </div>
            ))}

        </div>
    )
}