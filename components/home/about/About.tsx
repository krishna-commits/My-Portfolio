import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              <span></span>Results-driven DevSecOps professional with a robust background in system and network administration. I am enthusiastic about addressing complex technical challenges, automating tasks, and fostering collaborative team dynamics. My unwavering commitment to problem-solving extends to contributing valuable insights to the data security and privacy landscape. With a focus on identifying and mitigating digital assets, securing information systems, and enhancing overall cybersecurity measures, I am eager to excel as a dedicated, research-oriented professional in the field.
            </p>
          </Reveal>
        </div>
    
        <Stats />
      </div>
    </section>
  );
};
