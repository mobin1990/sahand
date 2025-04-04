import React from "react";
import SectionHeader from "../../common/sectionHeader";
import SectionButton from "../../common/SectionButton";
import CourseTemplate from "../Courses/CourseTemplate";
import Carousal from "../Carousal";
import OurServices from "../OurServices/OurServices";
import StatAcademy from "../StatisricsWebsite/statAcademy";
import GroupingCourses from "../Grouping/GroupingCourses";

function Content() {
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
      <div className="mt-20 ">
        {/* //todo نمایش اخبار */}
        <SectionHeader text="اخرین اخبار" />
        {/* <div className='absolute w-full top-0 mt-8 '> //! برای قراردادن محتوا در ابتدای تگ والد */}
        <div className=" mx-3 -mt-[215px] mb-5 ">
          <Carousal />
        </div>

        {/* </div> */}

        <SectionButton text="مشاهده همه" />

        {/* //todo نمایش جدیدترین دوره ها */}
        <SectionHeader text="جدیدترین دوره ها" />
        <div className=" grid grid-cols-4 gap-4 mx-3 -mt-[210px] mb-7 ">
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
        <SectionButton text="مشاهده همه" />

        {/* //todo خدمات ما*/}
        <SectionHeader text="خدمات ما " />
        {/* <div className='absolute w-full top-0 mt-8 '> //! برای قراردادن محتوا در ابتدای تگ والد */}
        <div className=" mx-3 -mt-[215px] mb-5 ">
          <OurServices />
        </div>
        {/* // todo نمایش امار سایت */}
        <div className="my-30 p-2">
          {" "}
          <StatAcademy />{" "}
        </div>

        {/* // todo دسته بندی */}
        <div className="my-24 ">
          {" "}
          <GroupingCourses />{" "}
        </div>
      </div>
    </>
  );
}

export default Content;
