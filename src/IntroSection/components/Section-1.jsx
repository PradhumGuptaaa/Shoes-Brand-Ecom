import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link} from "react-router-dom";
import styled from "styled-components";
import { TiLocationArrow } from "react-icons/ti";
import Button from "../../AdvertisingSection/sub_component/Button";

const Section1 = () => {
 const Menu1 = useRef('');
 const mycolor = {
  color: "#ff266e",
  transition: "transform 0.2s",
};
useEffect(() => {
 
  const tl = gsap.timeline();

  tl.fromTo(
    ".interval span",{
      y: 50, opacity: 0,
    },{ duration: 0.5, stagger: 0.2, delay:2.2, opacity:1, y:0,
      ease: "power2.out",}
   )
   tl.fromTo(
    ".tex",
    { x: -100, opacity: 0,  },
    {
      x:0,
      opacity: 1,
      duration: 1, delay:0.5, stagger: 0.2, ease: "power3.out",
    },"a"
  )
  tl.fromTo(
    ".tex2",
    { x: 500, opacity: 0, },
    {
      x:0,
      opacity: 1,
      duration: 1, delay:0.5,stagger:0.2,  ease: "power2.out",
    },"a"
  )
  tl.from(
    Menu1.current,
    { x: -100, opacity: 0, duration: 1,  delay:0.5,stagger: 0.2, ease: "power1.out", },"a"
  )

 
}, []);
 
  return (
<>
<div className="flex justify-center items-center min-h-screen relative bg-red-200" >
  <div className=" p-15 rounded-xl flex flex-col md:flex-row items-center min-w-[85%] ">
    {/* Left Section */}
    <div className="relative md:w-1/2 text-center md:text-left max-md:top-[10vh]">
      <h1 className="text-6xl font-bold ">
        <span className="tex text-black text-6xl  ">Step  into </span>
        <span className="interval px-4 "><span className="logo-special">S</span><span className="logo-special">t</span><span className="logo-special">y</span><span className="logo-special">l</span><span className="logo-special">e</span></span>  <br />
         <div className="tex"> with every stride </div>
      </h1>
      <p className="tex text-gray-800 mt-9 text-[18px]">
        Shoes change over time as technology advances and <br/>
        fashion tastes  evolve, the world over the centuries.
      </p>

      {/* Selection Menu */}
      <div ref={Menu1} className="options  flex items-center  p-4 rounded-2xl shadow-lg mt-40 bg-red-100 pointer-events-none">
        <div className="option mx-4">
          <label className=" ml-[10%]">Brand</label>
          <select className="p-2 text-sm text-gray-500  border-none outline-none bg-transparent">
            <option >Nike</option>
          </select>
        </div>
        <div className="option mx-4">
          <label className="ml-[10%]">Person</label>
          <select className="p-2 text-gray-500 text-sm border-none bg-transparent">
            <option>Man</option>
          </select>
        </div>
        <div className="option mx-4">
          <label className="ml-[10%] ">Size</label>
          <select className="p-2 text-gray-500 text-sm border-none bg-transparent">
            <option>Medium</option>
          </select>
        </div>
        <div className="option mx-4">
          <label className="ml-[10%] ">Price</label>
          <select className="p-2 text-gray-500 text-sm border-none bg-transparent">
            <option>$300 - $400</option>
          </select>
        </div>
        {/* Button */}
       <Link to="/product"><Button
              id="shop-button"
              title="Shop Now"
              rightIcon={<TiLocationArrow />}
              containerClass="my-color pointer-events-auto w-[30%]  px-2 py-2 rounded-xl shadow-md hover:bg-pink-500 hover:text-[12px] hover:font-bold md:flex hidden items-center justify-center gap-1"
             
            /></Link> 
      </div>
    </div>


    {/* Right Section - Image */}
    <div className="tex2 md:w-1/2 flex justify-center relative mt-6 md:mt-0 max-md:bottom-0 ">
    <div className=" absolute mt-[-20vh] ml-[50%] w-[92%] pointer-events-none z-[2] max-md:bottom-0"> <video autoPlay muted loop src="./bg.webm"></video></div>
     <div className="  ml-[10vw] mt-[8vh] bg-gradient-to-t from-pink-600 via-red-500 to-pink-400 rounded-[50%] h-[45vh] w-[25vw] blur-3xl z-[1]"> </div>
    </div>
  </div>
</div>
<style>{`
 .interval span{
    font-size:80px;
    color:#ff266e;
 }
`}</style>
     </>
 );
};


export default Section1;

