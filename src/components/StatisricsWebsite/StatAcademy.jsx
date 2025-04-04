import React from "react";
import CourseIcon from "../../assets/img/CourseIcon.jpg";
import UsersLike from "../../assets/img/UsersLike.jpg";
import Students from "../../assets/img/Students.png";
import Teacher from "../../assets/img/Teacher.jpg";
import SectionHeader from "../../common/sectionHeader";
import SectionButton from "../../common/SectionButton";

function StatAcademy() {
  const statAcademy={TotalStudents:1,TotalCourses:2,TotalTeachers:24,TotalLikes:26}
  return (
    <>
      <div className=" grid grid-cols-4 gap-4 mx-3 mb-7 ">
        <div className=" w-[1088px] ">
          <div className="w-190   mx-auto grid grid-cols-4 gap-5 rounded-xl p-2 ">
            <div className="shadow-xl rounded-xl bg-white p-2">
              <img
                src={Students}
                alt="frontEnd"
                className="w-40 h-30 object-center object-cover bg-white p-1.5 "
              />

              <h1 className="text-center font-dirooz text-first mb-1 border-t border-gray-200 w-[90%] mx-auto py-1 my-2">
                <p> {statAcademy.TotalStudents} </p>
                <p > دانشجو اکادمی </p>
              </h1>
            </div>
            <div className="shadow-xl rounded-xl bg-white p-2">
              <img
                src={CourseIcon}
                alt="frontEnd"
                className="w-40 h-30 object-center object-cover bg-white p-1.5"
              />
              <h1 className="text-center font-dirooz text-first mb-1 border-t border-gray-200 w-[90%] mx-auto py-1 my-2">
                <p> {statAcademy.TotalCourses} </p>
                <p> دوره آموزشی </p>
              </h1>
            </div>
            <div className="shadow-xl rounded-xl bg-white p-2">
              <img
                src={Teacher}
                alt="frontEnd"
                className="w-40 h-30 object-center object-cover bg-white p-1."
              />
              <h1 className="text-center font-dirooz text-first mb-1 border-t border-gray-200 w-[90%] mx-auto py-1 my-2">
                <p> {statAcademy.TotalTeachers} </p>
                <p> استاد فعال </p>
              </h1>
            </div>
            <div className="shadow-xl rounded-xl bg-white p-2">
              <img
                src={UsersLike}
                alt="frontEnd"
                className="w-40 h-30 bg-white  "
              />
              <h1 className="text-center font-dirooz text-first mb-1 border-t border-gray-200 w-[90%] mx-auto py-1 my-2">
                <p> {statAcademy.TotalLikes} </p>
                <p> رضایتمندی </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatAcademy;
