import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Information from '../sub_component/Information'

gsap.registerPlugin(ScrollTrigger);

const Section3 = ( {AdRef}) => {
  const boxesRef = useRef([]); 
  const page1Ref = useRef(null);
  const mainRef = useRef(null); 

  useEffect(() => {
 
      var elemC = document.querySelector("#elem-container")
      var fixed = document.querySelector("#fixed-image")
      elemC.addEventListener("mouseenter", function () {
          fixed.style.display = "block"
      })
      elemC.addEventListener("mouseleave", function () {
          fixed.style.display = "none"
      })
  
      var elems = document.querySelectorAll(".elem")
      elems.forEach(function (e) {
          e.addEventListener("mouseenter", function () {
              var image = e.getAttribute("data-image")
              fixed.style.backgroundImage = `url(${image})`
          })
      })
  
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
        scrub: 3,
      }
    });

    tl3.to(mainRef.current, { backgroundColor: "#0F0D0D" });
    
    // Cleanup the ScrollTrigger listeners and events when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
      <div ref={mainRef} className="clientmain  " id='clientmain'> 
        <div ref={page1Ref} className="page1" id='page1'>
          <h1>Digitally crafted</h1>
          <h2>brand experiences</h2>
          <video autoPlay muted loop src="./hero-2.mp4"></video>
        </div>

           <Information/>
           <div id="fixed-image"></div>
        <div className="page2 ">
          <h2>Collobrated Brands</h2>
          <div id="page3">
            <div id="elem-container">
                <div id="elem1" className="elem"
                    data-image="https://i.pinimg.com/736x/36/4f/ec/364fec97feec4bc48670fff2ce649eab.jpg">
                    <div className="overlay"></div>
                    <h2>NIKE</h2>
                </div>
                <div className="elem"
                    data-image="https://i.pinimg.com/736x/74/d8/ff/74d8fffea34151a53d6f00557d9e55e4.jpg">
                    <div className="overlay"></div>
                    <h2>ADIDAS</h2>
                </div>
                <div className="elem"
                    data-image="https://i.pinimg.com/736x/fe/6c/19/fe6c19426a0a419c868d47d326b3497f.jpg">
                    <div className="overlay"></div>
                    <h2>PUMA</h2>
                </div>
                <div className="elem"
                    data-image="https://i.pinimg.com/736x/d8/7b/de/d87bde4cce996737d03c9ed26e29ec61.jpg">
                    <div className="overlay"></div>
                    <h2>JORDAN</h2>
                </div>
                <div className="elem"
                    data-image="https://i.pinimg.com/736x/14/f4/60/14f460b51d9e823c88abaa96aef96dac.jpg">
                    <div className="overlay"></div>
                    <h2>REEBOOK</h2>
                </div>
                <div className="elem"
                    data-image="https://i.pinimg.com/736x/5c/47/fb/5c47fb38a36a88332ab4c49dcf9fbb84.jpg">
                    <div className="overlay"></div>
                    <h2>GUESS</h2>
                </div>
            </div>
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
    #page3 {
    min-height: 100vh;
    width: 100%;
    // background-color: #EFEAE3;
    padding: 4vw 0;
}

.elem {
    height: 100px;
    width: 100%;
    position: relative;
    border-top: 1px solid #dadada;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 1vh 2vw;
}

.elem h2 {
    font-size: 2.5vw;
    position: relative;
    padding-top:1vh;
    z-index: 9;
}

.elem .overlay {
    height: 100%;
    width: 100%;
    background-color: orange;
    position: absolute;
    left: 0;
    top: -100%;
    transition: all ease 0.25s;
}

.elem:hover .overlay {
    top: 0;
}

#fixed-image {
    height: 30vw;
    width: 24vw;
   pointer-events:none;
    border-radius: 15px;
    position: fixed;
    z-index: 99;
    left: 50%;
    top: 25%;
    display: none;
    background-size: cover;
    background-position: center;
}

#clientmain{
    background-color: black;
    // cursor: none;
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
    // z-index: 9;
    padding: 140px 100px;
}
.page2 h2{
    font-size: 3vw;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 50px;
}

