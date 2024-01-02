import { useEffect } from "react";
import styles from "./dotgrid.module.scss";
import anime from "animejs";
import Image from "next/image";
import Lottie from "react-lottie-player";
import { lottieJSON } from "@/constants/lottie";

export const DotGrid = () => {
  // const GRID_WIDTH = 25;
  // const GRID_HEIGHT = 20;

  const lotieJSON:any='https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json'
  console.log(lotieJSON)
  // const animateDots = (startIndex) => {
  //   anime({
  //     targets: ".dot-point",
  //     scale: [
  //       { value: 1.35, easing: "easeOutSine", duration: 250 },
  //       { value: 1, easing: "easeInOutQuad", duration: 500 },
  //     ],
  //     translateY: [
  //       { value: -15, easing: "easeOutSine", duration: 250 },
  //       { value: 1, easing: "easeInOutQuad", duration: 500 },
  //     ],
  //     opacity: [
  //       { value: 0.7, easing: "easeOutSine", duration: 250 },
  //       { value: 0.35, easing: "easeInOutQuad", duration: 500 },
  //     ],
  //     delay: anime.stagger(100, {
  //       grid: [GRID_WIDTH, GRID_HEIGHT],
  //       from: startIndex,
  //     }),
  //   });
  // };

  // useEffect(() => {
  //   animateDots(0);
  // }, []);

  // const handleDotClick = (e) => {
  //   const startIndex = parseInt(e.target.dataset.index);
  //   animateDots(startIndex);
  // };

  // const dots = [];

  // let index = 0;

  // for (let i = 0; i < GRID_WIDTH; i++) {
  //   for (let j = 0; j < GRID_HEIGHT; j++) {
  //     dots.push(
  //       <div
  //         onClick={handleDotClick}
  //         className={styles.dotWrapper}
  //         data-index={index}
  //         key={`${i}-${j}`}
  //       >
  //         <div className={`${styles.dot} dot-point`} data-index={index} />
  //       </div>
  //     );
  //     index++;
  //   }
  // }

  return (
    <div
      // style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      // className={styles.dotGrid}
    >
       {/* <Image
          className={styles.modalImage}
          src={imgSrc}
          height={300}
          width={660}
          style={{ maxWidth: '100%', height: 'auto' }}
          alt={`An image of the ${title} project.`}
        /> */}
{/* <div style={{ marginLeft: 'auto', width: '50%', height: 600 }}></div> */}
<Lottie
      loop
      animationData={lottieJSON}
      play
      style={{ marginLeft: 'auto', width: 600, height: 500 }}
    />
        
    
      {/* {dots.map((dot) => dot)} */}
    </div>
  );
};
