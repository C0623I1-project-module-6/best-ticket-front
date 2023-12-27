import React from 'react';
import { CiSearch } from 'react-icons/ci';
const SearchBar = () => {
    return (
        <div className="max-w-md mx-auto py-4 ">
            <div className="relative text-gray-600">
                <input
                    type="search"
                    name="search"
                    placeholder="Bạn cần tìm gì ?"
                    className="border-green-600 border-[1px] h-11 px-5 w-[380px] pr-10 rounded-lg text-sm focus:outline-none flex"
                />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <CiSearch className="text-gray-600 h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
