import React from 'react'

function GridLayout() {
  return (
    <>
          <div style={{direction:"rtl" }} className="grid grid-cols-12 gap-x-4 z-10 h-100 text-center  absolute top-0  opacity-20  mx-auto ">
        {/* <div className=" bg-[#00FFFF] w-[76px] ">1</div> */}
        <div className="content-center bg-[#51E5E5] w-[76px] ">1</div>
        <div className="content-center text-black bg-[#51E5E5] w-[76px] h-full ">2</div>
        <div className="content-center text-black bg-[#51E5E5] w-[76px] ">3</div>
        <div className="content-center text-black bg-[#51E5E5] w-[76px] ">4</div>
        <div className="content-center text-black bg-[#51E5E5] w-[76px] ">5</div>
        <div className="content-center text-black bg-[#51E5E5] w-[76px] ">6</div>
        <div className="content-center text-black bg-[#51E5E5] w-[76px] ">7</div>
        <div className="content-center text-black bg-[#51E5E5] w-[76px] ">8</div>
        <div className="content-center text-black bg-[#51E5E5] w-[76px] ">9</div>
        <div className="content-center text-black bg-[#51E5E5] w-[76px] ">10</div>
        <div className="content-center text-black bg-[#51E5E5] w-[76px] ">11</div>
        <div className="content-center text-black bg-[#51E5E5] w-[76px] ">12</div>
      </div>
      
    </>
  )
}

export default GridLayout