import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
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
        <span className="tex text-black text-7xl  ">Step  into </span>
        <span className="interval px-4"><span>S</span><span>t</span><span>y</span><span>l</span><span>e</span></span>  <br />
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
        <Button
              id="shop-button"
              title="Shop Now"
              rightIcon={<TiLocationArrow />}
              containerClass="my-color pointer-events-auto w-[30%]  px-2 py-2 rounded-xl shadow-md hover:bg-pink-500 hover:text-[12px] hover:font-bold md:flex hidden items-center justify-center gap-1"
             
            />
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

// const Practice = () => {
//  const [menuOpen, setMenuOpen] = useState(false);
//    const toggleMenu = () => {
//      setMenuOpen(!menuOpen);
     
//    };
   
   
//   return (
//     <div className=" bg-[#efe4e4] w-full h-screen  ">
//       {/* Body Items */}
//       <div className="relative">
//         <div className=" absolute top-0 left-0 w-full h-screen  ">
//           <img src="images/background.jpg" alt="Background" className="w-full h-full object-fill" />
//         </div>
      
//         <div className="absolute top-[100%] right-[200px] transform-translate-y-1/2 w-[300px] text-center font-extrabold text-[100px] opacity-10 ">
//           <p>Just Do It</p>
//         </div>
//       </div>

//       {/* Navigation */}
//        <nav className="flex justify-between items-center px-[6vw] py-[1rem] h-[120px] relative z-50">
//         <div className="flex gap-[50px]">
//           <div className="flex items-center">
//             <img src="images/model1.jpg" alt="Logo" className="w-[100px]" />
//           </div>
//           <div className="hidden md:flex gap-[30px]">
//             {/* <ul className="flex">
//               {["HOME", "KIDS", "MEN", "WOMEN"].map((item, index) => (
//                 <li key={index} className="relative">
//                   <a href="#" className="text-black text-sm font-medium py-2 block">{item}</a>
//                   <div className="absolute bottom-[43px] left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out"></div>
//                 </li>
//               ))}
//             </ul> */}
//           </div>
//         </div>

//         <div className="flex gap-[50px] items-center">
//           <div className="hidden md:block">
//             <i className="bx bx-cart text-2xl cursor-pointer"></i>
//           </div>
//           <div className="relative">
//             <div className="flex flex-col gap-[10px] p-[10px] cursor-pointer" onClick={toggleMenu}>
//               <div className="w-[30px] h-[3px] bg-black transition-all duration-300 ease-in-out"></div>
//               <div className="w-[30px] h-[3px] bg-black transition-all duration-300 ease-in-out"></div>
//             </div>

//             //  Dropdown Menu 
//             <div
//               className={`absolute top-[50px] right-0 w-[300px] h-[380px] bg-black bg-opacity-10 rounded-lg shadow-lg backdrop-blur-sm ${
//                 menuOpen ? "block" : "hidden"
//               }`}
//             >
//               <ul className="flex flex-col justify-center items-center">
//                 {["HOME", "KIDS", "MEN", "WOMEN"].map((item, index) => (
//                   <li key={index} className="text-center py-[30px]">
//                     <a href="#" className="text-black text-lg font-medium">{item}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav> 

//       {/* Main Content */}
//       <div className="flex relative z-10 ">
//         {/* Left Column */}
//         <div className="w-[50%] pl-[70px] pt-[40px]">
//           <div className="text-4xl font-semibold tracking-[7px]">
//             <p>Nike Air Jordan</p>
//           </div>
//           <hr className="border-2 w-[200px] mt-[25px] mb-[35px]" />
//           <div className="text-[16px] font-light leading-8">
//             <p>
//               Nike Shoes E-commerce Web Template Shop - UpLabs, Nike introduces new consumer website - oregonlive.com
//             </p>
//           </div>
//           <div className="flex justify-between items-center mt-[20px]">
//             <button className="px-[20px] py-[12px] font-semibold rounded-[30px] border-none shadow-md cursor-pointer">
//               Add To Cart
//             </button>
//             <p className="text-[16px] font-semibold">$197.99</p>
//           </div>

//           {/* Shop Box */}
//           <div className="flex gap-[50px] mt-[60px]">
//             {/* Shop Item 1 */}
//             <div className="relative bg-[#cfcfcf] w-[200px] h-[150px] rounded-[40px] p-[80px 20px 0 20px] shadow-md cursor-pointer">
//               <div className="absolute left-1/2  transform -translate-x-1/2 rotate-[-40deg] mix-blend-difference">
//                 <img src="images/1shoe.png" alt="Nike Air Max" className="w-[200px] " />
//               </div>
//               <div className="flex justify-between mt-[50px]">
//                 <h3 className="font-bold text-sm">Nike Air Max</h3>
//                 <p className="text-sm">$169.99</p>
//               </div>
//               <div className="absolute right-[-10px] top-[50%] flex items-center justify-center w-[40px] h-[40px] bg-black rounded-[10px]">
//                 <i className="bx bx-cart text-white text-[20px]"></i>
//               </div>
//             </div>

//             {/* Shop Item 2 */}
//             <div className="relative bg-[#cfcfcf] w-[200px] h-[150px] rounded-[40px] p-[80px 20px 0 20px] shadow-md cursor-pointer">
//               <div className="absolute left-1/2  transform -translate-x-1/2 rotate-[-40deg] mix-blend-difference">
//                 <img src="images/2shoe.jpg" alt="Nike Air Force" className="w-[200px] " />
//               </div>
//               <div className="flex justify-between mt-[50px]">
//                 <h3 className="font-bold text-sm">Nike Air Force</h3>
//                 <p className="text-sm">$172.99</p>
//               </div>
//               <div className="absolute right-[-10px] top-[50%] flex items-center justify-center w-[40px] h-[40px] bg-black rounded-[10px]">
//                 <i className="bx bx-cart text-white text-[20px]"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//      <div className="absolute right-[90px] bottom-[50px] bg-red-600">
//             {/* <i className="bx bx-cart text-[30px] bg-red-600 cursor-pointer"></i> */}
//           </div>
//         </div>
//       </div>
//   );
// };

// export default Practice;
