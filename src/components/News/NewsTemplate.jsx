import React from "react";
import ax1 from "../../assets/img/cartImage.png";

export default function NewsTemplate({title,desc,image,reverse,inSpecial,}) {
  return (
    <>
      {/* <div className="card bg-base-100 border border-gray-400 max-w-70 h-96  shadow-sm"> */}
      <div
        className={`  border overflow-hidden shadow-sm
        ${
          inSpecial
            ? "relative bg-blue-400 h-90 col-span-4 rounded-lg "
            : "flex flex-col card border-gray-900 max-w-70 h-96 py-1 "
        } `}
      >
        <figure
          className={`${reverse ? "order-1 mt-1" : "order-3"} 
          ${
            inSpecial
              ? "h-90 absolute top-0 left-0 right-0 bottom-0 px-0 "
              : "h-35 px-2  "
          }
        
      `}
        >
          <img
            className="object-center object-cover rounded-lg bg-red-400 w-full h-full "
            // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            // src={image}
            src={ax1}
            alt="Shoes"
          />
        </figure>
        
        {/* //! ------------------------- دنباله ای از هر پنج المان این استایل رو داشته باشن -------------------------- */}
        {inSpecial && (
          <div className="card-body shadow-xl-30 p-0 px-2 py-5 mt-1 bg-white/60 w-full absolute top-1/2 -translate-y-1/2 ">
            <h2 className="card-title text-[14px] mx-1 py-2 w-full justify-center  px-4 text-first max-h-9 overflow-hidden font-vazir ">
              {title}
            </h2>
            <p className=" text-[14px] my-1 px-4 py-2 mx-auto text-first overflow-hidden font-yekan justify-center ">
              {desc}
            </p>

            <div className="card-actions justify-end order-4   mx-auto ">
              <button className="btn btn-primary px-6 py-5  rounded-xl text-center btn-block ">
                مشاهده متن کامل خبر
              </button>
            </div>
          </div>
        )}

        {!inSpecial && (
          <>
            <h2
              className={`  card-title text-[14px] mx-1 py-1 px-4 text-first max-h-9 overflow-hidden font-vazir 
                 ${reverse ? "order-2" : "order-1"}`}
            >
              {title}
            </h2>
            <p
              className={` text-[13px] h-38 my-1 px-4 mx-auto text-first overflow-hidden font-yekan
                 ${reverse ? "order-3" : "order-2"}
                  `}
            >
              {desc}
            </p>

            <div
              className={`card-actions justify-end order-4 my-1 w-95/100 mx-auto  
                  
                   `}
            >
              <button className="btn btn-primary  text-center btn-block ">
                مشاهده متن کامل خبر
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
