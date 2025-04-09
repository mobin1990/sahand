import React from "react";
import { FiUserCheck } from "react-icons/fi";
import {
  MdOutlineAddShoppingCart,
  MdOutlineMarkEmailRead,
} from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import imgBgCourse from "../../assets/img/product-img.png";
import img_news from "../../assets/img/Banner.png";
import { MdOutlineDateRange } from "react-icons/md";
import NavBar from "../../common/NavBar";
import Footer from "../Footer/Footer";

function News_Detail() {
  return (
    <>
    <NavBar/>
      <div className=" flex justify-between mt-4 w-[1088px] mx-auto">
          {/* //! توضیحات حبر */}
        <div className=" w-[63%] py-4 ">

          <div className="shadow-2xl bg-white py-5 rounded-lg ">
            <p className="w-full font-sans font-bold my-2 pr-6">
              دهمین دوره ماراتون برنامه نویسی تلفن همراه کشور آغاز شد
            </p>
            <hr className="w-[95%]  h-[1px] bg-first border-none rounded-xl mx-auto  " />

            <div>
              <div className="rounded-lg overflow-hidden my-2  mx-auto px-4 py-1 h-80 ">
                <img
                  src={img_news}
                  className="  rounded-2xl h-full w-full object-center object-cover   "
                  alt="bg_Teacher"
                />
              </div>
              <p className=" pb-[10px] text-[15px] px-7 text-justify leading-loose text-third font-medium font-dirooz">
                یکی از اصلی‌ترین شاخص‌های یک اپلیکیشن مدرن، استفاده آن از
                تکنولوژی REST API است. با استفاده از چنین تکنولوژی شما قابلیت
                ایجاد یک پل ارتباطی میان Back-End و Front-End را پیدا خواهید کرد
                و مستقل از اینکه از چه تکنولوژی‌هایی در هر دو سمت استفاده
                می‌کنید، می‌توانید محتوا بک-اند را به فرانت-اند ارسال کنید. در
                واقع با ظهور چنین تکنولوژی بود که معماری بسیاری از اپلیکیشن‌ها
                تغییر کرد و رویکرد تازه‌ای در فرایند توسعه اپلیکیشن ایجاد شد.
                اما برای اینکه چنین قابلیتی را پیاده‌سازی کنیم، نیاز است که از
                ابزارهای درست استفاده کنیم. لاراول یکی از آن ابزارهای درست است!
                در واقع لاراول بیشتر تمرکز خود را روی توسعه هر چه بهتر APIها
                گذاشته و ویژگی‌های بی‌شماری را در این زمینه توسعه داده است. اگر
                که پیشتر با لاراول کار کرده و دوره‌های مقدماتی را طی کرده‌اید،
                باید بگویم که شانس در خانه شما را زده، چرا که امروز می‌توانید با
                شرکت در این دوره آموزشی، به صورت کامل با تمام ویژگی‌های لاراول
                در زمینه توسعه API آشنا شوید.
              </p>
              <hr className="w-[95%] h-[1px] mt-4 bg-first border-none rounded-xl mx-auto  " />

              <div className="flex text-first font-yekan pr-6 mt-2">
                <MdOutlineDateRange className="text-xl " />{" "}
                <span className="text-[14px] pl-2 pr-1"> تاریخ انتشار: </span>{" "}
                <span> 1403/04/02 </span>
              </div>
            </div>
          </div>
          {/* //! بخش نظرات */}
          <div className=" rounded-lg mt-10  py-2 bg-white shadow-2xl">
            <p className="w-full font-dirooz text-xl my-2 mr-10"> نظرات </p>
            <div className="  bg-white mx-auto my-3 mb-10">
              <label className="input validator my-2 mr-10 rounded-xl min-w-6/10 ">
                <FiUserCheck className="text-first" />
                <input
                  className="font-dirooz items-center text-first "
                  type="input"
                  required
                  placeholder="نام کاربری"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minlength="3"
                  maxlength="30"
                  title="Only letters, numbers or dash"
                />
              </label>

              <div className=" h-45 mt-4 w-[90%] mx-auto text-first ">
                <textarea
                  placeholder="خوشحال می شیم اگر نظر، پیشنهاد و یا انتقاد خودتو  در مورد این دوره با ما در میون بذاری"
                  className="textarea overflow-y-auto textarea-sm w-full h-full py-3 px-5 rounded-lg "
                ></textarea>
              </div>
              <button className=" bg-first text-white text-[16px] px-4 py-2 rounded-xl mt-4 mr-8 font-sans">
                ارسال پیام
              </button>
            </div>
          </div>

          {/* //! نظرات کاربران */}
          <div className="bg-white mt-15 py-5 rounded-lg  px-3 shadow-2xl">
            <div className="shadow-xl bg-slate-100 py-1 rounded-lg px-2 ">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-12 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <div className="  mt-4 -mr-1 py-1">
                  It was said that you would, destroy the Sith, not join them.
                </div>
              </div>
            </div>

            {/* //! جواب کامنت */}
            <div className="shadow-xl bg-slate-300 mt-2 mr-10 py-1 px-2 rounded-lg ">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-12 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <div className=" mt-4 -mr-1 py-1">
                  It was said that you would, destroy the Sith, not join them.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //! باکس سمت چپ */}
        <div className=" w-1/3 flex-col content-between ">
          {/* //! باکس سمت چپ ایتم مربوط  به اخرین خبرها */}
          <div className=" bg-white shadow-2xl px-2 py-3 rounded-xl  mt-[4%] flex flex-col ">
            <div className=" my-2 flex ">
              <div className=" pr-3 mr-2 w-8/10 ">
                <p className="font-dirooz text-[18px] text-first ">
                  {" "}
                  اخرین خبرها{" "}
                </p>
              </div>
              {/* </div> */}
            </div>
            <hr className="w-95/100 h-[1px] mx-auto  bg-slate-400 border-0" />
            <div className=" my-2 ">
              <div className="border border-gray-400 w-95/100 mx-auto  rounded-lg px-1 py-2 mb-2 grid grid-cols-9  items-center ">
                <div className="w-18 col-span-2 bg-green-200 max-h-15 my-auto border border-gray-200 rounded-lg overflow-hidden">
                  <img src={imgBgCourse} alt="image" />
                </div>

                <p className=" font-sans text-[12px] overflow-hidden mr-1 col-span-7 pr-1 h-13 content-center">
                  {" "}
                  آموزش کاربردی RestFul API در لاراول{" "}
                </p>

                <hr className="w-full h-[1px] mx-auto my-2 col-span-9 bg-slate-400 border-0" />
                <div className="flex text-first font-yekan text-[14px] col-span-5 items-center">
                  <MdOutlineDateRange className="text-xl ml-1" />{" "}
                  <span> 1403/04/02 </span>
                </div>
                <div className="mr-auto  col-span-4 ">
                  <button className="buttonDetail ">مشاهده </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default News_Detail;
