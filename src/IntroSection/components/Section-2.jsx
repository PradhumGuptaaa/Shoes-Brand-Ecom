import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAward, FaChartLine, FaTag } from "react-icons/fa";

const Section2 = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-red-200 relative">
      <div className="absolute  w-full h-10 bottom-0 bg-gradient-to-b from-red-200 via-red-100 to-white"></div>
      <div className="flex flex-col md:flex-row items-center  max-w-5xl p-8">
        {/* Shoe Image Section */}
        <div className=" relative w-full ">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 rounded-full w-60 h-60"></div> */}
          <div className=" absolute  w-[35vw] mt-[-60%] ml-[-70%] pointer-events-none"> <video autoPlay muted loop src="./bg.webm"></video></div>
        </div>

        {/* Text Section */}
        <div className="ml-8 text-gray-800">
          <h2 className="text-5xl font-bold">
            We Have The Best Feature In{" "}
            <span className=" text-5xl" style={{color:"#ff266e"}}>Shoes.</span>
          </h2>

          <div className="mt-[10%] space-y-6">
            <FeatureItem
              icon={<FaAward className="text-blue-500 text-xl" />}
              title="Best Quality Shoes"
              borderColor="border-blue-500"
            />
            <FeatureItem
              icon={<FaChartLine className="text-red-500 text-xl" />}
              title="Long Lasting Shoes"
              borderColor="border-red-500"
            />
            <FeatureItem
              icon={<FaTag className="text-orange-500 text-xl" />}
              title="Best Giving Price"
              borderColor="border-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const FeatureItem = ({ icon, title, borderColor }) => (
  <div className="flex items-center space-x-4">
    {/* Icon with Unique Border */}
    <div
      className="p-3 border-2 rounded-lg ${borderColor} flex items-center justify-center w-12 h-12" >
      {icon}
    </div>
    {/* Text */}
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
);

export default Section2;