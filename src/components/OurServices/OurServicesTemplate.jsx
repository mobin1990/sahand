import React from "react";
import ax1 from "../../assets/img/cartImage.png";

export default function OurServicesTemplate({ title, desc, image }) {
  return (
    <>
      {/* <div className="card  border border-gray-900 max-w-70 h-96 overflow-hidden  shadow-sm">
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
          <p className="h-22.5 overflow-hidden font-yekan bg-red-200">{desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-block">مشاهده بر</button>
          </div>
        </div>
      </div> */}
      <div className="card card-side bg-slate-200 w-100 shadow-sm">
        <figure className="object-center object-cover w-45">
          <img
            //   src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            src={ax1}
            alt="image"
          />
        </figure>
        <div className="card-body p-4 overflow-hidden ">
          <h2 className="card-title w-full h-7 text-first ">{title}</h2>
          <p className=" h-40 bg-gray-100 rounded-xl text-third">{desc}</p>
          {/* <div className="card-actions justify-end">
      <button className="btn btn-primary btn-block">Watch</button>
    </div> */}
        </div>
      </div>
    </>
  );
}
