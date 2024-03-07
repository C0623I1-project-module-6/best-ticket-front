import {Button} from "@material-tailwind/react";

export default function AvatarUser(){
    return(
        <div className="w-1/4">
            <div className="parent flex justify-center h-screen">
                <div className="image flex flex-col items-center">
                    <div className=" my-8 flex justify-center gap-x-3">
                        <svg className="mx-auto h-60 w-60 text-gray-300" viewBox="0 0 24 24"
                             fill="curentColor"
                             aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25
                                      6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0
                                      006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224
                                      8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75
                                      3.75 0 017.5 0z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="flex justify-center">
                        <Button type="file"
                                className="rounded-md bg-[#10b981] px-3 py-2 text-1xl
                            text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >Thêm ảnh
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}