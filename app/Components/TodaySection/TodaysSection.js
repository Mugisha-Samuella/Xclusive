import React from "react";
import Timer from "../Timer/Timer";

const TodaysSection = () => {
  return (
    <div className="p-6 pt-[8rem] md:p-20">
      <div className=" items-center  flex flex-row gap-4">
        <div className="h-10 w-5 bg-red-500  rounded-[3px]"></div>
        <p className="text-red-500 text-[1.15rem]">Today's</p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="pt-4 text-left">
          <h3 className="font-semibold text-[2.10rem]">Flash Sales</h3>
        </div>
        <Timer />
      </div>
    </div>
  );
};

export default TodaysSection;
