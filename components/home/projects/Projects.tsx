import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Kubernetes-cheatsheet",
    imgSrc: "/project-imgs/kubernetes-cheatsheet.png",
    code: "https://github.com/krishna-commits/krishna-commits/tree/kubernetes-cheat-sheet",
    projectLink: "https://github.com/krishna-commits/krishna-commits/tree/kubernetes-cheat-sheet",
    tech: ["Kubernetes-cheatsheet"],
    description:
      "A cheat sheet for Kubernetes commands.",
    modalContent: (
      <>
        <p>
        A cheat sheet for Kubernetes commands.
        </p>
      </>
    ),
  },
  {
    title: "1Password Vault integration to the Python project",
    imgSrc: "/project-imgs/1password.png",
    code: "https://medium.com/@neupane.krishna33/1password-vault-integration-to-the-python-project-fadb2455d66c",
    projectLink: "https://medium.com/@neupane.krishna33/1password-vault-integration-to-the-python-project-fadb2455d66c",
    tech: ["1password", "Python", "Docker"],
    description:
      "1Password Vault integration can be useful for securely storing and managing sensitive information such as passwords, API keys, and access tokens. ",
    modalContent: (
      <>
        <p>
        By integrating 1Password with a Python project, developers can easily retrieve the required credentials from the vault and use them in their code without having to manually enter them or store them in plain text files, which can be a security risk.
        </p>
      </>
    ),
  },
  // {
  //   title: "Muxik",
  //   imgSrc: "/project-imgs/Muxik.png",
  //   code: "https://github.com/ShivaBhattacharjee/Muxik",
  //   projectLink: "https://muxik.netlify.app/",
  //   tech: ["JavaScript", "ReactJs", "Vite", "Framer-Motion", "TailwindCSS"],
  //   description:
  //     "Muxik is a music streaming and downloading platform developed on ReactJs. It provides users with a wide variety of songs, albums, playlists, and artists across different genres. Users can enjoy a seamless and immersive music listening experience through the platform.",
  //   modalContent: (
  //     <>
  //       <p>
  //         Muxik is a music streaming / downloading site that offers a vast library for streaming and downloading. With a user-friendly interface, you can easily find your favorite song and stream them in high-definition quality. Our platform is updated regularly with the songs, so you can stay up-to-date with your favorite songs.Muxik is the go-to destination for audiophiles who want to stream or download their favorite music anytime, anywhere
  //       </p>
  //       <p>
  //         Users can conveniently batch download their favorite music and enjoy it offline, making it perfect for road trips or areas with limited internet connectivity. Muxik&apos;s Progressive Web Application (PWA) support ensures seamless access across devices without the need for separate installations.
  //       </p>
  //       <p>
  //         Enhancing the listening experience, Muxik allows users to adjust volume levels, auto-skip songs, and repeat tracks with ease. Personalized song recommendations and curated top playlists help users discover new music and diversify their library. With Muxik, users can enjoy a tailored and immersive audio experience, thanks to its volume change feature that adapts to individual preferences.
  //       </p>
  //       <p>
  //         In summary, Muxik offers a convenient solution for music lovers. It provides batch downloading and offline streaming capabilities, along with features like PWA support, volume control, auto-skip, recommended songs, top playlists, and repeat functionality. With Muxik, users can effortlessly enjoy their favorite music, discover new tracks, and personalize their listening experience.
  //       </p>
  //     </>
  //   ),
  // },

  // {
  //   title: "Synthia",
  //   imgSrc: "/project-imgs/Synthia.png",
  //   code: "https://github.com/ShivaBhattacharjee/Synthia",
  //   projectLink: "",
  //   tech: ["Rust"],
  //   description:
  //     "Synthia is a lightweight and beginner-friendly interpreted programming language developed in Rust. With a simple, intuitive syntax and a focus on ease of use, Synthia is perfect for both newcomers to programming and experienced developers looking for a flexible scripting language",
  //   modalContent: (
  //     <>
  //       <p>
  //         Synthia is a powerful and user-friendly programming language designed to make coding accessible to all skill levels. Built on top of Rust, it combines the blazing speed of Rust with a forgiving grammar and intuitive syntax. Say goodbye to complex rules and hello to rapid development.
  //       </p>
  //       <h3>
  //         Synthia Offers
  //       </h3>
  //       <li>
  //         <b>Lightning-Fast Execution</b>: Synthia harnesses the speed and performance of Rust, making it significantly faster than Python for a wide range of applications.
  //       </li>
  //       <li>
  //         <b>Beginner-Friendly</b>: With an easy-to-learn syntax and grammar rules that forgive common mistakes, Synthia is the ideal choice for those new to programming and experienced developers looking for productivity.
  //       </li>
  //       <li>
  //       <b>Built on Rust</b>: Benefit from Rust&apos; memory safety and ecosystem while enjoying the simplicity of Synthia&apos;s syntax.
  //       </li>
  //     </>
  //   ),
  // },
];
