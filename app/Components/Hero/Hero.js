import React from "react";
import Image from "next/image";

import { FaApple } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="px-6 pt-10 md:pt-0 flex flex-col md:w-screen border-l-8 ">
      <div className="text-white bg-black flex-col flex md:flex-row md:p-10 md:justify-between md:max-w-[900px]">
        <div className="p-4">
          <div className="flex flex-row gap-5 ">
            <FaApple style={{ width: "27px", height: "27px" }} />
            <h1 className="text-lg">iPhone 14 Series</h1>
          </div>
          <div className="pt-4">
            <h1 className="text-4xl leading-[3rem] font-bold max-w-[14rem]">
              Up to 10% off Voucher
            </h1>
            <div className="flex items-center gap-1">
              <button className="pt-4 underline underline-offset-[8px] text-lg decoration-[0.25px]">
                <a href="#">Shop Now</a>
              </button>
              <IoIosArrowRoundForward
                style={{ width: "23px", height: "23px" }}
              />
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={"/Assets/Images/heroimage.png"}
            width={300}
            height={300}
            alt="Hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
