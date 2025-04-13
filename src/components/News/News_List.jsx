import React from "react";
import CourseTemplate from "../Courses/CourseTemplate";

import NewsTemplate from "./NewsTemplate";
import { style } from "framer-motion/client";

function News_List() {
  const NewsInfo = [
    {
      id: 1,
      title: " اموزش پیشرفته وردپرس  ",
      desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
     
    },
    {
      id: 2,
      title: " اموزش پیشرفته وردپرس  ",
      desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
     
    },
    {
      id: 3,
      title: " اموزش پیشرفته وردپرس  ",
      desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
     
    },
    {
      id: 4,
      title: " اموزش پیشرفته وردپرس  ",
      desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
     
    },
    // { id: 4, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    // { id: 5, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    // { id: 6, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    // { id: 7, title: " اموزش پیشرفته وردپرس  ", desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.", teacher: " موذن زاده ", time: " 10:24:26 ", cost: " رایگان " },
    {
      id: 8,
      title: " اموزش پیشرفته وردپرس  ",
      desc: "در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.",
      
     
    },
  ];
  return (
    <>
      {/* <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div> */}

      <div className="bg-white w-[1088px] rounded-2xl py-5 px-1">
        {/* //todo نمایش جدیدترین دوره ها */}
        <div className=" grid grid-cols-4 gap-4 mx-3 mb-7 ">
          {NewsInfo.map((item,index) => {
            return (
             
              <NewsTemplate
                key={item.id}
                title={item.title}
                desc={item.desc}
                reverse={index %2 ===0} //!  برای تفییر ترتیب نمایش ایتم ها در عناصر زوج
                inSpecial={(index+1) % 5 ===0} //! عناصر پنجم، دهم و ... از المانها استایل متفاوتی داشته باشن
                
                

              />
            );
          })}
        </div>
        
      </div>
    </>
  );
}

export default News_List;
