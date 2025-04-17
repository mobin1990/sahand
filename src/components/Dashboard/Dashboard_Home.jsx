import React from "react";
import styles from "./Dashboard.module.css";
import banner from "../../assets/img/Banner.png";
import bg_Dashborad2 from "../../assets/img/bg-dashbord2.svg";
import { Input, Tooltip } from "@material-tailwind/react";
import { FaEdit } from "react-icons/fa";
import Dashboard_right_box from "./Dashboard_right_box";
import { IoHome } from "react-icons/io5";
import { PiLessThan } from "react-icons/pi";
import CourseTemplate from "../Courses/CourseTemplate";
import { FaListCheck } from "react-icons/fa6";
import DashboardBreadcrumbs from "./DashboardBreadcrumbs";

function Dashboard_Home() {
  const lastCourse = [
    {
      id: 1,
      title: " اموزش پیشرفته وردپرس  ",
      desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
      teacher: " موذن زاده ",
      time: " 10:24:26 ",
      cost: " رایگان ",
    },
    // {
    //   id: 2,
    //   title: " اموزش پیشرفته وردپرس  ",
    //   desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
    //   teacher: " موذن زاده ",
    //   time: " 10:24:26 ",
    //   cost: " رایگان ",
    // },
    // {
    //   id: 3,
    //   title: " اموزش پیشرفته وردپرس  ",
    //   desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
    //   teacher: " موذن زاده ",
    //   time: " 10:24:26 ",
    //   cost: " رایگان ",
    // },
    // { id: 4, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    // { id: 5, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    // { id: 6, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    // { id: 7, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    // {
    //   id: 8,
    //   title: " اموزش پیشرفته وردپرس  ",
    //   desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
    //   teacher: " موذن زاده ",
    //   time: " 10:24:26 ",
    //   cost: " رایگان ",
    // },
  ];
  return (
    <>
      {/* باکس سمت راست */}
      {/* <div className=" w-[275px] h-100 bg-red-500">
           
         
          </div> */}
      <div className="w-[1088px] mx-auto mt-10 min-h-[calc(100vh-50px)]">
        <div className="grid grid-cols-12 gap-4 shadow-2xl border border-gray-300">
          {/* //! بخش سمت راست  */}
          <div className="col-span-3 py-2 relative min-h-[calc(100vh-50px)] ">
            <Dashboard_right_box />
          </div>

          {/* //! بخش سمت چپ  */}
          <div className="col-span-9 h-full ">
            <DashboardBreadcrumbs/>
           

            {/* //! باکس مربوط به اطلاعات کابر */}
            <div className="flex flex-col h-[calc(100%-70px)] items-stretch justify-between">
              <div className="mb-2 h-[40%] relative ">
                <img src={bg_Dashborad2} alt="bg_Dashborad2" />
                <div className=" flex flex-col  items-center absolute top-1/2 -translate-y-4/10 right-1/2  translate-x-1/2   ">
                  <div className="avatar  mb-3">
                    <div className="w-30 rounded-full ring-2 ring-offset-2 ring-first  ">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <h1 className="font-vazir text-[13px] shadow-2xl border border-gray-300 bg-dashboardBgFirst px-6 rounded-3xl  text-black font-bold py-[6px]">
                    <span className="text-[17px] text-first"> مبین یوسفی </span>
                    عزیز <span className="text-[17px] text-first"> استاد </span>
                    محترم، خیلی خوش اومدی
                  </h1>
                </div>
              </div>
              <div className="  h-[55%] ">
                <div className="grid grid-cols-12 gap-4">
                  {/* //! اخرین دوره کاربر */}
                  <div className=" col-span-8 py-1 flex items-center ">
                    <div className={`${styles.userCoursesCount}`}>
                      
                      اخرین دوره شما
                    </div>
                    <div className="flex bg-dashboardBgFirst text-first py-2 px-2 text-[14px] font-dirooz mx-1 rounded-xl">
                      <div className="w-30 h-20">
                        <img
                          className="w-full h-full rounded-2xl"
                          src={banner}
                          alt="bg-course"
                        />
                      </div>
                      <div
                        key={lastCourse[0].id}
                        className=" flex flex-col p-2 text-right justify-center"
                      >
                        <h1 className="text-first font-sans font-bold text-[14px] ">
                          
                          {lastCourse[0].title}
                        </h1>
                        <h1 className="text-first font-sans font-bold mt-2 text-[11px]">
                          
                          {lastCourse[0].teacher}
                        </h1>
                      </div>
                    </div>
                  </div>
                  {/* //! تعداد دوره های کابر */}
                  <div className=" col-span-4 py-1 flex items-center ">
                    <div className={`${styles.userCoursesCount}`}>
                      
                      تعداد دوره های شما
                    </div>
                    <div className="flex bg-dashboardBgFirst text-first py-2 px-2 text-[14px] font-dirooz mx-1 rounded-xl">
                      <div className=" flex flex-col p-2 text-right justify-center">
                        <div className="px-3 py-2 font-sans font-bold text-[14px] bg-dashboardBgSecound rounded-lg">
                          
                          3
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* //! نام کاربری */}
                  <div className=" col-span-4 flex flex-col">
                    <div className="my-2">
                      <label className="label relative w-9/10">
                        <span className={`${styles.inputBoxFloat}`}>
                          
                          نام کاربری:
                        </span>
                        <input
                          type="text"
                          placeholder="mail@site.com"
                          className="input input-md font-sans border-0 focus:outline-0 py-6 text-left rounded-2xl shadow-xl "
                          value="mobin.real69"
                        />
                      </label>
                    </div>

                    {/* //! ایمیل کاربر */}
                    <div className=" mt-4 ">
                      <label className="label relative w-9/10">
                        <span className={`${styles.inputBoxFloat}`}>
                          
                          ایمیل:
                        </span>
                        <input
                          type="text"
                          placeholder="mail@site.com"
                          className="input input-md border-0 font-sans focus:outline-0 py-6 text-left rounded-2xl shadow-xl "
                          value="mobin.real69@gmail.com"
                        />
                      </label>
                    </div>
                  </div>
                  {/* //! ویرایش اطلاعات */}
                  <div className=" col-span-4 my-auto -translate-y-1/3 mb-3  ">
                    <div className="flex bg-dashboardBgSecound justify-center py-1.5 rounded-2xl w-8/10">
                      <a href="#" className="flex items-center py-1.5 ">
                        <FaEdit className=" text-2xl text-first ml-2 " />
                        <span className="text-first text-[15px] font-sans font-bold "> ویرایش اطلاعات </span>
                      </a>
                    </div>
                  </div>

                  {/* //! شماره تلفن */}
                  <div className=" col-span-4 flex flex-col">
                    <div className="my-2">
                      <label
                        className="label relative w-9/10 "
                        style={{ direction: "ltr" }}
                      >
                        <span className={`${styles.inputBoxFloat}`}>
                          
                          شماره تلفن :
                        </span>
                        <input
                          type="text"
                          placeholder="شماره تلفن"
                          className="input input-md font-sans border-0 focus:outline-0 py-6 text-left rounded-2xl shadow-xl "
                          value="0936--1227"
                        />
                      </label>
                    </div>

                    {/* //! کدملی */}
                    <div className=" mt-4 ">
                      <label
                        className="label relative w-9/10 "
                        style={{ direction: "ltr" }}
                      >
                        <span className={`${styles.inputBoxFloat}`}>
                          
                          کدملی:
                        </span>
                        <input
                          type="text"
                          placeholder="کدملی"
                          className="input input-md font-sans border-0 focus:outline-0 py-6  rounded-2xl shadow-xl "
                          value="208---9997"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard_Home;
