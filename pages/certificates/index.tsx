import { Certificate } from "@/components/home/Certificate/certificate";
import { Heading } from "@/components/nav/Heading";
import { SideBar } from "@/components/nav/SideBar";
import styles from 'components/home/home.module.scss';


export default function Certificates() {
  return (
    <div className={styles.home}>
      <SideBar />
      <main>
        <Heading />
        <Certificate count={100}/>
      </main>
    </div>
  );
}

  
