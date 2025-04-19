import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  useEffect(() => {

    function hovereffect() {
      let showingimage;
      document.querySelectorAll(".cnt").forEach((cnt) => {
        cnt.addEventListener("mousemove", (dets) => {

          const element = dets.target.closest('[data-index][data-color]');
          const index = element.getAttribute('data-index');
          const color = element.getAttribute('data-color');

          document.querySelector("#cursors").children[index].style.opacity = 1;
          showingimage = dets.target;
          document.querySelector("#cursors").children[index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
          showingimage.style.filter = "grayscale(1)";
          document.querySelector("#work").style.backgroundColor = "#" + color;
          document.querySelector("#cursors").style.opacity = 1;
        });

        cnt.addEventListener("mouseleave", (dets) => {
          showingimage.style.filter = "grayscale(0)";
          document.querySelector("#work").style.backgroundColor = "#fff";
          document.querySelector("#cursors").style.opacity = 0;
        });
      });
    }

    hovereffect(); 

  }, []);

  return (
    <>
      <div id="work">
        <div className="workrow">
          <h1>Feat Wo<span className="maz">r</span>ks</h1>
          <svg width="8vw" height="9vw" viewBox="-13.6 -13.6 163.20 163.20" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(4.080000000000005,4.080000000000005), scale(0.94)"><path transform="translate(-13.6, -13.6), scale(5.1)" d="M16,30.749094259407784C18.959696082950902,30.571581118089515,20.697631517908448,27.4478354443517,22.793737897324164,25.35077801429683C24.530253932204538,23.613474083009525,26.041591412735166,21.818713345833032,27.128255668083604,19.615789451275845C28.397454298007773,17.042825469956075,29.970768142213196,14.429182153940388,29.58342998599982,11.58647605514799C29.160537776496056,8.482835879750688,27.51890741284109,5.4739344030954005,24.955964929809564,3.6731717902362373C22.41085903437296,1.8849414367994295,19.007242574240763,1.247676739050951,16,2.0425502608219794C13.271153673437336,2.763838163748941,12.292736527410447,6.101282546742403,9.92967631124569,7.64491622339068C7.35426333766851,9.327266156793067,3.394871679998254,8.776383475519852,1.73083626395346,11.363667653386152C0.004630872550262621,14.047615274849978,0.19424711344699386,17.803836431070856,1.5327290836899952,20.700701271446604C2.814932863986579,23.47576371675075,6.076441683949677,24.458965956150266,8.587202283049542,26.202840757720594C11.027634161520176,27.89786801732457,13.033995989735006,30.926985730108985,16,30.749094259407784" fill="#FF69B4" strokeWidth="0"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.088"></g><g id="SVGRepo_iconCarrier"> <path d="M24.7219 107.666C48.2285 92.6289 71.9469 77.5917 95.4536 62.5546C95.2418 61.9192 94.8183 61.0721 94.6065 60.4367C84.865 62.131 74.9117 63.8254 65.1702 65.3079C59.4524 66.1551 53.7346 66.7904 48.0168 66.5786C36.1575 66.155 31.9221 57.8952 38.0635 47.7293C40.1812 44.3406 42.7225 40.7402 45.6873 38.1987C60.2995 25.9148 75.1235 14.0546 89.7357 1.98249C90.7946 1.13533 92.0652 0.288181 93.3359 0.0763904C94.3947 -0.1354 96.3007 0.0763774 96.936 0.92354C97.7831 2.19428 98.4184 4.52399 97.5713 5.37115C95.2418 8.33622 92.7005 10.8777 89.9475 13.4192C78.5118 23.3734 66.6526 33.3275 55.217 43.4934C51.8286 46.4585 49.0756 50.4826 44.6284 55.7773C50.3462 55.7773 53.7346 56.2009 57.1229 55.7773C72.1587 53.2359 87.1945 50.2707 102.23 47.7293C105.619 47.0939 109.007 46.2467 112.395 46.8821C115.36 47.3057 119.172 48.7882 120.866 51.1179C123.407 54.5066 121.29 58.3188 118.325 61.0721C115.572 63.6136 112.819 66.1551 109.642 68.273C90.7946 80.5568 72.1587 92.6289 53.311 104.913C50.3462 106.819 47.3814 108.937 42.5107 112.114C55.217 112.325 64.7467 105.125 77.6648 109.36C74.2764 112.537 72.3705 114.867 70.041 116.138C51.4051 125.245 31.4986 131.387 11.1685 135.622C2.69764 137.528 -1.96134 132.022 0.791693 123.55C2.06232 119.738 3.7565 115.926 6.29775 112.749C13.0744 103.854 20.0629 95.1704 27.2631 86.487C28.5338 85.0044 31.4986 83.7337 32.981 84.1573C36.1575 85.428 35.734 88.6048 34.2516 91.1463C31.075 96.6529 27.4749 102.159 24.0866 107.454C24.0866 107.031 24.5101 107.454 24.7219 107.666Z" fill="#0D1927"></path> </g></svg>
        </div>
        <div id="images">
          <div data-color="FFD7DC" data-index="0" className="cnt cnt1">
            <img src="/images/model1.jpg" alt="work 1" />
          </div>
          <div data-color="BFCBF1" data-index="0" className="cnt cnt2">
            <img src="https://i.pinimg.com/736x/e9/1f/c7/e91fc7a1197b0f1af2da17e3018805fe.jpg" alt="work 2" />
          </div>
        </div>
      </div>

      <div id="cursors">
        <div>
          <div className="crow">
            <div className="ccircle"></div>
            <div className="ccapsule">
              Discount
            </div>
          </div>
          <div id="elem">
            <img src="https://i.pinimg.com/736x/46/43/94/464394cfda80082c7526b9e36876c2ab.jpg" alt="element 1" />
            <img src="https://cdn.dribbble.com/users/9135815/screenshots/20130650/media/851a8d14e1444d991638f41e485bc522.jpg?resize=1000x750&vertical=center" alt="element 2" />
            <img src="https://cdn.dribbble.com/users/9135815/screenshots/20259587/media/09a1e212004a6c9a31d5a2104479103c.jpg?resize=1000x750&vertical=center" alt="element 3" />
            <img src="/img1.png" alt="element 4" />
            <img src="/img2.png" alt="element 5" />
          </div>
        </div>
      </div>

      <style>
        {`
          #work {
            transition: background-color cubic-bezier(0.19, 1, 0.22, 1) 2s;
            padding-top: 120px;
            padding-bottom: 130px;
            position: relative;
            width: 100%;
            min-height: 50vh;
            z-index:5;
            background-color: #fff;
            border-bottom-left-radius:10%;
            border-bottom-right-radius:10%;
          }

          #work .workrow{
            padding: 0 12vw;
            display:flex;
            align-items: center;
            justify-content: space-between;  
          }
          .workrow h1{
           font-size: 7vw;
           font-weight: 600;
          }
          .maz{
           font-size: 8vw;
           font-weight: 600;
          //  color: #D1006F;
          color: deeppink;
           }

          #images {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-top: 4vw;
            position: relative;
            width: 100%;
            padding: 0 5vw;
          }

          .cnt {
            width: 50%;
            overflow: hidden;
            border-radius: 50px;
            cursor: pointer;
          }

          .cnt img {
            transition: filter cubic-bezier(0.19, 1, 0.22, 1) 2s;
            width: 105%;
          }
          .cnt1{
             width: 40%;
           }

          .cnt2{
            width: 23%;
           }

          .cnt2 img{
            width: 130%;
           }
  
          #cursors {
            position: fixed;
            width: 18vw;
            top: 0;
            left: 0;
            z-index: 999999;
            transition: opacity 0.3s ease;
          }

          #cursors>div{
          pointer-events: none;
           opacity: 0;
           position: absolute;
           transition: all cubic-bezier(0.19, 1, 0.22, 1) 1s;
          }

          #cursors .crow {
            display: flex;
            align-items: center;
            gap: 18px;
            width: 100%;
            padding: .7vw;
          }

          #cursors .ccircle {
            width: 1.9vw;
            height: 1.9vw;
            border: 2px solid #fff;
            border-radius: 50%;
          }

          #cursors .ccapsule {
            padding: .5vw 1.5vw;
            border-radius: 100px;
            background-color: #fff;
          }
          #elem{
            width: 100%;
            position: relative;
           }
          #elem img{
            width: 100%;
            opacity: 0;
            animation: an 4s linear infinite;
            position: absolute;
          }

          #elem img:nth-child(2) {
            animation-delay: 1s;
          }

          #elem img:nth-child(3) {
            animation-delay: 2s;
          }

          #elem img:nth-child(4) {
            animation-delay: 3s;
          }

          #elem img:nth-child(5) {
            animation-delay: 4s;
          }

          @keyframes an {
            0% {
              opacity: 1;
            }
            20% {
              opacity: 1;
            }
            21% {
              opacity: 0;
            }
            40% {
              opacity: 0;
            }
            60% {
              opacity: 0;
            }
            80% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Section1;
