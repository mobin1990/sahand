import React from "react";
import CourseIcon from "../../assets/img/CourseIcon.png";
import UsersLike from "../../assets/img/UsersLike.png";
import Students from "../../assets/img/Students.png";
import Teacher from "../../assets/img/Teacher.png";
import SectionHeader from "../../common/sectionHeader";
import SectionButton from "../../common/SectionButton";

function StatAcademy() {
  return (
    <>
      <div className=" grid grid-cols-4 gap-4 mx-3 mb-7  ">
        <div className=" w-[1088px] ">
          <div className="w-190   mx-auto grid grid-cols-4 gap-5 rounded-xl p-2 ">
            <div className="shadow-xl rounded-xl bg-white p-2">
              <img
                src={Students}
                alt="frontEnd"
                className="w-40 h-30 object-center object-cover bg-white p-1"
              />

              <h1 className="text-center mb-1 border-t border-gray-200 w-[90%] mx-auto py-1  font-dirooz my-1">
                <p> 5 </p>
                دانشجو اکادمی
              </h1>
            </div>
            <div className="shadow-xl rounded-xl bg-white p-2">
              <img
                src={CourseIcon}
                alt="frontEnd"
                className="w-40 h-30 object-center object-cover bg-white p-1"
              />
              <h1 className="text-center mb-1 border-t border-gray-200 w-[90%] mx-auto py-1  font-dirooz my-1">
                <p> 15 </p>
                دوره آموزشی
              </h1>
            </div>
            <div className="shadow-xl rounded-xl bg-white p-2">
              <img
                src={Teacher}
                alt="frontEnd"
                className="w-40 h-30 object-center object-cover bg-white p-1"
              />
              <h1 className="text-center mb-1 border-t border-gray-200 w-[90%] mx-auto py-1  font-dirooz my-1">
                <p> 25 </p>
                استاد فعال
              </h1>
            </div>
            <div className="shadow-xl rounded-xl bg-white p-2">
              <img
                src={UsersLike}
                alt="frontEnd"
                className="w-40 h-30 p-3 bg-white "
              />
              <h1 className="text-center mb-1 border-t border-gray-200 w-[90%] mx-auto py-1  font-dirooz my-1">
                <p> 25 </p>
                رضایتمندی
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatAcademy;
