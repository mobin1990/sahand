import React from "react";
import {
  BsInstagram,
  BsTwitterX,
  BsTelegram,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-3 mt-46 p-1  gap-2">
        <div className=" footerLink">
          <h2 className="font-vazir font-bold text-[18px] text-first">لینک های مرتبط</h2>
          <ul >
            <li >
              <a >لینک مفید</a>
            </li>
            <li>
              <a>لینک مفید</a>
            </li>
            <li>
              <a>لینک مفید</a>
            </li>
            <li>
              <a>لینک مفید</a>
            </li>
            <li>
              <a>لینک مفید</a>
            </li>
          </ul>
        </div>
        <div className=" text-first footerLink">
          <h2 className="font-vazir font-bold text-[16px]">لینک های مرتبط</h2>
          <ul>
            <li>
              <a>لینک مفید</a>
            </li>
            <li>
              <a>لینک مفید</a>
            </li>
            <li>
              <a>لینک مفید</a>
            </li>
            <li>
              <a>لینک مفید</a>
            </li>
            <li>
              <a>لینک مفید</a>
            </li>
          </ul>
        </div>
        <div className=" bg-white p-1 rounded-2xl text-first  ml-2 font-vazir font-bold text-[14px]">
          <h2 className="text-[17px] mt-5 px-3">به ما بپیوندید</h2>
          <div className="px-3 py-2 bg-white text-third">
            در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری
            آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.
          </div>
          <button className="py-1 px-4 my-3 text-secound bg-first rounded-[10px]">
            ارسال رزومه
          </button>
        </div>
      </div>
      <div className="bg-white px-2 rounded-xl shadow-xl flex font-dirooz items-center mt-4 text-third ">
        خوشحال میشیم اگه در شبکه های اجتماعی هم با ما باشید:
        <ul className="bg-white flex items-center mx-2 ">
          <li>
            <a href="#" className="socialLink">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="socialLink">
              <BsTwitterX />
            </a>
          </li>
          <li>
            <a href="#" className="socialLink">
              <FaTelegramPlane />
            </a>
          </li>
          <li>
            <a href="#" className="socialLink">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="#" className="socialLink">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a href="#" className="socialLink">
              <FaFacebookF />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
