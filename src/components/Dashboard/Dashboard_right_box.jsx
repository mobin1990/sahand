import React from "react";
import bgDashboard from "../../assets/img/bgDashboard.png";
import { ImExit } from "react-icons/im";
import { IoHomeOutline, IoNewspaperOutline } from "react-icons/io5";
import { Input, Tooltip } from "@material-tailwind/react";
import { IoHome } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

import { FaUserPen } from "react-icons/fa6";

function Dashboard_right_box() {
  return (
    <>
      {/* //todo بخش مربوط به بکگراند */}
      <div className="absolute top-0 right-0 w-full h-full">
        <img src={bgDashboard} alt="bg-image" className="h-full w-full" />
      </div>
      <div className="w-full shadow-blue-500 h-90/100 bg-gradient-to-t from-[#5e7eaa]  to-[#4a8ce7] opacity-15 absolute bottom-0 right-0"></div>
      <div className=" text-center  relative w-full h-full">
        <div className="avatar  ">
          <div className="w-24 rounded-full ring-2 ring-offset-2 ring-first  ">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <h1 className="font-vazir text-xl text-white font-bold py-2">
          مبین یوسفی
        </h1>
        <div className=" flex justify-around text-3xl font-bold font-vazir p-2  ">
          <Tooltip
            content=" ویرایش اطلاعات حساب "
            placement="bottom-start"
            className="px-2 py-1 text-secondColor bg-[#E1EAF8] text-first -ml-2 text-center font-sans text-[12px]"
          >
            <a>
              <FaUserPen className="text-warning" />
            </a>
          </Tooltip>

          <Tooltip
            content=" خروج از حساب کاربری"
            placement="bottom-start"
            className="px-2 py-1 text-secondColor bg-[#E1EAF8] text-first -ml-2 text-center font-sans text-[12px]"
          >
            <a>
              <ImExit className="text-error" />
            </a>
          </Tooltip>
        </div>
        <hr className="w-8/10 h-[1px] my-3 border-0 bg-amber-50  mx-auto" />

        {/* //! بخش مربوط به ایتم های داشبورد   */}
        <div className=" font-vazir  w-8/10 mx-auto  text-right  items-center " >
          <ul className="">
            <li className=" flex items-center mb-3">
              <a href="#" className="flex items-center py-2 ">
                <IoHome className=" text-2xl text-white  ml-2" />
                <span className="text-white ">پیشخوان </span>
              </a>
            </li>
            <li className=" flex items-center mb-3">
              <a href="#" className="flex items-center py-2 ">
                <FaListAlt className=" text-2xl text-white ml-2" />
                <span className="text-white "> دوره ها </span>
              </a>
            </li>
            <li className=" flex items-center mb-3">
              <a href="#" className="flex items-center py-2 ">
                <FaListCheck className=" text-2xl text-white ml-2" />
                <span className="text-white "> دوره های من </span>
              </a>
            </li>
            {/* <li className=" bg-orange-500 flex mb-3 "> ویرایش اطلاعات </li> */}
            {/* <li className=" font-vazir text-first "></li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard_right_box;
