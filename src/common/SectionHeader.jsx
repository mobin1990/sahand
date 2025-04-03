import React from "react";
import CourseTemplate from "../components/Courses/CourseTemplate";

function SectionHeader({text}) {
    
  return (
    <>
      <div className="border z-0 w-1/2 h-[240px] relative border-b-transparent border-l-transparent">
        <div className="bg-white border border-[#4c536e] text-first font-vazir font-bold text-[18px] absolute py-2 px-12 rounded-xl -top-[24px] right-1/3 translate-x-[45%] ">
         {text}
         </div>
        
      </div>
      {/* <hr className=" relative z-0 w-1/2 h-1 bg-first rounded-full "/>
      <div className="bg-white border border-[#4c536e] text-first font-vazir font-bold text-[18px] inline-block absolute py-2 px-12 rounded-xl -translate-x-[35%] -mt-[24px] ">
         {text}
        </div> 
        <hr className="  z-0 w-1 h-1/2 bg-first rounded-full inline"/>
         */}
    </>
  );
}

export default SectionHeader;
