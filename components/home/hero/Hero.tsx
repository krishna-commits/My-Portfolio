import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { OutlineButton } from "../../buttons/OutlineButton";
import ReactTypingEffect from 'react-typing-effect';
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Krishna Neupane<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span><ReactTypingEffect
              text={["DevSecOps Engineer.", "DevOps Enthusiast.", "Cybersecurity Learner.", "Aspiring Researcher."]}
              speed={40}
              eraseSpeed={40}
              eraseDelay={900}
              typingDelay={300}
            /></span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            Welcome To My Portfolio Site
            <br />
            Let&apos;s Connect !!!
            <br />
            <a
    id="cy-effective-orcid-url"
    className="underline"
     href="https://orcid.org/0009-0004-7787-1573"
     target="orcid.widget"
     rel="me noopener noreferrer"
     >
     <img
        src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
        alt="ORCID iD icon"/>
      https://orcid.org/0009-0004-7787-1573
    </a>
          </p>
        
        </Reveal>
        <Reveal>
          <OutlineButton
          
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </OutlineButton>
        </Reveal>
      </div>
    
      <DotGrid />
    </section>
  );
};
