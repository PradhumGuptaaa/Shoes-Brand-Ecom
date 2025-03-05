import React from 'react'
import { useEffect , useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Loader = () => {

    useEffect(() =>{
      var tl =  gsap.timeline()

      tl.from("#loader h3",{
        x:70,
        opacity:0,
        duration:1,
        stagger:0.1
      })
      tl.to("#loader h3",{
        x:-20,
        opacity:0,
        duration:1,
        stagger:0.1
      })
      tl.to("#loader",{
        opacity:0
      })
      tl.to("#loader",{
        display:"none"
      })

    }, []);
  return (
    <div
    id="loader"
    className="fixed top-0 left-0 h-full w-full bg-black z-50 flex items-center justify-center text-white gap-2"
  >
    <h3 className="text-[2vw]">Tomorrow's</h3>
    <h3 className="text-[2vw]">Brand,</h3>
    <h3 className="text-[2vw]">Today</h3>
  </div>
  )
}
export default Loader;