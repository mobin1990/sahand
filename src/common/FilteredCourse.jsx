import React from "react";

function FilteredCourse() {
  return (
    <>
      <div className="flex justify-between items-center font-dirooz mb-2 p-2 rounded-xl border border-gray-300 shadow-xl">
        <div className="w-auto "> مرتب سازی براساس : </div>
        <div className="ml-auto mr-2">
          <select
            defaultValue="Pick a date"
            className="select select-warning w-auto mr-2"
            style={{ direction: "ltr" }}
          >
            <option disabled={true}> تاریخ انتشار </option>
            <option> جدیدترین </option>
            <option>قدیمی ترین</option>
          </select>

          <select
            defaultValue="Pick a cost"
            className="select select-warning w-auto mr-2"
            style={{ direction: "ltr" }}
          >
            <option disabled={true}> قیمت دوره </option>
            <option> گرانترین </option>
            <option>ارزان ترین</option>
          </select>

          <select
            defaultValue="Pick a category"
            className="select select-warning w-auto mr-2"
            style={{ direction: "ltr" }}
          >
            <option disabled={true}> دسته بندی</option>
            <option> React </option>
            <option> c++ </option>
            <option> Vue </option>
          </select>
        </div>
        <button className="btn px-8 bg-orange-400/70 rounded-lg">
          {" "}
          اعمال فیلتر
        </button>
      </div>
    </>
  );
}

export default FilteredCourse;
