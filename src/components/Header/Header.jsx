import React from "react";
import logo from "../../assets/img/ac-Logo.png";
import { HiUser } from "react-icons/hi2";
import { MdDarkMode } from "react-icons/md";
import headerImg from "../../assets/img/header-img.png"
import { BsSearchHeart } from "react-icons/bs";
function Header() {
  return (
    <>
      <nav className="flex items-center py-1 font-dirooz text-first">
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

      {/* //todo ------------ Header ----------- */}
      
      <div className="flex  items-center">
        <div>
          
          <p className="font-sans text-[42px] font-extrabold text-first mb-1 ">
            دنبال چی میگردی؟
          </p>
          <span className="font-dirooz">دیگه وقتشه یه تکونی به خودت بدی</span>
          <div className="flex h-11 mt-2">
            <input type="text" className="border p-2 rounded-2xl w-[75%] text-[16px]" placeholder="دنبال چی میگردی؟؟؟" />
            <div className="w-[44px] rounded-full h-full bg-first  content-center justify-center mr-1  "><BsSearchHeart className="text-secound text-[26px] m-auto " /></div>
          </div>
          <h1 className="text-first mt-2 font-sans font-bold text-[30px]">اکادمی سپهر</h1>
          <div className="w-[60%] font-dirooz text-[16px] indent-2 mt-1 text-justify">
            آکادمی آموزشی سپهر مکانی برای پیشرفت تو تا بتونی مهارت های مورد
            نیزار برای طراحی وب رو هرچه سریعتر و با بهترین روش یاد بگیری
          </div>
        </div>
        <div>
          <img src={headerImg} alt="header" />
        </div>
      </div>
    </>
  );
}

export default Header;
