import React from "react";
import Timer from "../Timer/Timer";
import Productcard from "../ProductCard/Productcard";

const TodaysSection = () => {
  return (
    <>
      <div className="md:p-20 md:pb-8">
        <div className="p-6 pt-[8rem]">
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
        <div className="flex flex-col  items-center justify-center">
          <div className="p-6 pt-[1px] md:p-5 md:pt-[4px] flex flex-col md:flex-row gap-4">
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </div>
          <div className="p-6">
            <button className="bg-primary hover:bg-lightprimary text-white p-4 px-8 rounded-md">
              View All Products
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TodaysSection;
