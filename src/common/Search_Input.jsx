import React from 'react';
import { BsSearchHeart } from 'react-icons/bs';

function Search_Input({placeHolder, Type}) {
  return (
   <>
     
            <input
              type={Type}
              className="border p-2 rounded-2xl w-[75%] text-[16px]"
              placeholder={placeHolder}
            />
            <div className="w-[44px] rounded-full h-full bg-first  content-center justify-center mr-1  ">
              <BsSearchHeart className="text-secound text-[26px] m-auto " />
            </div>
       
   
   </>
  )
}

export default Search_Input