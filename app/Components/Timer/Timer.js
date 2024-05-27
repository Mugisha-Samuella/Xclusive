import React from "react";

const Timer = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-3 pt-4">
      <div className="flex flex-row justify-center items-center text-center gap-5">
        <div>
          <h3 className="text-xs" >Days</h3>
          <h1 className="text-4xl font-bold">03</h1>
        </div>
        <p className="text-red-500 text-[2.0rem] font-extrabold">:</p>
      </div>
      <div className="flex flex-row justify-center items-center text-center gap-5">
        <div>
          <h3 className="text-xs"  >Hours</h3>
          <h1 className="text-4xl font-bold">07</h1>
        </div>
        <p className="text-red-500 text-[2.0rem] font-extrabold" >:</p>
      </div>
      <div className="flex flex-row justify-center items-center text-center gap-5">
        <div>
          <h3 className="text-xs" >Minutes</h3>
          <h1 className="text-4xl font-bold">37</h1>
        </div>
        <p className="text-red-500 text-[2.0rem] font-extrabold">:</p>
      </div>
      <div className="flex flex-row justify-center items-center text-center gap-5">
        <div>
          <h3 className="text-xs" >Seconds</h3>
          <h1 className="text-4xl font-bold">30</h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