`}</style>
    </>
  );
};

export default Section3;


// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Information from '../sub_component/Information';

// gsap.registerPlugin(ScrollTrigger);

// const Section3 = ({ AdRef }) => {
//   const crsrRef = useRef(null);
//   const boxesRef = useRef([]);
//   const page1Ref = useRef(null);
//   const mainRef = useRef(null);

//   useEffect(() => {
//     const crsr = crsrRef.current;

//     const handleMouseMove = (e) => {
//       crsr.style.left = e.clientX + 20 + "px";
//       crsr.style.top = e.clientY + 20 + "px";
//       crsr.style.opacity = "1";
//     };

//     const handleMouseOut = () => {
//       crsr.style.opacity = "0";
//     };

//     const handleMouseEnter = (e) => {
//       const att = e.target.getAttribute("data-image");
//       crsr.style.width = "470px";
//       crsr.style.height = "370px";
//       crsr.style.borderRadius = "0";
//       crsr.style.backgroundImage = `url(${att})`;
//     };

//     const handleMouseLeave = () => {
//       crsr.style.width = "20px";
//       crsr.style.height = "20px";
//       crsr.style.borderRadius = "50%";
//       crsr.style.backgroundImage = `none`;
//     };

//     if (AdRef && AdRef.current) {
//       AdRef.current.addEventListener("mousemove", handleMouseMove);
//       AdRef.current.addEventListener('mouseleave', handleMouseOut);
//     }

//     boxesRef.current.forEach((elem) => {
//       if (elem) {
//         elem.addEventListener("mouseenter", handleMouseEnter);
//         elem.addEventListener("mouseleave", handleMouseLeave);
//       }
//     });

//     gsap.from(".page1 h1, .page1 h2", {
//       y: 10,
//       rotate: 10,
//       opacity: 0,
//       delay: 0.3,
//       duration: 0.7
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: page1Ref.current,
//         start: "top top",
//         end: "bottom center",
//         scrub: 1,
//       }
//     });

//     tl.to("#page1 h1", { x: -100 }, "anim")
//       .to("#page1 h2", { x: 100 }, "anim")
//       .to(".page1 video", { width: "90%" }, "anim");

//     const tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: page1Ref.current,
//         start: "top -115%",
//         end: "top -120%",
//         scrub: 3,
//       }
//     });

//     tl2.to(mainRef.current, { backgroundColor: "#fff" });

//     const tl3 = gsap.timeline({
//       scrollTrigger: {
//         trigger: page1Ref.current,
//         start: "top -280%",
//         end: "top -350%",
//         scrub: 3,
//       }
//     });

//     tl3.to(mainRef.current, { backgroundColor: "#0F0D0D" });

//     // Cleanup function for ScrollTrigger and event listeners
//     return () => {
//       // Remove event listeners from AdRef
//       if (AdRef && AdRef.current) {
//         AdRef.current.removeEventListener("mousemove", handleMouseMove);
//         AdRef.current.removeEventListener('mouseleave', handleMouseOut);
//       }

//       // Remove event listeners for each box
//       boxesRef.current.forEach((elem) => {
//         if (elem) {
//           elem.removeEventListener("mouseenter", handleMouseEnter);
//           elem.removeEventListener("mouseleave", handleMouseLeave);
//         }
//       });

//       // Kill all scrollTriggers
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       ScrollTrigger.refresh();
//     };
//   }, [AdRef]); // Added AdRef as a dependency to ensure cleanup on change

//   return (
//     <>
//       <div ref={crsrRef} className="cursor" id="cursor"></div>
//       <div ref={mainRef} className="clientmain rounded-b-[5%] overflow-hidden" id="clientmain">
//         <div ref={page1Ref} className="page1" id="page1">
//           <h1>Digitally crafted</h1>
//           <h2>brand experiences</h2>
//           <video autoPlay muted loop src="./hero-2.mp4"></video>
//         </div>

//         <Information />

//         <div className="page2">
//           <h2>Collaborated Brands</h2>
//           <div ref={(el) => (boxesRef.current[0] = el)}
//             className="box"
//             data-image="https://i.pinimg.com/736x/b0/33/3d/b0333d5fbe138b7e08c4b8c5834e14c8.jpg">
//             <h3>NIKE</h3>
//             <h4>2023</h4>
//           </div>
//           <div ref={(el) => (boxesRef.current[1] = el)}
//             className="box"
//             data-image="https://i.pinimg.com/736x/f5/4f/e9/f54fe93fbee022f4d358db3203d23fe4.jpg">
//             <h3>ADIDAS</h3>
//             <h4>2023</h4>
//           </div>
//           <div ref={(el) => (boxesRef.current[2] = el)}
//             className="box"
//             data-image="https://i.pinimg.com/736x/ed/bc/b1/edbcb18bb4bdd1ab4181613dcc5d8250.jpg">
//             <h3>PUMA</h3>
//             <h4>2024</h4>
//           </div>
//           <div ref={(el) => (boxesRef.current[3] = el)}
//             className="box"
//             data-image="https://i.pinimg.com/736x/51/a7/fd/51a7fdb9dc1f86629dc533c1a0e041fe.jpg">
//             <h3>WIZZ</h3>
//             <h4>2025</h4>
//           </div>
//           <div ref={(el) => (boxesRef.current[4] = el)}
//             className="box"
//             data-image="https://i.pinimg.com/736x/c3/b6/43/c3b643a01d71027064f9478c36b5c61d.jpg">
//             <h3>REEBOK</h3>
//             <h4>2024</h4>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         #clientmain{
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//           font-family: PP mori;
//           color: #fff;
//           height: 100%;
//           width: 100%;
//         }

//         #cursor{
//           height: 20px;
//           width: 20px;
//           border-radius: 50%;
//           position: fixed;
//           background-color: black;
//           transition: background-image ease 0.5s;
//           background-position: center;
//           background-size:cover ;
//           mix-blend-mode: difference;
//           pointer-events: 'none';
//           z-index:999;
//         }
        
//         #clientmain{
//           background-color: black;
//           cursor: none;
//         }

//         #page1{
//           min-height: 100vh;
//           width: 100%;
//           position: relative;
//           padding-top: 12vw;
//         }

//         #page1 h1{
//           font-size: 8vw;
//           font-weight: 300;
//           font-family: PP mori;
//           margin-left: 6vw;
//           transform-origin: left;
//         }

//         #page1 h2{
//           font-size: 8vw;
//           font-weight: 300;
//           transform-origin: left;
//           margin-left: 26vw;
//         }

//         #page1 video{
//           width: 60%;
//           margin-top: 10vw;
//           position: relative;
//           left: 50%;
//           transform: translate(-50%,0);
//         }

//         .page2{
//           min-height: 100vh;
//           width: 100%;
//           position: relative;
//           z-index: 9;
//           padding: 140px 100px;
//         }

//         .page2 h2{
//           font-size: 4vw;
//           text-transform: uppercase;
//           font-weight: 400;
//           margin-bottom: 50px;
//         }

//         .box{
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 100px;
//           padding: 0 20px;
//           border-top: 2px solid #dadada;
//         }

//         .box:nth-last-child(1){
//           border-bottom: 2px solid #dadada;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Section3;
