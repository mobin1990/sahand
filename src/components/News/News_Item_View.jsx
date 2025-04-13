import React from "react";
import imgNews from "../../assets/img/Banner.png";
import ax1 from "../../assets/img/cartImage.png";

function News_Item_View() {
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
      <div className="w-[1088px] mx-auto mt-20 rounded-2xl ">
         {/* //! بخش مربوط به مشاهده متن کامل خبری که کابر از لیست اخبار کلیک کرده */}
        <div className=" mx-auto w-[100%] pr-4 text-justify leading-6 text-[16px] ">
          <div className="font-vazir text-[16px] leading-7 text-justify  pt-1 pb-3 mt-4  ">
            <div className="float-right ml-4 -mb-5 relative -translate-y-2 w-90 h-75  ">
              {/* بک‌گراند چرخیده */}
              <div className="absolute top-0 right-1 w-full h-full bg-first/45 rotate-10 rounded-3xl translate-x-8 z-0 shadow-xl"></div>

              {/* تصویر اصلی */}
              <img
                src={imgNews}
                alt="main"
                className="relative w-full h-full object-cover rounded-3xl z-10 shadow-xl"
              />
            </div>
            <p className="  font-vazir text-[23px] py-2 text-first font-bold">
              سرتیتر خبر
            </p>

            <p className="pt-2 pb-6 px-20 text-[15px] font-vazir leading-7  mr-20 bg-white shadow-2xl rounded-2xl">
              این یک متن نمایشی است که از کنار تصویر شروع می‌شود و بعد از پایان
              تصویر، به صورت کامل در زیر آن ادامه پیدا می‌کند. این سبک بیشتر
              برای مقالات و متن‌های خبری استفاده می‌شود تا فضای صفحه را به‌خوبی
              استفاده کند و جلوه‌ی جذاب‌تری داشته باشد. این سبک بیشتر برای
              مقالات و متن‌های خبری استفاده می‌شود تا فضای صفحه را به‌خوبی
              استفاده کند و جلوه‌ی جذاب‌تری داشته باشد. این سبک بیشتر برای
              مقالات و متن‌های خبری استفاده می‌شود تا فضای صفحه را به‌خوبی
              استفاده کند و جلوه‌ی جذاب‌تری داشته باشد. این سبک بیشتر برای
              مقالات و متن‌های خبری استفاده می‌شود تا فضای صفحه را به‌خوبی
              استفاده کند و جلوه‌ی جذاب‌تری داشته باشد. این سبک بیشتر برای
              مقالات و متن‌های خبری استفاده می‌شود تا فضای صفحه را به‌خوبی
              استفاده کند و جلوه‌ی جذاب‌تری داشته باشد. این سبک بیشتر برای
              مقالات و متن‌های خبری استفاده می‌شود تا فضای صفحه را به‌خوبی
              استفاده کند و جلوه‌ی جذاب‌تری داشته باشد. این سبک بیشتر برای
              مقالات و متن‌های خبری استفاده می‌شود تا فضای صفحه را به‌خوبی
              استفاده کند و جلوه‌ی جذاب‌تری داشته باشد. این سبک بیشتر برای
              مقالات و متن‌های خبری استفاده می‌شود تا فضای صفحه را به‌خوبی
              استفاده کند و جلوه‌ی جذاب‌تری داشته باشد.
            </p>
          </div>

          {/* //! بخش مربوط به اخبار مشابه */}
          <p className="py-4 px-3 font-dirooz text-3xl text-first mt-26"> اخبار مشابه </p>
          <div className="bg-white p-4 grid grid-cols-4 gap-4 rounded-2xl shadow-2xl ">
            {NewsInfo.map((item) => {
              return (
                <div className=" flex flex-col card border border-gray-200 max-w-70 h-96 py-2 overflow-hidden shadow-sm" key={item.id} >
                  <figure className="h-35 px-2  ">
                    <img
                      className="object-center object-cover rounded-lg bg-red-400 w-full h-full "
                      // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      // src={image}
                      src={ax1}
                      alt="Shoes"
                    />
                  </figure>

                  <h2 className=" card-title text-[14px] mx-1 py-1 px-4 text-first max-h-9 overflow-hidden font-vazir ">
                    {item.title}
                  </h2>
                  <p className="text-[13px] h-38 my-1 px-4 mx-auto text-first overflow-hidden font-yekan">
                    {item.desc}
                  </p>

                  <div className="card-actions justify-end order-4 my-1 w-95/100 mx-auto">
                    <button className="btn btn-primary  text-center btn-block ">
                      مشاهده متن کامل خبر
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}

export default News_Item_View;
