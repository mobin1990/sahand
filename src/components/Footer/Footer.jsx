import React from "react";
// import bgRightFooter from "../../assets/img/RightBgFooter.png"
import bgRightFooter from "../../assets/img/RightBg.png"
import bgLeftFooter from "../../assets/img/LeftBgFooter.png"
import logo1 from "../../assets/img/logo1.svg"
import logo2 from "../../assets/img/logo2.svg"
import logo3 from "../../assets/img/logo3.svg"
import imgMap from "../../assets/img/mapImage.png"
import styles from "./Footer.module.css"
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
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
      {/* <div className="grid grid-cols-3 mt-35 p-1  gap-2 w-[1088px] mx-auto"> */}
        {/* <div className=" footerLink">
          <h2 className="font-vazir font-bold text-[18px] text-first">
            لینک های مرتبط
          </h2>
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
        </div> */}
        {/* <div className=" text-first footerLink">
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
        </div> */}
        {/* <div className=" bg-white p-1 rounded-2xl text-first  ml-2 font-vazir font-bold text-[14px]">
          <h2 className="text-[17px] mt-5 px-3">به ما بپیوندید</h2>
          <div className="px-3 py-2 bg-white text-third">
            در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری
            آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.
          </div>
          <button className="py-1 px-4 my-3 mr-3 text-secound bg-first rounded-[10px]">
            ارسال رزومه
          </button>
        </div> */}
      {/* </div> */}
      {/* <div className="bg-white px-2 rounded-xl shadow-xl flex font-dirooz items-center mt-4 text-third ">
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
      </div> */}


      {/* جدید */}
      <div className=" w-[1088px] h-screen relative mx-auto">
      <div className="flex justify-between  z-0 h-full ">
        <div className=" w-35/100 [clip-path:polygon(100%_0%,100%_100%,20%_100%,100%_0%)]"> <img src={bgRightFooter} alt="bg-right-footer" className="w-full h-full object-cover object-center" /></div>
        <div className=" w-35/100 [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_100%)]"> <img src={bgLeftFooter} alt="bg-left-footer" className="w-full h-full object-cover object-center" /></div>

      </div>
        <div className=" pt-10 px-10 font-vazir text-first text-[16px] font-bold bg-gradient-to-b z-10  from-[#aaa9a9] to-[#f1eeee] h-full absolute top-0 w-full  [clip-path:polygon(35%_0,100%_0%,72%_100%,0%_100%)]">
          {/* <div className=""> */}
          {/* //! بخش اول */}
          <p className="mr-4 text-[18px]">دسترسی سریع:</p>
          <ul className={`${styles.listTitr} mr-5 `}>
            <li> <a> خانه </a> </li>
            <li> <a> معرفی اساتید </a> </li>
            <li> <a> دوره ها </a> </li>
            <li> <a> اخبار و مقالات </a> </li>
          </ul>
          <ul className={`${styles.listTitr} mr-9`}>
            <li> <a> درباره ما </a> </li>
            <li> <a>  ارتباط با ما </a> </li>
            <li> <a> سوالات رایج </a> </li>
           
          </ul>
          {/* //!بخش دوم */}
          <p className="mr-17 text-[18px] pt-2"> ارتباط با ما:</p>
            
            <ul className={`${styles.listTitr} flex-col mr-26 `}>
              <li> <span> <FaPhone className=" text-[30px] ml-2 " />  011-2424975 </span> </li>
              <li className=" mr-6"> <span> <MdEmail  className=" text-[30px] ml-2 " />  institution@info.com </span> </li>
              <li className=" mr-12"> <span> <FaLocationDot  className=" text-[30px] ml-2 " />  ساری - بلوار فرح آباد - نرسیده به دانشگاه روزبهان </span> </li>
              
            </ul>
            {/* //! بخش سوم */}

            {/* <ul className=" flex items-center mx-2 mr-55 text-2xl"> */}
            <ul className=" socialLink mr-50 ">
              <li>
                <a href="#" >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" >
                  <BsTwitterX />
                </a>
              </li>
              <li>
                <a href="#" >
                  <FaTelegramPlane />
                </a>
              </li>
              <li>
                <a href="#" >
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="#" >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="#" >
                  <FaFacebookF />
                </a>
              </li>
            </ul>
            {/* //! بخش چهارم  */}

            <ul className="flex mr-64  ">
              <li> <img src={logo1} alt="logo" /> </li>
              <li> <img src={logo2} alt="logo2" /> </li>
              <li> <img src={logo3} alt="logo3" /> </li>
            </ul>
          {/* </div> */}
          
        
        </div>
        {/* //! بهش سمت چپ مربوط به " به ما بپیوندید" */}
          <div className="mt-11 absolute left-0 top-0 z-20 translate-x-[50px] ">
            <div className="shadow-lg shadow-zinc-600  translate-x-20 bg-amber-600 rounded-2xl z-20 overflow-hidden w-90">
              <div className=" w-full  bg-white p-2 rounded-2xl text-first  font-vazir font-bold text-[14px]">
                <h2 className="text-[17px]  mt-5 pt-2 px-3">به ما بپیوندید</h2>
                <div className="px-3 py-1 bg-white text-third">
                  در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری
                  آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.
                </div>
                <button className="!py-2 !px-4 !my-3 !mr-3 !text-white bg-first rounded-[10px]">
                  ارسال رزومه
                </button>
              </div>
            </div>
            {/* //! بخش مربوط به نقشه */}
            <div className="w-90 mt-10 h-50 shadow-lg shadow-zinc-600  rounded-2xl overflow-hidden bg-amber-800  z-20 ">
              <img src={imgMap} alt="image-map" className="w-full h-full object-center object-cover " />
            </div>
          </div>
            <div className="absolute left-1/2 bottom-0 z-20 py-2 -translate-x-[55%] font-dirooz text-[16px]  ">کلیه حقوق مادی و معنوی این سایت متعلق به <a href="#" className="font-vazir font-extrabold text-xl text-first underline-offset-2"> آموزشگاه سپهر </a> می باشد </div>

      </div>
   
    </>
  );
}

export default Footer;
