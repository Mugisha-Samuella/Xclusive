"use client"; // Add this line at the top of the file

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import ReactStars component with no SSR
const ReactStars = dynamic(() => import("react-rating-stars-component"), {
  ssr: false,
});

const ProductCard = () => {
  return (
    <div className="flex flex-col max-w-[20rem] gap-2">
          <Image
            className="rounded-lg"
            src={"/Assets/Images/heroimage.png"}
            alt="Play"
            width={370}
            height={50}
          />
        <div className="flex flex-row items-center justify-between">
          <div>
          <h1 className="text-slate-700 text-lg font-semibold">Denim Jacket</h1>
          <div className="flex flex-row justify-center items-center">
          <ReactStars count={5} size={24} activeColor={"#ffd700"} />
          <h2>	&#40;67&#41;</h2>
          </div>
          </div>
          <div className="flex flex-row gap-2">
          <h1 className="text-primary font-bold">$31.50</h1>
          <h1 className="text-slate-700 line-through">$35.00</h1>
          </div>
        </div>
        <button className="bg-black text-white p-3 rounded-lg">Add to Cart</button>
      </div>

  );
};

export default ProductCard;
