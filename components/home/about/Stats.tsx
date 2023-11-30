
import { motion } from 'framer-motion';
import styles from "./stats.module.scss";
import { IoCloud } from "react-icons/io5";
import { Reveal } from "@/components/utils/Reveal";
import { FaDocker } from "react-icons/fa";
import { IoInfiniteSharp } from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import { CiVault } from "react-icons/ci";
import { IoChatboxEllipsesSharp } from "react-icons/io5";



const SkillCategory = ({ title, children }) => (
  <motion.div
    className={styles.skillCategory}
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h4>
      {
        title === "Cloud Platform" &&
        <IoCloud size="2.4rem" color="var(--brand)" />
      }
      {
        title === "Containerization and Orchestration" &&
        <FaDocker size="2.4rem" color="var(--brand)" />
      }
        {
        title === "CI/CD Code Repository" &&
        <IoInfiniteSharp size="2.4rem" color="var(--brand)" />
      }
         {
        title === "Logging and Monitoring" &&
        <IoAnalyticsSharp size="2.4rem" color="var(--brand)" />
      }
         {
        title === "Scripting" &&
        <BsCodeSlash size="2.4rem" color="var(--brand)" />
      }
         {
        title === "Database" &&
        <FaDatabase size="2.4rem" color="var(--brand)" />
      }
         {
        title === "Infranstracture as a Code" &&
        <SiTerraform size="2.4rem" color="var(--brand)" />
      }
         {
        title === "Security/Secret" &&
        <CiVault size="2.4rem" color="var(--brand)" />
      }
         {
        title === "Communication" &&
        <IoChatboxEllipsesSharp size="2.4rem" color="var(--brand)" />
      }




      {/* <AiFillCode size="2.4rem" color="var(--brand)" /> */}
      <span>{title}</span>
    </h4>
    <div className={styles.statGrid}>{children}</div>
  </motion.div>
);

const Skill = ({ name }) => (
  <motion.span
    className="chip"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {name}
  </motion.span>
);

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
        <h4>
          
          <h3 className={styles.skillHeader}>Technical Skills </h3>
        </h4>
          <SkillCategory title="Cloud Platform">
            <Skill name="AWS Cloud" />
            <Skill name="Google Cloud platform" />
            <Skill name="Azure" />
            <Skill name="Heroku" />
          </SkillCategory>

          <SkillCategory title="Containerization and Orchestration">
            <Skill name="Docker" />
            <Skill name="Kubernetes" />
            <Skill name="AWS ECS" />
            <Skill name="HEROKU" />
            <Skill name="Helm Chart" />
            <Skill name="Azure Container Apps" />
          </SkillCategory>

          <SkillCategory title="CI/CD Code Repository">
            <Skill name="Github Action" />
            <Skill name="Jenkins" />
            <Skill name="Gitlab Pipelines" />
            <Skill name="Bitbucket Pipelines" />
            <Skill name="AWS CodeBuild" />
            <Skill name="AWS CodePipeline" />
          </SkillCategory>

          <SkillCategory title="Scripting">
            <Skill name="Python" />
            <Skill name="Bash" />
          </SkillCategory>

          <SkillCategory title="Logging and Monitoring">
            <Skill name="Loki stack" />
            <Skill name="CloudWatch" />
            <Skill name="ELK" />
            <Skill name="Grafana" />
          </SkillCategory>


          <SkillCategory title="Database">
            <Skill name="MongoDB" />
            <Skill name="RDS" />
            <Skill name="PostgresSql" />
            <Skill name="DynamoDB" />
          </SkillCategory>

          <SkillCategory title="Infranstracture as a Code">
            <Skill name="Terraform" />
            <Skill name="Terragrunt" />
            <Skill name="Cloudformation" />
          </SkillCategory>

          <SkillCategory title="Security/Secret">
            <Skill name="1password" />
            <Skill name="CloudFlare" />
            <Skill name="SonarCloud" />
            <Skill name="SonarQube" />
            <Skill name="Vault" />
          </SkillCategory>

          <SkillCategory title="Communication">
            <Skill name="Slack" />
            <Skill name="Atlassian Product" />
            <Skill name="Teams" />
            <Skill name="Zoom" />
            <Skill name="SendGrid" />
          </SkillCategory>
        </div>
      </Reveal>
    </div>
  );
};
