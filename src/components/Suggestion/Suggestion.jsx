import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import map from "../../assets/img/map.png";
import NavBar from "../../common/NavBar";
import Footer from "../Footer/Footer";

function Suggestion() {
  return (
    <>
      <NavBar />
      <div
        className="w-[1088px] mx-auto font-dirooz mt-10"
        style={{ direction: "" }}
      >
        {/* //todo انتقاد و پیشنهاد */}

        <h1 className=" text-2xl text-center"> انتقاد و پیشنهاد </h1>
        <div className="w-100 h-90  bg-white mx-auto rounded-xl my-3 mb-10">
          <label className="input validator my-2 rounded-xl w-8/10 -translate-x-45/100">
            <FiUserCheck className="text-first" />
            <input
              className="font-dirooz items-center text-first "
              type="input"
              required
              placeholder="نام کاربری"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minlength="3"
              maxlength="30"
              title="Only letters, numbers or dash"
            />
          </label>

          <label className="input validator my-2 rounded-2xl w-8/10 translate-x-2/10">
            <MdOutlineMarkEmailRead className="text-first" />
            <input
              type="email"
              placeholder="ایمیل"
              required
              className="text-first"
            />
          </label>
          <div className="validator-hint hidden">
            لطفا ایمیل خود را وارد کنید
          </div>

          <div className=" h-45 mt-4 text-first">
            <textarea
              placeholder="خوشحال می شیم اگر نظر، پیشنهاد و یا انتقاد خودتو با ما در میون بذاری"
              className="textarea overflow-y-auto textarea-sm w-12/10 h-full py-3 px-5 translate-x-10 "
            ></textarea>
          </div>
          <button className=" bg-first text-white px-4 py-2 w-1/2 rounded-xl mt-6 -translate-x-1/2 font-sans">
            ارسال پیام
          </button>
        </div>

        {/* //todo نمایش پژوهشگاه در نقشه */}

        <h1 className="  mt-26 mb-4 text-2xl text-center">یه سر بیا پیشمون</h1>
        <div className="w-175 h-65 rounded-[20px] overflow-hidden bg-blue-200 mx-auto ">
          <img
            src={map}
            alt="map"
            className="object-center object-cover w-full h-full"
          />
        </div>
        <p className=" text-[14px] text-center mt-4">
          ما در شهرستان ساری بلوار خزر و پژوهشگاه دکتر بحرالعلومی منتظر حضور گرم
          شما دوستان عزیزمون هستیم
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Suggestion;
