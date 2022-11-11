import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
    gsap.set(followerRef.current, { xPercent: -50, yPercent: -50 });

    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });

      gsap.to(followerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.9,
      });
    });
  }, []);

  return (
    <div>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </div>
  );
};

export default CustomCursor;
