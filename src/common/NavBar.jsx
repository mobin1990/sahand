import React, { useState } from "react";
import logo from "../assets/img/ac-Logo.png";
import { HiUser } from "react-icons/hi2";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineHome  } from "react-icons/ai";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineTicket } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { PiSignOutBold } from "react-icons/pi";

function NavBar() {
  
  const [showBgBlur, setShowBgBlur] = useState(false)
  

  return (
    <>
      <nav className="flex items-center py-1 font-dirooz text-first w-[1088px] mx-auto">
        <div className="ml-3">
          <img src={logo} alt="logo image" />
        </div>
        <ul className="flex liHeader">
          <li>خانه</li>
          <li>دوره ها</li>
          <li>اساتید</li>
          <li>اخبار</li>
          <li> ارتباط با ما</li>
        </ul>
        
    <div className="flex mr-auto">
          <div className="darkMode w-7 h-7 ml-2 bg-first rounded-full relative left-10 p-[3px]">
            <MdDarkMode className="w-[100%] h-auto text-white " />
          </div>

            <div className="dropdown z-20 absolute "  onClick={() => {setShowBgBlur(!showBgBlur)}}>
              <div tabIndex={0} role="button" className="darkMode w-7 h-7 ml-2 bg-first rounded-full p-[3px] relative z-40">
                <HiUser className="w-[100%] h-auto text-white " />
            </div >
              <ul tabIndex={0} className="dropdown-content menu font-dirooz text-[16px] bg-white relative left-8.5 top-6  rounded-box rounded-tl-[4px] z-1 min-w-70 p-2 shadow-sm">
                <li className=" my-1">
                  <div className="avatar flex flex-row flex-nowrap ">
                    <div className="ring-primary ring-offset-base-100 w-15 rounded-full ring ring-offset-2">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  <span className=" pr-1  whitespace-nowrap  "> مبین یوسفی  </span>
                  </div>
                </li>
                <hr className="w-95/100 h-[1px] mx-auto my-1.5 bg-slate-400 border-0"/>
                <li><a> <AiOutlineHome   className="text-xl"/> داشبورد </a></li>
                <li className=" my-1"><a> <LuGraduationCap className="text-xl items-center"  />  دوره ها </a></li>
                <li className=" my-1"><a> <HiOutlineTicket className="text-xl items-center -rotate-45"  /> تیکت ها </a></li>
                <li className=" my-1"><a> <FaRegUser  className="text-xl items-center"  /> پروفایل کاربری </a></li>
                <hr className="w-95/100 h-[1px] mx-auto my-2 bg-slate-400 border-0"/>
                <li className=" my-1 items-center text-[18px]"><a> <PiSignOutBold /> خروج از حساب  </a></li>


              </ul>
              
            </div>
            {showBgBlur && (<div className="  z-10 absolute -top-2 w-full h-[120%] right-0 bg-first/50 backdrop-blur-lg backdrop-opacity-90" onClick={() => {setShowBgBlur(!showBgBlur)}} ></div>)}
         
        </div>
       
      </nav>
    </>
  );
}

export default NavBar;
