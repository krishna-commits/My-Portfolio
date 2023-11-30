import { useEffect } from "react";
import styles from "./dotgrid.module.scss";
import anime from "animejs";
import Image from "next/image";

export const DotGrid = () => {
  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 20;

  const animateDots = (startIndex) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 0.7, easing: "easeOutSine", duration: 250 },
        { value: 0.35, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: startIndex,
      }),
    });
  };

  useEffect(() => {
    animateDots(0);
  }, []);

  const handleDotClick = (e) => {
    const startIndex = parseInt(e.target.dataset.index);
    animateDots(startIndex);
  };

  const dots = [];

  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className={styles.dotWrapper}
          data-index={index}
          key={`${i}-${j}`}
        >
          <div className={`${styles.dot} dot-point`} data-index={index} />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={styles.dotGrid}
    >
       {/* <Image
          className={styles.modalImage}
          src={imgSrc}
          height={300}
          width={660}
          style={{ maxWidth: '100%', height: 'auto' }}
          alt={`An image of the ${title} project.`}
        /> */}
        
      {/* <Image
        src="/project-imgs/Profile.png"
        width={700}
        height={700}
        alt="Picture of the author"

      /> */}
      {dots.map((dot) => dot)}
    </div>
  );
};
