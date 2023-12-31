import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai"
import {RiMenuUnfoldLine} from "react-icons/ri"
import { useRouter } from 'next/router';

export const Heading = () => {
  const router = useRouter();

  const [openMobile, setOpenMobile] = useState(false);
  const [selected, setSelected] = useState("#about");
  const handleMobileViewOpen = () => {
    setOpenMobile(true);
  };
  const handleMobileViewClose = () => {
    setOpenMobile(false);
  };
  const toggleref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleref.current && !toggleref.current.contains(event.target as Node)) {
        setOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleref]);

  useEffect(() => {
    // Your desired path segment
    const pathnameWithoutSlash = router.pathname.replace(/^\//, ''); // Remove the leading forward slash

    // Check if the current pathname includes the desired path segment
    if (router.pathname.includes(pathnameWithoutSlash)) {
      // If yes, set the selected state to the pathname
      setSelected(pathnameWithoutSlash);
    } else {
      // If not, reset the selected state
      setSelected(null);
    }

    console.log(pathnameWithoutSlash)
  }, [router.pathname]);

  return (
    <header className={styles.heading}>
      <MyLinks />
      <div className={styles.mobile}>
        {openMobile ? (
          <AiOutlineClose onClick={handleMobileViewClose} />
        ) : (
            <RiMenuUnfoldLine onClick={handleMobileViewOpen}/>
        )
        }
        <div
          className={
            openMobile
              ? styles.navbarMobileOpenActive
              : styles.navbarMobileOpen
          }
          onClick={handleMobileViewClose}
          ref={toggleref}
        >
          <nav>
            <a
              href="#"
              onClick={() => {
                setSelected("");
              }}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => {
                setSelected("about");
              }}
            >
              About
            </a>
            <a href="#projects" onClick={() => setSelected("projects")}>Projects</a>
            <a
              href="#contact"
              onClick={() => setSelected("contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      </div >
    </header >
  );
};
