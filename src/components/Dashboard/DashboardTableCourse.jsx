import React from "react";
import Banner from "../../assets/img/Banner.png";
import { ImBin } from "react-icons/im";

function DashboardTableCourse({
  title,
  teacher,
  dateOfStart,
  status,
  cost,
  id,
  index
}) {
  return (
    <>
      <tr
        key={id}
        className={`${index % 2 === 0 ? "bg-orange-200" : "bg-black"} `}
      >
        <th className=" px-1.5 ">{index + 1}</th>
        <td className=" px-0 py-1.5 w-[85px] border-l-1 border-l-gray-300">
          <div className="mx-auto px-0  w-[75px] overflow-hidden  rounded-md">
            <img
              src={Banner}
              alt="course"
              className="w-full object-cover object-center"
            />
          </div>
        </td>
        <td className="border-l-1 border-l-gray-300 px-1.5 py-1.5 ">{title}</td>
        <td className="border-l-1 border-l-gray-300 px-1.5 py-1.5 ">
          {teacher}
        </td>
        <td className="border-l-1 border-l-gray-300 px-1.5 py-1.5 ">
          {dateOfStart}
        </td>
        <td className="border-l-1 border-l-gray-300 px-1.5 py-1.5 ">
          {status}
        </td>
        <td className="border-l-1 border-l-gray-300 px-1.5 py-1.5 ">{cost}</td>
        <td className="border-l-1 border-l-gray-300 px-1.5 py-1.5 text-2xl text-orange-700 "><ImBin className="mx-auto" /></td>
      </tr>
    </>
  );
}

export default DashboardTableCourse;
