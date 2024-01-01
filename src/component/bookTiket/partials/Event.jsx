import React from "react";

const Event = () => {
  return(
      <div >
          <div className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-amber-100 cursor-pointer hover:scale-105 hover:bg-amber-50 transition p-3">
              <div className="relative aspect-w-16 aspect-h-9 w-full h-full rounded-md overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/vi/8/8c/%C4%90%E1%BA%A5t_r%E1%BB%ABng_ph%C6%B0%C6%A1ng_Nam_-_Official_poster.jpg" alt="" className="object-cover " />
              </div>
              <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                  <p className="font-bold truncate w-full" >
                      [LULULOLA SHOWfdsfdadddddddddddddddddddddsđddđddddddddddddddddddđ]
                  </p>
                  <p>20/2/2014</p>
                  <p className="text-neutral-400 text-sm pb-4 w-full">
                      Văn Mai Hương
                  </p>
              </div>
          </div>
      </div>
  )
}
export default Event