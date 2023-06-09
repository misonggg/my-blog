// Bubble.tsx
import React from 'react';

interface BubbleProps {
  className?: string;
}

const Bubble: React.FC<BubbleProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <style jsx>{`
        .bubbling-bubbles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .bubble-scale-1 {
          position: absolute;
          width: 70px;
          height: 70px;
          background-color: #ffd700;
          border-radius: 50%;
          animation: bounce 3s infinite;
          opacity: 0.6;
        }

        .bubble-scale-2 {
          position: absolute;
          width: 80px;
          height: 80px;
          background-color: #ffd700;
          border-radius: 50%;
          animation: bounce 3s infinite;
          opacity: 0.5;
        }

        .bubble-scale-3 {
          position: absolute;
          width: 100px;
          height: 100px;
          background-color: #ffd700;
          border-radius: 50%;
          animation: bounce 3s infinite;
          opacity: 0.5;
        }

        .bubble-scale-4 {
          position: absolute;
          width: 130px;
          height: 130px;
          background-color: #ffd700;
          border-radius: 50%;
          animation: bounce 3s infinite;
          opacity: 0.3;
        }

        .bubble1 {
          top: 20%;
          left: 25%;
          animation-delay: 0.2s;
        }

        .bubble2 {
          top: 50%;
          left: 40%;
          animation-delay: 0.4s;
        }

        .bubble3 {
          top: 70%;
          left: 70%;
          animation-delay: 0.6s;
        }

        .bubble4 {
          top: 30%;
          left: 90%;
          animation-delay: 0.8s;
        }

        .bubble5 {
          top: 80%;
          left: 5%;
          animation-delay: 0.8s;
        }

        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-50px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="bubbling-bubbles z-0">
        <div className="bubble-scale-3 bubble1"></div>
        <div className="bubble-scale-1 bubble2"></div>
        <div className="bubble-scale-4 bubble3"></div>
        <div className="bubble-scale-2 bubble4"></div>
        <div className="bubble-scale-1 bubble5"></div>
      </div>
    </div>
  );
};

export default Bubble;
