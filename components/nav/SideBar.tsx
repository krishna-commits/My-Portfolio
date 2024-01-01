import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/router';


export const SideBar = () => {
  const [selected, setSelected] = useState("");
  const router = useRouter();

  
  useEffect(() => {
    // Access the path segments from the URL
    const pathSegments = router.asPath.split('/');

    // Check if 'projects' is one of the path segments
    const hasProjectsSegment = pathSegments.includes('projects');

    console.log(router.asPath.split('/'), hasProjectsSegment)

    if (hasProjectsSegment) {
      console.log('Current project:');
      setSelected('projects')
    }
  }, [router.asPath, router.query.project]);


  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
    >
      <div className={styles.logo}>

      <Image
        className="logo-krishna"
          src="/project-imgs/krishnalogo.png"
          width={45}
          height={45}
          alt="Picture of the author"
      />
      </div>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#"
        onClick={() => {
          setSelected("#");
        }}
        className={selected === "Home" ? styles.selected : ""}
      >
        Home
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#about"
        onClick={() => {
          setSelected("about");
        }}
        className={selected === "about" ? styles.selected : ""}
      >
        About
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#projects"
        onClick={() => setSelected("projects")}
        className={selected === "projects" ? styles.selected : ""}
      >
        Projects
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#Certificate"
        onClick={() => setSelected("Certificate")}
        className={selected === "Certificate" ? styles.selected : ""}
      >
        Certificate
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#contact"
        onClick={() => setSelected("contact")}
        className={selected === "contact" ? styles.selected : ""}
      >
        Contact
      </motion.a>
    </motion.nav>
  );
};
