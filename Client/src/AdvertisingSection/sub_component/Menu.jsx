import React, { useEffect, useRef, useState } from 'react';
import './Menu.css';  // Assuming you have a CSS file to import
import { CiMenuFries } from "react-icons/ci";

const Menu = ({ item, cla }) => {
  const linkRef = useRef(null);  // Only one link ref for "Studio"
  const animationFrameId = useRef(null); // Declare the animationFrameId using useRef
  const [isCursorActive, setIsCursorActive] = useState(false);

  useEffect(() => {
    // Function to animate the cursor and span movement
    const animateit = (e) => {
      const span = e.target.querySelector('span');
      if (span) {
        const { offsetX: x, offsetY: y } = e;
        const { offsetWidth: width, offsetHeight: height } = e.target;

        const move = 15;
        const xMove = (x / width) * (move * 2) - move;
        const yMove = (y / height) * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
      }
    };

    // Use requestAnimationFrame to avoid excessive calls on each mousemove
    const handleMouseMove = (e) => {
      if (isCursorActive) {
        cancelAnimationFrame(animationFrameId.current); // Cancel any previous frame
        animationFrameId.current = requestAnimationFrame(() => {  // Request a new animation frame
          animateit(e);  // Corrected function call here
        });
      }
    };

    if (linkRef.current) {
      linkRef.current.addEventListener('mousemove', animateit);
      linkRef.current.addEventListener('mouseleave', animateit);
      linkRef.current.addEventListener('mouseenter', () => setIsCursorActive(true)); // Activate custom cursor on hover
      linkRef.current.addEventListener('mouseleave', () => setIsCursorActive(false)); // Deactivate custom cursor on hover out
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (linkRef.current) {
        linkRef.current.removeEventListener('mousemove', animateit);
        linkRef.current.removeEventListener('mouseleave', animateit);
        linkRef.current.removeEventListener('mouseenter', () => setIsCursorActive(true));
        linkRef.current.removeEventListener('mouseleave', () => setIsCursorActive(false));
      }
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current); 
    };
  }, [isCursorActive]);

  return (
    <div className="nav-wrapper">
      <nav>
        <a href="#" className="hover-this" ref={linkRef}>
          <span>
            {item.icon ? item.icon : <img src={item.image} alt="menu item" className={` ${cla}`} />}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Menu;
