import React from "react";

const Button2 = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}) => {
  return (
    <>
      <Component className={`star-border-container ${className}`} {...rest}>
        <div
          className="border-gradient-bottom h-10"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
        <div
          className="border-gradient-top"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
        <div className="inner-content">{children}</div>
      </Component>

      <style>
        {`
          .star-border-container {
            display: inline-block;
            padding: 1px 0;
            position: relative;
            border-radius: 20px;
            overflow: hidden;
          }

          .border-gradient-bottom {
            position: absolute;
            width: 200%;
            height: 30%;
            opacity: 0.7;
            bottom: -11px;
            right: -250%;
            border-radius: 50%;
            animation: star-movement-bottom linear infinite alternate;
            z-index: 0;
          }

          .border-gradient-top {
            position: absolute;
            opacity: 0.7;
            width: 200%;
            height: 30%;
            top: -10px;
            left: -250%;
            border-radius: 50%;
            animation: star-movement-top linear infinite alternate;
            z-index: 0;
          }

          .inner-content {
            position: relative;
            background: linear-gradient(to bottom, #060606, #111);
            border: 1px solid #222;
            color: white;
            font-size: 16px;
            text-align: center;
            padding: 16px 26px;
            border-radius: 20px;
            z-index: 1;
          }

          @keyframes star-movement-bottom {
            0% {
              transform: translate(0%, 0%);
              opacity: 1;
            }
            100% {
              transform: translate(-100%, 0%);
              opacity: 0;
            }
          }

          @keyframes star-movement-top {
            0% {
              transform: translate(0%, 0%);
              opacity: 1;
            }
            100% {
              transform: translate(100%, 0%);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Button2;
