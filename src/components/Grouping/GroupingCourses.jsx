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
      <SectionHeader text="دسته بندی " />
      <div className=" grid grid-cols-4 gap-4 mx-3 -mt-[210px] mb-7 h-45 ">
        <div className=" w-[1088px] ">
          <div className="w-190 h-40  mx-auto grid grid-cols-4 gap-5 rounded-xl p-2 ">
            <div className="shadow-xl">
              <img
                src={front}
                alt="frontEnd"
                className="w-50 h-[155px] object-center object-cover bg-white p-1"
              />
              <h1 className="text-center mb-1 font-dirooz my-1">فرانت اند</h1>
              <p className="text-center text-[14px] font-yekan w-42">
                توضیح مختصر در مورد فرانت اند
              </p>
            </div>
            <div className="shadow-xl">
              <img
                src={backEnd}
                alt="frontEnd"
                className="w-50 h-[155px] object-center object-cover bg-white p-1"
              />
              <h1 className="text-center mb-1 font-dirooz my-1">بک اند</h1>
              <p className="text-center text-[14px] font-yekan w-42">
                توضیح مختصر در مورد بک اند
              </p>
            </div>
            <div className="shadow-xl">
              <img
                src={protection}
                alt="frontEnd"
                className="w-50 h-[155px] object-center object-cover bg-white p-1"
              />
              <h1 className="text-center mb-1 font-dirooz my-1">امنیت</h1>
              <p className="text-center text-[14px] font-yekan w-42">
                توضیح مختصر در مورد امنیت
              </p>
            </div>
            <div className="shadow-xl">
              <img
                src={chatBot}
                alt="frontEnd"
                className="w-50 h-[155px] object-center object-cover bg-white p-1"
              />
              <h1 className="text-center mb-1 font-dirooz my-1"> هوش مصنوعی</h1>
              <p className="text-center text-[14px] font-yekan w-42">
                توضیح مختصر در مورد هوش مصنوعی
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-24 ">
        <SectionButton text="  مشاهده همه" />
      </div>
    </>
  );
}

export default GroupingCourses;
