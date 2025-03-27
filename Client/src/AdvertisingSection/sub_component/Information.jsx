import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Information = () => {
  useEffect(() => {
    page6Animations();
  }, []);

   
  function page6Animations() {
    gsap.to(".btm6-parts h4", {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#page6-bottom",
        start: "center 50%",
        end: "bottom 30%",
        scrub:true
      }
    });
  };
    


  return (
  <>
   <div id="inf">
     <div id="page6">
          <h1>Digital Product Design Process</h1>
          <div id="page6-content">
            <div id="blue-btn">
              <h4>See all Case Studies <i className="ri-arrow-right-up-line"></i></h4>
              <h4>See all Case Studies <i className="ri-arrow-right-up-line"></i></h4>
            </div>
            <div id="right-6">
              <p>We do not collborates with bad quality shoes barnds that involve blind conformity or designing out of context. We won't
                settle for a shoes interface design that is misaligned with our product and digital strategy.
                Neither will we launch or promote brands ventures without user testing to validate their design
                solutions.</p>
              <p>Understanding Your Lifestyle, Begin your journey meet the ever-evolving demands of our
                customers, ensuring long-term sustainability.</p>

            </div>
          </div>
          <div id="page6-bottom">
            <div id="btm6-part1" className="btm6-parts"></div>
            <div id="btm6-part2" className="btm6-parts">
              <h5>Brand Strategy</h5>
              <h4><span>1</span>Eco-Friendly</h4>
              <h4><span>2</span>Idea Validation</h4>
              <h4><span>3</span>Market Research</h4>
              <h4><span>4</span>Product Positioning</h4>
              <h4><span>5</span>step into style</h4>
              <h4><span>6</span>Functional Decomposition</h4>
            </div>
            <div id="btm6-part3" className="btm6-parts">
              <h5>Structure Strategy</h5>
              <h4><span>1</span>Lining </h4>
              <h4><span>2</span>Outer Sole </h4>

            </div>
            <div id="btm6-part4" className="btm6-parts">
              <h5>Features</h5>
              <h4><span>1</span>Fit Matters</h4>
              <h4><span>2</span>Sneaker</h4>
              <h4><span>4</span>Aestheticts </h4>
            </div>
            <div id="btm6-part5" className="btm6-parts">
              <h5>Delivery</h5>
              <h4><span>1</span>On Time </h4>
            </div>
          </div>
        </div>
        <div id="page7">

        </div>
      </div> 
      <style>{`
 #inf {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: gilroy;
    // color: #fff;
}
     
#page6 {
    min-height: 100vh;
    width: 100%;
    // background-color: #fff;
    padding: 10vh 10vw;
      border-bottom: 1px solid #dadada;
}

#page6 > h1 {
    font-size: 5.5vw;
    color: #000;
    /* background-color: red; */
    padding-left: 23vw;
    padding-right: 5vw;
    line-height: 5.8vw;
    padding-bottom: 10vh;
    border-bottom: 1px solid #dadada;
}

#page6-content {
    /* background-color: red; */
    color: #000;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 8vh 0;
}

#page6-content #right-6 {
    width: 70%;
}

#page6-content #right-6 p {
    font-size: 1.5vw;
    color: #000;
    margin-bottom: 5vh;
    width: 80%;
}

#blue-btn {
    background-color: #4f5bff;
    width: 15vw;
    height: 3.5vw;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#blue-btn h4 {
    position: absolute;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.85vw;
    /* letter-spacing: 1px; */
}

#blue-btn h4 i {
    font-size: 1.1vw;
    font-weight: 100;
    margin-left: 0.5vw;
}

#page6-bottom {
    height: 44vh;
    width: 100%;
    /* background-color: red; */
    border-top: 1px solid #dadada;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* background-color: rgb(48, 48, 48); */
    /* color: #000; */
}

#btm6-part1 {
    border-right: 1px solid #dadada;
    width: 30%;
    /* background-color: red; */
    height: 100%;
}

#btm6-part2 {
    border-right: 1px solid #dadada;
    width: 28%;
    /* background-color: red; */
    height: 100%;
}

#btm6-part3 {
    border-right: 1px solid #dadada;
    width: 15%;
    /* background-color: red; */
    height: 100%;
}

#btm6-part4 {
    border-right: 1px solid #dadada;
    width: 15%;
    /* background-color: red; */
    height: 100%;
}

#btm6-part5 {

    width: 15%;
    /* background-color: red; */
    height: 100%;
}

.btm6-parts {
    padding: 3vh 0.6vw;
}

.btm6-parts h5 {
    color: #000;
    font-weight: 500;
    font-size: 0.9vw;
    margin-bottom: 4vh;
}

.btm6-parts h4 {
    background-color: #111;
    width: 75%;
    padding: 5px 10px;
    margin-bottom: 0.3vh;
    border-radius: 50px;
    font-size: 0.85vw;
    display: flex;
    align-items: center;
    font-weight: 500;

}

.btm6-parts h4 span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5vw;
    height: 1.5vw;
    background-color: #333;
    padding: 0.5vw;
    border-radius: 50%;
    margin-right: 1vw;
}
.btm6-parts h4:nth-child(2){
    transform: translateX(0);
}
.btm6-parts h4:nth-child(3){
    transform: translateX(10%);
}
.btm6-parts h4:nth-child(4){
    transform: translateX(20%);
}
.btm6-parts h4:nth-child(5){
    transform: translateX(30%);
}
.btm6-parts h4:nth-child(6){
    transform: translateX(40%);
}
.btm6-parts h4:nth-child(7){
    transform: translateX(50%);
}
      `}</style>
  </>
  )
}

export default Information;
