// import { Canvas } from "@react-three/fiber";
// import { Jorden } from "./components/Jorden.jsx";
// import { Environment, OrbitControls } from "@react-three/drei";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Suspense } from "react";
// import { Loading } from "./components/Loading.jsx";
// // without registering scrolltriiger the model will break
// gsap.registerPlugin(ScrollTrigger);

//  const IntroSection = () => {
//   return (
//     <Canvas
//       camera={{
//         position: [4.742922067308307, 2.2387122409413784, 1.2218255872664914],
//       }}
//       shadows
//     >
//       <OrbitControls
//         enablePan={false}
//         enableRotate={false}
//         enableZoom={false}
//       />
//       <Suspense fallback={<Loading />}>
//         <Jorden />
//       </Suspense>
//     </Canvas>
//   );
// };
// export default IntroSection;






import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Loader from './components/Loader.jsx';
import Pradhum from './components/Pradhum.jsx';
import Set2 from './components/Set2.jsx';
import Practice from './components/practice.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const containerRef = useRef(null);
  const camera = useRef(null);
  const scene = useRef(null);
  const renderer = useRef(null);
  const shoe = useRef(null);
  const mixer = useRef(null);
  const IntroRef = useRef(null);
  // const [loading, setLoading] = useState(true);
  
  const arrPositionModel = [
        { id: 'banner', position: { x: -5, y: -3, z: 27 }, rotation: { x: -0.7, y: 0, z: -0.2} },
        { id: 'intro', position: { x: 10, y: 0, z: 0 }, rotation: { x: -1.5, y: 0.5, z: 1.5 } },
        { id: 'description', position: { x: 30, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 } },
      ];
    
      useEffect(() => {
        // Scene setup
        scene.current = new THREE.Scene();
    
        // Camera setup
        camera.current = new THREE.PerspectiveCamera(
          70, // FOV
          window.innerWidth / window.innerHeight,
          0.1, // Near plane
          100 // Far plane
        );
        camera.current.position.set(-40, 15, 0); // Move the camera closer to the model
        camera.current.lookAt(new THREE.Vector3(0, 0, 0)); // Make sure the camera looks at the model
    
        // Renderer setup
        if (!renderer.current) {
          renderer.current = new THREE.WebGLRenderer({ alpha: true });
          renderer.current.setSize(window.innerWidth, window.innerHeight);
          containerRef.current.appendChild(renderer.current.domElement);
        }
    
        // Lighting setup
        const ambientLight = new THREE.AmbientLight(0xffffff, 2);
        scene.current.add(ambientLight);
    
        const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
        directionalLight.position.set(10, 100, 50);
        scene.current.add(directionalLight);
    
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(5, 5, 5);
        scene.current.add(pointLight);
    
        // GLTFLoader setup
        const loader = new GLTFLoader();
        loader.load(
          'shoes.glb', // Your model file path
          (gltf) => {
            if (shoe.current) return;  // Ensure the model is not loaded again
            console.log("Model loaded:", gltf); // Debugging model load
    
            shoe.current = gltf.scene;
            shoe.current.position.set(0, 0, 0); // Centered position
            scene.current.add(shoe.current);
    
            // Set up animation mixer for the loaded model
            if (gltf.animations.length > 0) {
              mixer.current = new THREE.AnimationMixer(shoe.current);
            }
    
            modelMove();  // Call modelMove once the model is loaded
          },
          undefined, // onProgress callback (optional)
          (error) => {
            console.error('An error occurred while loading the model:', error);
          }
        );
    
        // Resize handling
        const handleResize = () => {
          renderer.current.setSize(window.innerWidth, window.innerHeight);
          camera.current.aspect = window.innerWidth / window.innerHeight;
          camera.current.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);
    
        // Animation loop
        function animate() {
          requestAnimationFrame(animate);
          if (mixer.current) mixer.current.update(0.01);  // Update animation
          renderer.current.render(scene.current, camera.current);
        }
        animate();
    
        const modelMove = () => {
          if (!shoe.current) return;  // Ensure the model is loaded
    
          const section = document.querySelectorAll('.section');
          let currentSection = '';
          section.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 3 && rect.bottom >= 0) {
              currentSection = section.id;
            }
          });
    
          let position_active = arrPositionModel.findIndex(
            (val) => val.id === currentSection
          );
    
          if (position_active >= 0) {
            let new_coordinates = arrPositionModel[position_active];
    
            // Using GSAP to move the model
            gsap.to(shoe.current.position, {
              x: new_coordinates.position.x,
              y: new_coordinates.position.y,
              z: new_coordinates.position.z,
              duration: 1,
              ease: 'power1.out',
            });
    
            gsap.to(shoe.current.rotation, {
              x: new_coordinates.rotation.x,
              y: new_coordinates.rotation.y,
              z: new_coordinates.rotation.z,
              duration: 1,
              ease: 'power1.out',
            });
          }
    gsap.timeline({
      scrollTrigger: {
        trigger: "#description",  // Use ref for trigger
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
      onComplete: () => {
        // Remove the scroll event listener after the animation is done
        window.removeEventListener('scroll', modelMove);
      }
    })
    .to(containerRef.current, { 
      opacity:0,
      delay:1,
      duration:1
    })
    .to(containerRef.current, { 
     display:"none"
    })
  }
    
        // Scroll event listener
        window.addEventListener('scroll', modelMove);
    
        // Attach the scroll event listener to the IntroRef
     
    
        // Cleanup function
        return () => {
          if (shoe.current) {
            shoe.current.traverse((object) => {
              if (object.isMesh) object.geometry.dispose();
              if (object.material) {
                if (Array.isArray(object.material)) {
                  object.material.forEach((mat) => mat.dispose());
                } else {
                  object.material.dispose();
                }
              }
            });
            scene.current.remove(shoe.current);
          }
    
          if (renderer.current) {
            renderer.current.dispose();
          }
    
          window.removeEventListener('resize', handleResize);
          // window.removeEventListener('scroll', modelMove); // Cleanup scroll event listener
    
        };
      }, []);  // Empty dependency array ensures this effect runs only once
 
  return (
    <>
       {/* <Loader/> */}
    <div className="relative" style={{ overflowY: 'auto', height: '300vh'}}>
      <div className="section" id="banner" >
        <Practice />
      </div>
      <div className="section" id="intro">
        <Pradhum />
      </div>
      <div className="section" id="description">
        <Set2 />
      </div>

      <div
        ref={containerRef}
        id="container3D"
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: '0',
          opacity: '1',
          zIndex:'10',
          display: 'flex',
          pointerEvents: 'none',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </div>
    </>
  );
};

export default IntroSection;
