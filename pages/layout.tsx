import { Projects } from "@/components/home/projects/Projects"
import { Heading } from "@/components/nav/Heading"
import { SideBar } from "@/components/nav/SideBar"
import styles from 'components/home/home.module.scss'
export default function InnerLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.home}>
    <SideBar />
    <main>
      <Heading />
      <Projects />
    </main>
  </div>
  )
}