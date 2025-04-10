import React from "react";
import styles from "./Course.module.css";
import Search_Input from "../../common/Search_Input";
import CourseTemplate from "./CourseTemplate";

function Courses_List() {
  const courseInfo = [
    {
      id: 1,
      title: " اموزش پیشرفته وردپرس  ",
      desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
      teacher: " موذن زاده ",
      time: " 10:24:26 ",
      cost: " رایگان ",
    },
    {
      id: 2,
      title: " اموزش پیشرفته وردپرس  ",
      desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
      teacher: " موذن زاده ",
      time: " 10:24:26 ",
      cost: " رایگان ",
    },
    {
      id: 3,
      title: " اموزش پیشرفته وردپرس  ",
      desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
      teacher: " موذن زاده ",
      time: " 10:24:26 ",
      cost: " رایگان ",
    },
    // { id: 4, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    // { id: 5, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    // { id: 6, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    // { id: 7, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    {
      id: 8,
      title: " اموزش پیشرفته وردپرس  ",
      desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
      teacher: " موذن زاده ",
      time: " 10:24:26 ",
      cost: " رایگان ",
    },
  ];
  return (
    <>
      <div className="w-[1088px] mx-auto">
        <p className="font-dirooz text-first text-xl"> دوره ها </p>
        <div className="flex h-11 mt-2 bg-red-400 w-6/10">
          <Search_Input Type={"text"} placeHolder={"جستجوی دوره ..."} />
        </div>
        <div className="grid grid-cols-10 gap-4">
          {/* //! باکس سمت راست مربوط به بخش فیلتر دوره */}
          <div className=" col-span-3">
            <div className="shadow-2xl bg-white text-first px-3 py-6 rounded-2xl " style={{direction:"ltr"}}> 
              <p className=" text-center font-dirooz text-[18px]" > فیلتر </p>
              {/* <div className=" flex justify-between bg-white shadow-2xl p-2 my-2 rounded-xl border text-first border-gray-300 ">  */}
              <div className={` ${styles.courses_filter_style} `}  > 
                
                <input type="checkbox" className="toggle toggle-sm toggle-primary " />
                <span> تکمیل شده  </span>
              </div>
              <div className={` ${styles.courses_filter_style} `}  > 
                <select defaultValue="Pick a sort" className="select border-0 shadow-none select-info w-6/10">
                  <option disabled={true}>مرتب سازی براساس</option>
                  <option>همه</option>
                  <option>پربازدیدترین ها</option>
                  <option>جدیدترین ها</option>
                  <option>محبوبترین ها</option>
                </select>
              <span>  مرتب سازی براساس </span>
              </div>
              <div className={` ${styles.courses_filter_style} `}  > 
                <select defaultValue="Pick a course" className="select border-0 shadow-none select-info">
                  <option disabled={true}>دوره مدنظر شما</option>
                  <option>همه</option>
                  <option>React</option>
                  <option>Vue</option>
                  <option>Angular</option>
                </select>
              <span> انتخاب دوره </span>
              </div>

              <div className={` ${styles.courses_filter_style} `}  > 
                
                <div className="">
                  <select defaultValue="Pick a date" className="select border-0 shadow-none select-info " >
                    <option disabled={true}> بازه تاریخی مدنظر شما </option>
                    <option>همه</option>
                    <option>هفته اخیر</option>
                    <option>یکماه اخیر</option>
                    <option>شش ماه اخیر</option>
                    <option>یکسال اخیر</option>
                  </select>
                </div>
                <span> بازه تاریخی</span>
              </div>
              <div className={` ${styles.courses_filter_style} `}  > 
                <form className="filter">
                  <input className="btn btn-square " type="reset" value="×"/>
                  <input className="btn" style={{outlineOffset:0, outline:0}} type="radio" name="frameworks" aria-label="همه "/>
                  <input className="btn" style={{outlineOffset:0, outline:0}} type="radio" name="frameworks" aria-label="پولی"/>
                  <input className="btn" style={{outlineOffset:0, outline:0}} type="radio" name="frameworks" aria-label="رایگان"/>
                </form>
                <span> هزینه  </span>
              </div>
              <div className={` ${styles.courses_filter_style} `} style={{flexDirection:"column"}} > 
                <span style={{ marginLeft:"auto"}}> بازه قیمتی دوره ها </span>
                <p style={{ margin:"12px auto 12px auto"}}> از صفر تا <span style={{backgroundColor:"transparent", fontWeight:"bold"}}> یک میلیون </span> تومان</p>
              <input type="range" min={0} max="100" value="75" className="range range-sm range-primary mb-2 "  />
              </div>
            </div>
          </div>




          {/* //! باکس سمت چپ مربوط به بخش لیست دوره */}
          <div  className="bg-white col-span-7 rounded-2xl py-5 px-1">
             {/* //todo نمایش جدیدترین دوره ها */}
              <div className=" grid grid-cols-3 gap-4 mx-3 mb-7 ">
                {courseInfo.map((item) => {
                  return (
                    <CourseTemplate
                      key={item.id}
                      title={item.title}
                      desc={item.desc}
                      cost={item.cost}
                      teacher={item.teacher}
                      time={item.time}
                    />
                  );
                })}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses_List;
