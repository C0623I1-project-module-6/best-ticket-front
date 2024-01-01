import background from "../assets/img/logo/best-ticket-bg-v4.png";

const GuestLayout = ({children}) => {
    return (
        <div className="flex-row">
            <div>
                <div className="flex items-center justify-center text-center gap-3 bg-white">

                    {
                        children
                    }
                    <div
                        className="flex bg-white rounded-lg items-center  h-screen flex-1 flex-col justify-center lg:px-8">
                        <img src={background} className="w-screen h-screen" alt=""/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default GuestLayout;
