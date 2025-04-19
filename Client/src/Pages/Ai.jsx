// src/pages/Ai.jsx
import React, { useEffect } from 'react';

const ChatLoader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.fastbots.ai/embed.js';
    script.setAttribute('bot_id', 'cm7ylbm8202kwn8lt5te80b5w'); // Your bot ID
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return null;
};

const Ai = () => {
  return (
    <div className='  min-h-screen p-4 pt-24 flex flex-col justify-center items-center'>
      <ChatLoader />
      <iframe
        style={{ width: '800px', height: '600px' ,  border: 'none',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
        src="https://app.fastbots.ai/embed/cm7ylbm8202kwn8lt5te80b5w"
      />
    </div>
  );
};

export default Ai;
