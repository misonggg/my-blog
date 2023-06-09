'use client'

import React, { useState, useEffect } from 'react';

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="mouse-follower">
      <style jsx>{`
        .mouse-follower {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .circle {
          position: absolute;
          width: 15px;
          height: 15px;
          background-color: #FFD700;
          border-radius: 50%;
        }
      `}</style>

      <div
        className="circle"
        style={{ top: position.y, left: position.x }}
      ></div>
    </div>
  );
};

export default MouseFollower;
