import React from "react";
import front from "../../assets/img/frontEnd.png";
import backEnd from "../../assets/img/backend.png";
import protection from "../../assets/img/Protection.png";
import chatBot from "../../assets/img/ChatBot.png";
import SectionHeader from "../../common/sectionHeader";
import SectionButton from "../../common/SectionButton";


function GroupingCourses() {
  return (
    <>
    <div className="w-[1088px]">
        
    <SectionHeader text="دسته بندی " />

<div className="  mx-3 -mt-[210px] mb-7 ">

    <div className="w-200  mx-auto grid grid-cols-4 gap-4 rounded-xl p-2 ">
      {/* //! ایتم اول */}
      <div className="shadow-xl rounded-xl overflow-hidden ">
        <img
          src={front}
          alt="frontEnd"
          className="w-50 h-[155px] object-center object-cover bg-white p-1"
        />
        <div className="px-2 items-center font-dirooz text-first ">
          <h1 className="text-center mb-1 font-dirooz my-1">فرانت اند</h1>
          <hr className="w-9/10 mx-auto h-[1px] bg-slate-400 my-1 border-0"/>
          <p className=" text-[14px] font-yekan text-third ">
            توضیح مختصر در مورد فرانت اند
          </p>
        </div>
      </div>
      {/* //! ایتم دوم */}
      <div className="shadow-xl  rounded-xl overflow-hidden ">
        <img
          src={backEnd}
          alt="frontEnd"
          className="w-50 h-[155px] object-center object-cover bg-white p-1"
        />
        <div className="px-2 items-center font-dirooz text-first ">
          <h1 className="text-center mb-1 font-dirooz my-1">بک اند</h1>
          <hr className="w-9/10 mx-auto h-[1px] bg-slate-400 my-1 border-0"/>
          <p className="text-center text-[14px] font-yekan w-42 text-third ">
            توضیح مختصر در مورد بک اند
          </p>
        </div>
      </div>
      {/* //! ایتم سوم */}
      <div className="shadow-xl ">
        <img
          src={protection}
          alt="frontEnd"
          className="w-50 h-[155px] object-center object-cover bg-white p-1"
        />
        <div className="px-2 items-center font-dirooz text-first ">
          <h1 className="text-center mb-1 font-dirooz my-1">امنیت</h1>
          <hr className="w-9/10 mx-auto h-[1px] bg-slate-400 my-1 border-0"/>
          <p className="text-center text-[14px] font-yekan w-42 text-third">
            توضیح مختصر در مورد امنیت
          </p>
        </div>
      </div>
      {/* //! ایتم چهارم */}
      <div className="shadow-xl ">
        <img
          src={chatBot}
          alt="frontEnd"
          className="w-50 h-[155px] object-center object-cover bg-white p-1"
        />
         <div className="px-2 items-center font-dirooz text-first ">
          <h1 className="text-center mb-1 font-dirooz my-1"> هوش مصنوعی</h1>
          <hr className="w-9/10 mx-auto h-[1px] bg-slate-400 my-1 border-0"/>
          <p className="text-center text-[14px] font-yekan w-42 text-third">
            توضیح مختصر در مورد هوش مصنوعی
          </p>
         </div>
    </div>
</div>
 </div>
  <SectionButton text="  مشاهده همه" />

    </div>
    </>
  );
}

export default GroupingCourses;
