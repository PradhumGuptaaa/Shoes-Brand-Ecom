import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Loader from './components/Loader.jsx';
import Section1 from './components/Section-1.jsx';
import Section2 from './components/Section-2.jsx';
import Section3 from './components/Section-3.jsx';
import Section4 from './components/Section-4.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroSection2 = () => {
  const containerRef = useRef(null);
  const camera = useRef(null);
  const scene = useRef(null);
  const renderer = useRef(null);
  const shoe = useRef(null);
  const mixer = useRef(null);
  const IntroRef = useRef(null);
  const tl = gsap.timeline();

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
    camera.current.position.set(-45, 0, 2); // Move the camera closer to the model
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
      'shoes.glb', 
      (gltf) => {
        if (shoe.current) return; 

        shoe.current = gltf.scene;
        shoe.current.position.set(-7, -3, 30);
        shoe.current.rotation.set(-1, 0, 0);
        scene.current.add(shoe.current);

  
        if (gltf.animations.length > 0) {
          mixer.current = new THREE.AnimationMixer(shoe.current);
        }

        modelMove(); 
      },
      undefined, 
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
      if (!shoe.current) return; 
    
        tl.to(camera.current.position, {
          x: 0,
          y: 0,
          z: 0,
          scrollTrigger: {
            trigger: "#intro",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
          yoyo:true,
        })
        .to(scene.current.position, {
          x: 35,
          y: 10,
          z: -10,
          scrollTrigger: {
            trigger: "#intro",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
          yoyo:true,
        })
        .to(scene.current.rotation, {
          x: -0.7,
          y: 3.3,
          z: 0,
          scrollTrigger: {
            trigger: "#intro",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
          yoyo:true,
        })
        .to("#container3D", {
         
          scrollTrigger: {
            trigger: "#description", 
            start: "center 80%",       
            end: "bottom bottom",       
            scrub: true,             
          }
        })
        .to("#container3D", {
      
          width:30,
           opacity: 0,
          scrollTrigger: {
            trigger: "#description",  
            start: "top 90%",       
            end: "center bottom",
            scrub: true,            
          },     onComplete: () => {
           
            window.removeEventListener('scroll', modelMove);
          }
        });

    }

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

    };
  }, [camera, scene, tl]);

  return (
    <>
      <Loader /> 
      <div className="relative" >
        <div className="section" id="banner" >
          <Section1 /> 
        </div>
        <div className="section" id="intro">
          <Section2 />
        </div>
        <div className="section" id="description">
          <Section3 />
        </div>
        <div className='m-[20vh]'>
          <Section4/>
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
            zIndex: '10',
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

export default IntroSection2;
