import React from "react";
import logo from "../assets/img/ac-Logo.png";
import { HiUser } from "react-icons/hi2";
import { MdDarkMode } from "react-icons/md";

function NavBar() {
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
          <div className="darkMode w-7 h-7 ml-2 bg-first rounded-full p-[3px]">
            <MdDarkMode className="w-[100%] h-auto text-white " />
          </div>
          <div className="darkMode w-7 h-7 ml-2 bg-first rounded-full p-[3px]">
            <HiUser className="w-[100%] h-auto text-white " />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
