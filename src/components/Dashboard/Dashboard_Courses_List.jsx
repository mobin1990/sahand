import React from "react";
import Dashboard_right_box from "./Dashboard_right_box";
import DashboardBreadcrumbs from "./DashboardBreadcrumbs";
import Search_Input from "../../common/Search_Input";
import Banner from "../../assets/img/Banner.png";
import DashboardTableCourse from "./DashboardTableCourse";
import FilteredCourse from "../../common/FilteredCourse";

function Dashboard_Courses_List() {
  const coursesList = [
    {
      id: 1,
      title: " اموزش پیشرفته وردپرس  ",
      teacher: " موذن زاده ",
      dateOfStart: "1404/01/23",
      cost: " رایگان ",
      status: " تکیل شده",
    },
    {
      id: 2,
      title: " اموزش پیشرفته وردپرس  ",
      teacher: " موذن زاده ",
      dateOfStart: "1404/01/23",
      cost: " رایگان ",
      status: "در حال انجام",
    },
    {
      id: 3,
      title: " اموزش پیشرفته وردپرس  ",
      teacher: " موذن زاده ",
      dateOfStart: "1404/01/23",
      cost: " 20000000 تومان ",
      status: "در حال انجام",
    },
    {
      id: 8,
      title: " اموزش پیشرفته وردپرس  ",
      teacher: " بحرالعلوم",
      dateOfStart:"1404/01/23",
      cost: " رایگان ",
      status:" تکمیل شده "
    },
  ];
  return (
    <>
      <div className="w-[1088px] mx-auto mt-10">
        <div className="grid grid-cols-12 gap-4 shadow-2xl border border-gray-300">
          {/* //! بخش سمت راست  */}
          <div className="col-span-3 py-2 relative min-h-[calc(100vh-50px)] ">
            <Dashboard_right_box />
          </div>
           {/* //! بخش سمت چپ  */}
          <div className="col-span-9 h-full ">
            <DashboardBreadcrumbs />
             {/* //! بخش سمت جستجوی دوره  */}
            <div className="grid grid-cols-10 gap-6">
              <div className="col-span-5  mb-0 ">
                
                <div className="flex h-11">
                  <Search_Input />
                </div>
              </div>
              <div className="col-span-10  ">
                {/* //! بخش فیلتر کردن دوره ها */}
                <FilteredCourse/>

                {/* //! جدول مربوط به لیست دوره ها */}
                <div className="overflow-x-auto">
                  <table className={`table table-zebra bg-white shadow-xl px-1 grid gap-2 grid-cols-[75px_auto_auto_110px_110px_120px_50px] items-center text-center text-sm  text-gray-800 p-3 border-b`}>
                    {/* head */}
                    <thead>
                      <tr>
                        <th className=" px-1.5"></th>
                        <th className="border-l-1 border-l-gray-300 px-1.5 w-[85px]">
                          عکس دوره
                        </th>
                        <th className="border-l-1 border-l-gray-300 px-1.5 ">
                          نام دوره
                        </th>
                        <th className="border-l-1 border-l-gray-300 px-1.5 ">
                          نام استاد
                        </th>
                        <th className="border-l-1 border-l-gray-300 px-1.5 ">
                          تاریخ شروع
                        </th>
                        <th className="border-l-1 border-l-gray-300 px-1.5 ">
                          وضعیت
                        </th>
                        <th className="border-l-1 border-l-gray-300 px-1.5 ">
                          قیمت
                        </th>
                        <th className="border-l-1 border-l-gray-300 px-1.5 ">
                          حذف
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {coursesList.map((item, index) => {
                        return (
                          <DashboardTableCourse key={item.id} title={item.title} teacher={item.teacher} dateOfStart={item.dateOfStart}
                            cost={item.cost} status={item.status} index={index}
                          />
                        );
                      })}
                    </tbody>

                  </table>
                    {/* //! بخش مروط به pagination */}
                    <div className="join flex justify-center my-2">
                        <input
                            className="join-item btn outline-amber-600 outline-1 btn-square "
                            type="radio"
                            name="options"
                            aria-label="1"
                            checked="checked" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
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

export default Dashboard_Courses_List;
