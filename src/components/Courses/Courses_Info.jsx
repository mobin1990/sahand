import React from "react";
import NavBar from "../../common/NavBar";
import imgBgCourse from "../../assets/img/product-img.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { FiUserCheck } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Footer from "../Footer/Footer";



function Courses_Info() {
  return (
    <>
      <NavBar />
      <div className="my-10 w-[1088px] mx-auto">
        <div>
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
        <div className="card lg:card-side w-[100%] h-100 shadow-sm rounded-3xl ">
          <div className="card-body font-dirooz ml-6  rounded-xl pl-5 h-7/10 my-auto">
            <h2 className="card-title text-2xl text-white ">
              آموزش کاربردی RestFul API در لاراول
            </h2>
            <p className="text-[15px] mt-1 max-h-35 text-white ">
              در دوره آموزشی RESTful API در لاراول شیوه پیاده‌سازی REST API در
              پروژه‌های لاراولی را به صورت عملی و کاربردی (براساس نیاز بازار
              کار) یاد خواهید گرفت.
            </p>
            <div className="card-actions justify-between mt-auto">
              <button className="buttonStyle">
                <MdOutlineAddShoppingCart className="ml-1 text-2xl  " />
                خرید دوره
              </button>
              <div className="flex flex-col">
                <span className="takhfif"> 2,390,000 تومان </span>
                <span className="gheymat"> 2,390,000 تومان </span>
              </div>
            </div>
          </div>

          {/* //! عکس دوره */}
          <div className="w-65/100 h-7/10 overflow-hidden relative  my-auto  -ml-8 rounded-2xl ">
            {/* //! این دایو رو برای این پذاشتم که اگه سایز عکس از سایز باکس کوچسکتر باشه اونوقت عکس رو به عنوان بکگراند قرار میده تا فضای خالی رو بپوشونه */}
            <div
              className=" absolute z-1 top-0 left-0 right-0 bottom-0 object-center blur-sm scale-110 bg-blue-800"
              style={{ backgroundImage: `url(${imgBgCourse})` }}
            ></div>
            {/* //! این دایو بین بکگراند و عکس ما که سورس هردوشون یکی هستش باعث تداخل رنگ نشه */}
            <div className=" absolute z-1 top-0 left-0 right-0 bottom-0 object-center blur-sm scale-110 bg-gray-600/30 "></div>
            <img
              className="w-[100%] h-[100%]  object-contain m-auto absolute z-2  shadow-amber-500 block "
              src={imgBgCourse}
              alt="Album"
            />
          </div>
        </div>
        </div>

       <div className=" flex justify-between mt-10">
        <div className=" w-[63%] py-4 ">



 {/* //! توضیحات دوره */}

          <div className="shadow-2xl bg-white py-5 rounded-lg ">
            <p className="w-full font-dirooz text-xl my-2 pr-6"> توضیحات </p>
            <p className=" pb-[10px] text-[15px] px-7 text-justify leading-loose text-third font-medium font-dirooz">
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
          <label className="input validator my-2 mr-9 rounded-xl min-w-6/10 ">
                      <MdOutlineMarkEmailRead className="text-first" />
                      <input
                        type="email"
                        placeholder="ایمیل"
                        required
                        className="text-first"
                      />
                    </label>
                    <div className="validator-hint hidden">
                      لطفا ایمیل خود را وارد کنید
                    </div>
          
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
        </div>


        
        
          {/* //! باکس سمت چپ */}
        <div className=" w-1/3 flex-col content-between ">
            {/* //! باکس مربوط به معرفی استاد */}
          {/* <div className="flex-col content-between  "> */}
            <div className="bg-white shadow-2xl py-4 rounded-xl p-2 mt-4 mb-8 flex flex-col ">
            <div className=" my-2 flex ">
         
                <div className="avatar h-14 w-14 ">
                  <div className="ring-primary ring-offset-base-100 w-15 rounded-full ring ring-offset-2">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className=" pr-3 mr-2 w-8/10 ">
                  <p className="font-dirooz text-[18px]  "> مبین یوسفی </p>
                  <p className="font-dirooz text-[12px]"> مدرس دوره </p>
                </div>
              
            </div>
            <hr className="w-95/100 h-[1px] mx-auto  bg-slate-400 border-0" />
            <div className=" my-2 ">
            <div className="text-[13px] w-[95%] mx-auto py-1 self-center  ">
                از سال 92 وارد حوزه نرم افزار و برنامه نویسی شدم… طی 10 سال
                گذشته تجربه کار با زبانها و پلتفرمهای مختلفی رو دارم ولی4 سال
                اخیر به شکل متمرکز به عنوان فول استک وب مشغول به کار بودم و در
                حال حاضر استک اصلیم لاراول و ریکت هست اما خب میتونم بگم این روز…
              </div>
            </div>
{/* //! با مارجین تاپ دادن با این دایو همیشه اونو در انتهای باکس قرار میدیم */}
            <div className=" mt-auto ">
                <hr className="w-95/100 h-[1px] mx-auto my-1.5 bg-slate-400 border-0" />
                <div className="btn btn-soft btn-info mt-2  flex justify-center my-1 items-center text-[13px] ">
                  <a className="text-xl text-info btn-info" > <PiSignOutBold className="  " /> </a>
                  <span> مشاهده سایر دوره های این استاد </span>
                </div>
              </div>
            </div>





{/* //! باکس سمت چگ ایتم مربوط  به دوره های مشابه */}
            <div className=" bg-white shadow-2xl py-4 rounded-xl p-2 mt-[4%] flex flex-col ">
            <div className=" my-2 flex ">
            {/* <div className=" "> */}
               
                <div className=" pr-3 mr-2 w-8/10 ">
                  <p className="font-dirooz text-[18px] text-first "> دوره های مشابه </p>
                  
                </div>
              {/* </div> */}
            </div>
            <hr className="w-95/100 h-[1px] mx-auto  bg-slate-400 border-0" />
            <div className=" my-2 ">
           

              <div className="border border-gray-400 w-full h-16 rounded-lg p-1 mb-2 flex items-center "> 
                
                <div className="w-18 bg-green-200 max-h-15 my-auto border border-gray-200 rounded-lg overflow-hidden">
                  <img src={imgBgCourse} alt="image" />
                </div>
              <p className=" font-sans text-[12px] overflow-hidden mr-1  w-75/100 pr-1 h-13 content-center"> آموزش کاربردی RestFul API در لاراول </p>
              </div>
              <div className="border border-gray-400 w-full h-16 rounded-lg p-1 mb-2 flex items-center "> 
                
                <div className="w-18 bg-green-200 max-h-15 my-auto border border-gray-200 rounded-lg overflow-hidden">
                  <img src={imgBgCourse} alt="image" />
                </div>
              <p className=" font-sans text-[12px] overflow-hidden mr-1  w-75/100 pr-1 h-13 content-center"> آموزش کاربردی RestFul API در لاراول </p>
              </div>
              <div className="border border-gray-400 w-full h-16 rounded-lg p-1 mb-2 flex items-center "> 
                
                <div className="w-18 bg-green-200 max-h-15 my-auto border border-gray-200 rounded-lg overflow-hidden">
                  <img src={imgBgCourse} alt="image" />
                </div>
              <p className=" font-sans text-[12px] overflow-hidden mr-1  w-75/100 pr-1 h-13 content-center"> آموزش کاربردی RestFul API در لاراول </p>
              </div>
              <div className="border border-gray-400 w-full h-16 rounded-lg p-1 mb-2 flex items-center "> 
                
                <div className="w-18 bg-green-200 max-h-15 my-auto border border-gray-200 rounded-lg overflow-hidden">
                  <img src={imgBgCourse} alt="image" />
                </div>
              <p className=" font-sans text-[12px] overflow-hidden mr-1  w-75/100 pr-1 h-13 content-center"> آموزش کاربردی RestFul API در لاراول </p>
              </div>
              <div className="border border-gray-400 w-full h-16 rounded-lg p-1 mb-2 flex items-center "> 
                
                <div className="w-18 bg-green-200 max-h-15 my-auto border border-gray-200 rounded-lg overflow-hidden">
                  <img src={imgBgCourse} alt="image" />
                </div>
              <p className=" font-sans text-[12px] overflow-hidden mr-1  w-75/100 pr-1 h-13 content-center"> آموزش کاربردی RestFul API در لاراول </p>
              </div>
              <div className="border border-gray-400 w-full h-16 rounded-lg p-1 mb-2 flex items-center "> 
                
                <div className="w-18 bg-green-200 max-h-15 my-auto border border-gray-200 rounded-lg overflow-hidden">
                  <img src={imgBgCourse} alt="image" />
                </div>
              <p className=" font-sans text-[12px] overflow-hidden mr-1  w-75/100 pr-1 h-13 content-center"> آموزش کاربردی RestFul API در لاراول </p>
              </div>
            </div>  

            </div>

          {/* </div> */}
        
        
        </div>
       </div>
      </div>
      <Footer/>
      
    </>
  );
}

export default Courses_Info;
