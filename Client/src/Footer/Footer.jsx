import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Iridescence from './Iridescence';

// gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // useEffect(()=>{
  //   const tl2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".footer",
  //       start: "top 60%",
  //       end: "bottom bottom",
  //       scrub: 1,
  //     }
  //   })
  //   .from('h1 span',{
  //     y:100,
  //     duration:1,
  //     staggee:0.2,
  //     opacity:0,
  //     scrub:true,
  //     ease: "power2.out"
  //   })

  // },[]);
  return (
    <>
      <footer className='footer m-auto bg-black  p-8 overflow-hidden w-full relative h-[70vh] flex flex-col justify-center items-center'>

      <Iridescence
            color={[1, 1, 1]}
            mouseReact={true}
            amplitude={0.1}
            speed={1.0}
          /> hvhjjhbkb
        <div id="footer" className="w-full  h-screen flex flex-col justify-center items-center z-[2] font-serif absolute">
      
          <div><span>S</span><span>t</span><span>e</span><span>p</span><span>s</span><div />
            <div> <h3 className="text-red-400 text-4xl  ">Like A king .</h3></div>
          </div>
          <div id="footer-bottom" className="w-full h-[4vh]  border-t border-gray-300 "></div>
        </div>

        <div className='flex justify-between text-slate-400 mt-[-2%] max-sm:flex-col p-1 text-1xl max-sm:items-center'>
          <div className='flex  justify-start items-start gap-2 font-montserrat cursor-pointer '>
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
      </footer>
      <style>{`
      @font-face{
        font-family: 'Style';
        src: url('/fonts/Style.otf') format('opentype');
      }
        footer h1{
         font-family: 'Style';
         line-height:1;

        }
         footer span{
           font-size:12vw;
           display:inline-block;
           color:#ff266e;
           font-weight:900;
         }
    `}</style>
    </>
  );
};

export default Footer;

