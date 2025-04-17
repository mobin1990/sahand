import React from "react";
import { IoHome } from "react-icons/io5";
import { PiLessThan } from "react-icons/pi";
import bg_Dashborad2 from "../../assets/img/bg-dashbord2.svg";
import styles from "./Dashboard.module.css";

function DashboardBreadcrumbs() {
  return (
    <>
      <div className="flex justify-between p-1">
        {/* //! breadcrumbs  */}
        <div className=" flex items-center text-sm font-sans ">
          <ul className="flex items-center ">
            <li className="">
              <a href="#" className="flex  pl-1 items-center py-2 text-first">
                <IoHome className=" text-2xl text-first" />
                <span className="text-first mr-1 ">پیشخوان </span>
              </a>
            </li>
            <span className="text-gray-400 mx-2">
              <PiLessThan />
            </span>
            <li>
              <a href="#" className=" items-center py-2 text-first">
                <span className="text-first">مشاهده اطلاعات حساب کاربری</span>
              </a>
            </li>
          </ul>
        </div>

        {/* //! تاریخ امروز  */}
        <div className="font-sans bg-[#309BE2] rounded-xl px-2 ml-1  text-white flex items-center">
          <span className="mx-2"> دوشنبه </span>
          <span className="ml-2"> 1404/01/24 </span>
        </div>
      </div>
        <hr className="mx-0.5  h-0.5 mt-1 mb-2 bg-[#E6C510] border-0" />
    </>
  );
}

export default DashboardBreadcrumbs;
