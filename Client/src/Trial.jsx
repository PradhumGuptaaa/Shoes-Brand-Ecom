import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Information from './AdvertisingSection/sub_component/Information'

gsap.registerPlugin(ScrollTrigger);

const Trial = ( {AdRef}) => {
  const crsrRef = useRef(null);
  const boxesRef = useRef([]); 
  const page1Ref = useRef(null);
  const mainRef = useRef(null); 

  useEffect(() => {

    const crsr = crsrRef.current;

    // Mouse move event for custom cursor
    const handleMouseMove = (e) => {
      crsr.style.left = e.clientX + 20 + "px";
      crsr.style.top = e.clientY + 20 + "px";
      crsr.style.opacity = "1";
    };

    const handleMouseOut = () => {
      crsr.style.opacity = "0";
    };

    AdRef.current.addEventListener("mousemove", handleMouseMove);
    AdRef.current.addEventListener('mouseleave', handleMouseOut);

    // Define mouse enter and leave functions
    const handleMouseEnter = (e) => {
      const att = e.target.getAttribute("data-image");
      crsr.style.width = "470px";
      crsr.style.height = "370px";
      crsr.style.borderRadius = "0";
      crsr.style.backgroundImage = `url(${att})`;
    };

    const handleMouseLeave = () => {
      crsr.style.width = "20px";
      crsr.style.height = "20px";
      crsr.style.borderRadius = "50%";
      crsr.style.backgroundImage = `none`;
    };

    // Add event listeners to each box element
    boxesRef.current.forEach((elem) => {
      elem.addEventListener("mouseenter", handleMouseEnter);
      elem.addEventListener("mouseleave", handleMouseLeave);
    });

    // GSAP animations for elements on page load
    gsap.from(".page1 h1, .page1 h2", {
      y: 10,
      rotate: 10,
      opacity: 0,
      delay: 0.3,
      duration: 0.7
    });

    // Scroll-triggered animations for page1 elements
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: page1Ref.current,  // Use ref for trigger
        // scroller: mainRef.current,   // This is the scroll container
        start: "top top",
        end: "bottom center",
        scrub: 1,
      }
    });

    tl.to("#page1 h1", { x: -100 }, "anim")
      .to("#page1 h2", { x: 100 }, "anim")
      .to(".page1 video", { width: "90%" }, "anim");

    // Background color change based on scroll position
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: page1Ref.current,  
        start: "top -115%",
        end: "top -120%",
        scrub: 3,
      }
    });

    tl2.to(mainRef.current, { backgroundColor: "#fff" });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: page1Ref.current, 
        start: "top -280%",
        end: "top -350%",
        scrub: 3
      }
    });

    tl3.to(mainRef.current, { backgroundColor: "#0F0D0D" });
    
    // Cleanup the ScrollTrigger listeners and events when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      AdRef.current.removeEventListener("mousemove", handleMouseMove);
      AdRef.current.removeEventListener('mouseleave', handleMouseOut);
      // Remove event listeners for each box
      ScrollTrigger.refresh();
      boxesRef.current.forEach((elem) => {
        elem.removeEventListener("mouseenter", handleMouseEnter);
        elem.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={crsrRef} className="cursor " id='cursor'></div>
      <div ref={mainRef} className="clientmain" id='clientmain'> 
        <div ref={page1Ref} className="page1" id='page1'>
          <h1>Digitally crafted</h1>
          <h2>brand experiences</h2>
          <video autoPlay muted loop src="./hero-2.mp4"></video>
        </div>

           <Information/>
           
        <div className="page2">
          <h2>Mentions Clients</h2>
          <div ref={(el) => (boxesRef.current[0] = el)}
            className="box"
            data-image="https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
            <h3>Verizon</h3>
            <h4>2021</h4>
          </div>
          <div ref={(el) => (boxesRef.current[1] = el)}
            className="box"
            data-image="https://images.unsplash.com/photo-1688232543149-5602b136ba11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
            <h3>Verizon</h3>
            <h4>2021</h4>
          </div>
          <div ref={(el) => (boxesRef.current[2] = el)}
            className="box"
            data-image="https://images.unsplash.com/photo-1688103920333-117afda88518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
            <h3>Verizon</h3>
            <h4>2021</h4>
          </div>
          <div ref={(el) => (boxesRef.current[3] = el)}
            className="box"
            data-image="https://images.unsplash.com/photo-1687913161653-7cddb0ba09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80">
            <h3>Verizon</h3>
            <h4>2021</h4>
          </div>
          <div ref={(el) => (boxesRef.current[4] = el)}
            className="box"
            data-image="https://images.unsplash.com/photo-1686904423955-b928225c6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60">
            <h3>Verizon</h3>
            <h4>2021</h4>
          </div>
        </div>
      </div>
      <style>{`
        #clientmain{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: PP mori;
    color: #fff;
    height: 100%;
    width: 100%;
}

#cursor{
    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: fixed;
    background-color: black;
    transition: background-image ease 0.5s;
    background-position: center;
    background-size:cover ;
    mix-blend-mode: difference;
    pointer-events: 'none';

}
#clientmain{
    background-color: black;
    cursor: none;
}

#page1{
    min-height: 100vh;
    width: 100%;
    position: relative;
    // z-index: 0;
    padding-top: 12vw;
}

#page1 h1{
    font-size: 8vw;
    font-weight: 300;
    font-family: PP mori;
    
    margin-left: 6vw;
    transform-origin: left;
}
#page1 h2{
    font-size: 8vw;
    font-weight: 300;
    transform-origin: left;

    margin-left: 26vw;
}

#page1 video{
    width: 60%;
    margin-top: 10vw;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
}

.page2{
    min-height: 100vh;
    width: 100%;
    position: relative;
    z-index: 9;
    padding: 140px 100px;
}
.page2 h2{
    font-size: 4vw;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 50px;
}
.box{
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 0 20px;
    border-top: 2px solid #dadada;
}

.box:nth-last-child(1){
    border-bottom: 2px solid #dadada;

}

      `}</style>
    </>
  );
};

export default Trial;
