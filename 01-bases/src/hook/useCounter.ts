import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setCounter] = useState(5);

  const elementToAnimate = useRef<any>(null);

  const timeLine = useRef(gsap.timeline());

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    timeLine.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: "ease.out" })
      .pause();
  }, []);

  useEffect(() => {
    if (counter < maxCount) return; 
    timeLine.current.play(0);
  }, [counter]);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
