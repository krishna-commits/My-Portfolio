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
    title: "Continuous Automation with DevOps practices for Threat Detection",
    imgSrc: "/project-imgs/3-6-phases-of-the-Software-development-lifecycle-Shifting-left-on-security.jpg",
    code: "",
    projectLink: "https://www.researchgate.net/publication/376238145_Continuous_Automation_with_DevOps_practices_for_Threat_Detection",
    tech: ["DevOps", "Python", "Bitbucket", "Kubernetes", "AWS CLoud", "Docker"],
    description:
      "The risk of cyber assaults rises as firms expand and rely more heavily on technology. Breach of cybersecurity can result in considerable monetary losses, reputational harm, and legal liabilities. ",
    modalContent: (
      <>
        <p>
        The risk of cyber assaults rises as firms expand and rely more heavily on technology. Breach of cybersecurity can result in considerable monetary losses, reputational harm, and legal liabilities.
        </p>
      </>
    ),
  },
  {
    title: "Automatic Bitbucket Pipeline-To-Kubernetes",
    imgSrc: "/project-imgs/bitbucket-pipeline.png",
    code: "https://github.com/krishna-commits/automation-bitbucket-to-kubernetes-deployment",
    projectLink: "https://project.neupanekrishna.com.np/automatic-bitbucket-pipeline-to-kubernetes",
    tech: ["Automation", "Bitbucket", "bitbucket-pipelines", "Kubernetes", "AWS", "AWS-ECR"],
    description:
      "Automating the deployment process from Bitbucket Pipelines to Kubernetes involves setting up a continuous integration/continuous deployment (CI/CD) pipeline.",
    modalContent: (
      <>
        <p>
        Automating the deployment process from Bitbucket Pipelines to Kubernetes.
        </p>
      </>
    ),
  },
  {
    title: "centralize logs with rsyslog logstash elasticsearch and kibana",
    imgSrc: "/project-imgs/centrilized .png",
    code: "https://project.neupanekrishna.com.np/how-to-centralize-logs-with-rsyslog-logstash-elasticsearch-and-kibana-on-ubuntu-2004",
    projectLink: "https://project.neupanekrishna.com.np/how-to-centralize-logs-with-rsyslog-logstash-elasticsearch-and-kibana-on-ubuntu-2004",
    tech: ["Centralize", "logs", "rsyslog", "logstash", "elasticsearch", "kibana", "ubuntu 20.04"],
    description:
      "How to centralize logs with rsyslog logstash elasticsearch and kibana on Ubuntu 20.04",
    modalContent: (
      <>
        <p>
        How to centralize logs with rsyslog logstash elasticsearch and kibana on Ubuntu 20.04.
        </p>
      </>
    ),
  },
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
  {
    title: "Create AWS ECS using terraform script.",
    imgSrc: null,
    code: "https://github.com/krishna-commits/aws_ecs_using_terraform",
    projectLink: "https://medium.com/@neupane.krishna33/create-aws-ecs-using-terraform-script-be140caf10ad",
    tech: ["AWS","Terraform","ECS"],
    description:
      "Creating an Amazon Elastic Container Service (ECS) using Terraform involves defining the infrastructure as code and deploying it to AWS. Terraform scripts can be used to create and manage all the resources required for an ECS, including the cluster, tasks, services, load balancers, and networking components. Terraform automates the process of provisioning and configuring the resources, which can help reduce errors and improve the efficiency of the deployment process.",
    modalContent: (
      <>
      </>
    ),
  },

  {
    title: "How to Install Apache Kafka and rsyslog on Ubuntu 20.04",
    imgSrc: null,
    code: "",
    projectLink: "https://medium.com/@neupane.krishna33/how-to-install-apache-kafka-and-rsyslog-on-ubuntu-20-04-90fea750d8f5",
    tech: ["Apache", "Kafka", "Rsyslog", "Ubuntu"],
    description:
      "Install Apache Kafka and rsyslog on Ubuntu 20.04",
    modalContent: (
      <>
      </>
    ),
  },
];
