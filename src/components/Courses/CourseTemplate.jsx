import React from 'react'
import cartImage from '../../assets/img/cartImage.png'
import { IoTime } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
function CourseTemplate({title,desc,teacher,time,cost}) {
  return (
    <div className='relative rounded-xl p-2 z-2'>
        <div className='mx-auto overflow-hidden w-[95%] object-center rounded-2xl bg-red-800'>
          <img src={cartImage}  alt="cart-img" />
        </div>
        <h1 className='my-3 font-sans text-[16px] text-first '> {title} </h1>
        <p className='font-yekan text-justify px-1 mb-3 text-[14px] text-third '> {desc} </p>
        <span className='my-4 flex font-yekan text-[13px] items-center text-first'><GoDotFill/><span> استاد {teacher} </span></span>
        <hr/>
        <div className='flex justify-between mt-5 mb-3'>
            <div className='flex items-center text-[14px] bg-amber-300 rounded-2xl px-2'><IoTime/> <span className='pr-1'>{time}</span></div>
            <button className="cursor-pointer buttonStyle "> {cost} </button>
        </div>
    </div>
  )
}

export default CourseTemplate