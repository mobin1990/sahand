import React from "react";
import logo from "../../assets/img/ac-Logo.png";

import headerImg from "../../assets/img/header-img.png";
import { BsSearchHeart } from "react-icons/bs";
import NavBar from "../../common/NavBar";
import Search_Input from "../../common/Search_Input";
function Header() {
  return (
    <>
      <NavBar />

      {/* //todo ------------ Header ----------- */}

      <div className="flex  items-center">
        <div>
          <p className="font-sans text-[42px] font-extrabold text-first mb-1 ">
            دنبال چی میگردی؟
          </p>
          <span className="font-dirooz">دیگه وقتشه یه تکونی به خودت بدی</span>
          <div className="flex h-11 mt-2">     
            <Search_Input Type={"text"} PlaceHolder={"دنبال چی میگردی؟؟؟"}/>
          </div>

          <h1 className="text-first mt-2 font-sans font-bold text-[30px]">
            اکادمی سپهر
          </h1>
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
