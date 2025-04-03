import React from "react";
import ax1 from "../../assets/img/cartImage.png";

export default function NewsTemplate({ title, desc, image }) {
  return (
    <>
      {/* <div className="card bg-base-100 border border-gray-400 max-w-70 h-96  shadow-sm"> */}
      <div className="card  border border-gray-900 max-w-70 h-96 overflow-hidden  shadow-sm">
        <figure>
          <img
            className="object-center object-cover "
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            // src={image}
            // src={ax1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-4 w-[276px] h-[100px]">
          <h2 className="card-title max-h-9 overflow-hidden font-vazir text-xl bg-red-200 py-1">
            {title}
          </h2>
          <p className="h-22.5 overflow-hidden font-yekan bg-red-200">
            {desc}
          </p>

          {/* متن این خبر خیبی غیرواقعیه
    متن این خبر خیبی غیرواقعیه
    متن این خبر خیبی غیرواقعیه
    متن این خبر خیبی غیرواقعیه
    متن این خبر خیبی غیرواقع */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-block">مشاهده بر</button>
          </div>
        </div>
      </div>
    </>
  );
}
