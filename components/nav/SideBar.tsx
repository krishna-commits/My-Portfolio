import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";


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

  function handleClickNav({route}){
    const pathSegments = router.asPath.split('/');
    console.log(route)
    if(pathSegments.length ==2) {
      if(pathSegments[1] !== ''){
        console.log('inner',`/${route}`)
        // setSelected(`./${route}`);
        router.push(`/#${route}`)

      }
    }else{
      setSelected(`#${route}`);
    }

    if(pathSegments.length ==3) {
      router.push(`/#${route}`)
    }
   
  }

  return (
    <div>
      
     
      <div className="sm:hidden lg:block md:block  justify-center flex">
      <div className={styles.logo}>
        <Link href="/">
        <Image
            className="logo-krishna"
            src="/project-imgs/krishnalogo.png"
            width={45}
            height={45}
            alt="Picture of the author"
        />
        </Link>
      </div>
      </div>

<motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
    >

      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#"
        onClick={() => handleClickNav({ route: "#" })}
        className={selected === "Home" ? styles.selected : ""}
      >
        Home
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#about"
        onClick={() => handleClickNav({ route: "about" })}
        className={selected === "about" ? styles.selected : ""}
      >
        About
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#projects"
        onClick={() => handleClickNav({ route: "projects" })}
        className={selected === "projects" ? styles.selected : ""}
      >
        Projects
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#Certificate"
        onClick={() => handleClickNav({ route: "certificate" })}
        className={selected === "Certificate" ? styles.selected : ""}
      >
        Certificate
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#contact"
        onClick={() => handleClickNav({ route: "contact" })}
        className={selected === "contact" ? styles.selected : ""}
      >
        Contact
      </motion.a>
    </motion.nav>
    </div>
    
  );
};
