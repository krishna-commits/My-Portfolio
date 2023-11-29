import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  const handleDownloadResume = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "https://drive.google.com/file/d/1gXouzlvnYdu0MQJSCyU4nDyPZJ-CMHlg/view?usp=sharing";
    downloadLink.download = "Krishna_Neupane_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              <span>Hi</span> There! My name is Krishna Neupane, DevSecOps with experience in system, network and security. Interested in solving technical blockers, troubleshooting systems, understanding complex systems to simplify, automating tasks, fostering team, and their capabilities. Have a habit of challenging the problem until it cracks. Collaborate with teams to set up infrastructure needs like automation, scaling, load-balancing, and containers. Gives equal importance to life as to work. Driven individual with the ability to adapt to any situation and a proven potential to grow self and others.
            </p>
          </Reveal>
          {/* <button onClick={handleDownloadResume} className={styles.downloadButton}>
            Download Resume
          </button> */}
        </div>
    
        <Stats />
      </div>
    </section>
  );
};
