import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="p-6 pt-[8rem] md:p-20 ">
      <div className=" items-center  flex flex-row gap-4">
        <div className="h-10 w-5 bg-red-500  rounded-[3px]"></div>
        <p className="text-red-500 text-[1.10rem]">Categories</p>
      </div>
      <div className="pt-4 text-left">
        <h3 className="font-semibold text-[1.87rem]">Browse By Category</h3>
      </div>
      <div className=" flex flex-row overflow-x-scroll items-center justify-between gap-2 md:overflow-x-hidden pt-10">
        <button className="border-gray-300 rounded-md border-[0.5px] flex flex-col  px-14 py-7 justify-center items-center md:hover:bg-red-500 ">
          <Image src={"/Assets/Icons/Phone.svg"} width={90} height={90} alt="Phone icon" />
          <h3 className="pt-4">Phones</h3>
        </button>
        <button className="border-gray-300 rounded-md border-[0.5px] flex flex-col  px-14 py-7 justify-center items-center">
          <Image src={"/Assets/Icons/Computer.svg"} width={90} height={90} alt="Computer icon" />
          <h3>Laptops</h3>
        </button>
        <button className="border-gray-300 rounded-md border-[0.5px] flex flex-col px-14 py-7 justify-center items-center">
          <Image src={"/Assets/Icons/SmartWatch.png"} width={90} height={90} alt="Smartwatch icon" />
          <h3>Watches</h3>
        </button>
        <button className="border-gray-300 rounded-md border-[0.5px] flex flex-col  px-14 py-7 justify-center items-center">
          <Image src={"/Assets/Icons/Camera.svg"} width={90} height={90} alt="Camera icon" />
          <h3>Camera</h3>
        </button>
        <button className="border-gray-300 rounded-md border-[0.5px] flex flex-col  px-14 py-7 justify-center items-center">
          <Image src={"/Assets/Icons/Headphone.svg"} width={90} height={90} alt="Headphone icon" />
          <h3>Headphones</h3>
        </button>
      </div>
    </div>
  );
};

export default Categories;
