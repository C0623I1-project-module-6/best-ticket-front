import LeftSVG from '../../assets/img/heading-img-1-left.svg';
import RightSVG from '../../assets/img/heading-img-1-right.svg';
import Event from "./partials/Event.jsx";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';


export default function Content(){
    return(
       <div className=" w-[70%] bg-white mx-auto mr-[5%] ml-[5%] mt-2 mb-2 rounded-lg ">
           <div className=" w-full">
               <div className="w-[780px] h-[300px] m-4 mx-auto">
                   <Swiper
                       modules={[Navigation, Pagination]}
                       slidesPerView={1}
                       navigation
                       pagination={{ clickable: true }}
                       loop={true}
                       centeredSlides={true}
                   >
                       <SwiperSlide>
                           <img
                               className="mx-auto my-auto h-full w-[80%] rounded-lg"
                               src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/05/BD6288.jpg"
                               alt=""
                           />
                       </SwiperSlide>
                       <SwiperSlide>
                           <img
                               className="mx-auto my-auto h-full w-[80%] rounded-lg"
                               src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/05/BD6288.jpg"
                               alt=""
                           />
                       </SwiperSlide>
                       <SwiperSlide>
                           <img
                               className="mx-auto my-auto h-full w-[80%] rounded-lg"
                               src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/05/BD6288.jpg"
                               alt=""
                           />
                       </SwiperSlide>
                       <SwiperSlide>
                           <img
                               className="mx-auto my-auto h-full w-[80%] rounded-lg"
                               src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/12/05/BD6288.jpg"
                               alt=""
                           />
                       </SwiperSlide>
                   </Swiper>
               </div>
           </div>

           <div className="flex justify-center mb-0 space-x-2 ">
               <div className="flex place-items-end justify-center w-[70%] border-b-4 border-gray-800 ">
                   <img src={LeftSVG} alt="" className="" />
                   <span className="pb-2  border-gray-800 text-green-600 font-bold text-3xl">Sự kiện nổi bật</span>
                   <img src={RightSVG} alt="" className="" />
               </div>
           </div>
           <div className="w-full overflow-hidden overflow-y-auto mt-2 mr-2">
               <div className="">
                   <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 p-4">
                       <Event/>
                       <Event/>
                       <Event/>
                       <Event/>
                       <Event/>
                       <Event/><Event/><Event/><Event/>
                   </div>
               </div>

           </div>
           <div className="pt-10 pb-10 text-center">
               <div className="pt-10 pb-10 text-center">
                   <hr className="w-full  border-t-2 border-gray-300" />
                   <span className="cursor-pointer bg-green-500 rounded-3xl text-white font-bold px-10 py-2">Xem thêm</span>
               </div>
           </div>
       </div>
    )
}