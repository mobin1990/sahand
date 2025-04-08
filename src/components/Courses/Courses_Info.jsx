import React from "react";
import NavBar from "../../common/NavBar";
import imgBgCourse from "../../assets/img/product-img.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function Courses_Info() {
  return (
    <>
      <NavBar />
      <div className="my-10">
        <div className="relative ">
          <div className="h-100  w-full absolute rounded-3xl overflow-hidden ">
            <img
              src={imgBgCourse}
              className="object-center object-cover h-full w-full "
              alt=""
            />
          </div>
          {/* //! دو دایو بعدی برای تار کردن عکس بزرگ در پس زمینه هست */}
          <div className="h-100 w-full absolute rounded-3xl overflow-hidden top-0 left-0  bg-black/75 blur-xs"></div>
          <div className="h-100 w-full absolute rounded-3xl overflow-hidden top-0 left-0 bg-linear-to-l from-black via-[#050505] to-[#545454] opacity-80"></div>
        </div>
        <div className="card lg:card-side   w-[100%] h-100 shadow-sm rounded-3xl ">
          <div className="card-body font-dirooz ml-6  rounded-xl pl-5 h-7/10 my-auto">
            <h2 className="card-title text-2xl text-white ">
              {" "}
              آموزش کاربردی RestFul API در لاراول{" "}
            </h2>
            <p className="text-[15px] mt-1 max-h-35 text-white ">
              {" "}
              در دوره آموزشی RESTful API در لاراول شیوه پیاده‌سازی REST API در
              پروژه‌های لاراولی را به صورت عملی و کاربردی (براساس نیاز بازار
              کار) یاد خواهید گرفت.{" "}
            </p>
            <div className="card-actions justify-between mt-auto">
              <button className="buttonStyle">
                {" "}
                <MdOutlineAddShoppingCart className="ml-1 text-2xl  " />
                خرید دوره{" "}
              </button>
              <div className="flex flex-col">
                <span className="takhfif"> 2,390,000 تومان </span>
                <span className="gheymat"> 2,390,000 تومان </span>
              </div>
            </div>
          </div>

          {/* //! عکس دوره */}
          <div className="w-65/100 h-7/10 overflow-hidden relative  my-auto  -ml-8 rounded-2xl ">
            {/* // این دایو رو برای این پذاشتم که اگه سایز عکس از سایز باکس کوچسکتر باشه اونوقت عکس رو به عنوان بکگراند قرار میده تا فضای خالی رو بپوشونه */}
            <div
              className=" absolute z-1 top-0 left-0 right-0 bottom-0 object-center blur-sm scale-110 bg-blue-800"
              style={{ backgroundImage: `url(${imgBgCourse})` }}
            ></div>
            {/* // این دایو بین بکگراند و عکس ما که سورس هردوشون یکی هستش باعث تداخل رنگ نشه */}
            <div className=" absolute z-1 top-0 left-0 right-0 bottom-0 object-center blur-sm scale-110 bg-gray-600/30 "></div>
            <img
              className="w-[100%] h-[100%]  object-contain m-auto absolute z-2  shadow-amber-500 block "
              src={imgBgCourse}
              alt="Album"
            />
          </div>
        </div>

        {/* //! توضیحات دوره */}
        <div className="grid grid-cols-3 gap-4 h-120">
          <div className="col-span-2 bg-red-400 ">
            <p className=" pb-[10px] text-[15px] px-3 text-justify text-third font-medium font-vazir">
              یکی از اصلی‌ترین شاخص‌های یک اپلیکیشن مدرن، استفاده آن از تکنولوژی
              REST API است. با استفاده از چنین تکنولوژی شما قابلیت ایجاد یک پل
              ارتباطی میان Back-End و Front-End را پیدا خواهید کرد و مستقل از
              اینکه از چه تکنولوژی‌هایی در هر دو سمت استفاده می‌کنید، می‌توانید
              محتوا بک-اند را به فرانت-اند ارسال کنید. در واقع با ظهور چنین
              تکنولوژی بود که معماری بسیاری از اپلیکیشن‌ها تغییر کرد و رویکرد
              تازه‌ای در فرایند توسعه اپلیکیشن ایجاد شد. اما برای اینکه چنین
              قابلیتی را پیاده‌سازی کنیم، نیاز است که از ابزارهای درست استفاده
              کنیم. لاراول یکی از آن ابزارهای درست است! در واقع لاراول بیشتر
              تمرکز خود را روی توسعه هر چه بهتر APIها گذاشته و ویژگی‌های
              بی‌شماری را در این زمینه توسعه داده است. اگر که پیشتر با لاراول
              کار کرده و دوره‌های مقدماتی را طی کرده‌اید، باید بگویم که شانس در
              خانه شما را زده، چرا که امروز می‌توانید با شرکت در این دوره
              آموزشی، به صورت کامل با تمام ویژگی‌های لاراول در زمینه توسعه API
              آشنا شوید.
            </p>
          </div>
          <div className="flex-col content-between  bg-blue-400">
            <div className="bg-yellow-300 h-48/100 " >
            <div className="avatar flex flex-row flex-nowrap bg-red-400 p-1 ">
                    <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  <span className=" pr-3 whitespace-nowrap items-center "> مبین یوسفی  </span>
                  </div>
             
                <hr className="w-95/100 h-[1px] mx-auto my-1.5 bg-slate-400 border-0"/>
                
            </div>
            <div className="bg-green-300 h-48/100 mt-[4%]  " >1</div>
            

          </div>
        </div>
      </div>
    </>
  );
}

export default Courses_Info;
