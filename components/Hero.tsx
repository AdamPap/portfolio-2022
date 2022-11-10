import React from "react";

const Hero = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center mt-32">
          <div className="flex justify-between mb-5">
            <h1 className="hero-heading">Full Stack</h1>
            <h2 className="text-base self-end regular-text">portfolio@2022</h2>
          </div>
          <h1 className="hero-heading self-end">Web Developer</h1>
        </div>
        <div className="flex justify-between 1-full mt-20">
          <div className="font-bold uppercase text-[16px] flex self-end">
            <div className="h-[60px] border-2 border-crimson mr-2"></div>
            <p className="self-center">
              Scroll <br /> Down
            </p>
          </div>
          <div>
            <p className="regular-text">Hi, i am Adam.</p>
            <p className="regular-text">
              I enjoy building web applications <br /> with typescript and
              react.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
