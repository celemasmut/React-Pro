import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  const counterElementRef = useRef<HTMLHeadingElement>(null) 

  useEffect(() => {
    if ( counter < 10) return;
    console.log("ya ta amigaa")

    const timeLine = gsap.timeline();

    timeLine.to(counterElementRef.current, { y: -10 , duration : 0.2, ease: 'ease.out' })
            .to(counterElementRef.current, { y: 0 , duration : 1, ease: 'ease.out' })


}, [counter]);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };
  return (
    <>
      <h1>CounterEffect </h1>
      <h2 ref = {counterElementRef} >{counter}</h2>
      <button onClick={handleClick}> + 1 </button>
    </>
  );
};
 