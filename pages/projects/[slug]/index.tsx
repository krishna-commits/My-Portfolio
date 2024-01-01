import { useState } from 'react';
import { Projects } from "@/components/home/projects/Projects";
import { Heading } from "@/components/nav/Heading";
import { SideBar } from "@/components/nav/SideBar";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from 'components/home/home.module.scss';
import { FaGithub, FaMedium, FaResearchgate } from 'react-icons/fa';
import GitHubRepos from '@/components/pages/github-projects';
import MediumPosts from '@/components/pages/medium';

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState('github', 'medium'); // Default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.home}>
      <SideBar />
      <main>
        <Heading />
        <section className="page-wrapper">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-center">
        
              <li className="me-2">
                <a
                  href="#"
                  onClick={() => handleTabClick('researchGate')}
                  className={`inline-flex items-center justify-center p-4 text-blue-600 border-b-2 ${
                    activeTab === 'researchGate' ? 'border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group' : ''
                  }`}
                  aria-current={activeTab === 'researchGate' ? 'page' : undefined}
                >
                  <svg
                    className={`w-10 h-10 me-2 text-blue-600 dark:text-blue-500 ${
                      activeTab === 'researchGate' ? '' : 'group-hover:text-blue-500 dark:group-hover:text-blue-300'
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                   <FaResearchgate size="1.7rem" />
                  </svg>
                  Research Gate
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  onClick={() => handleTabClick('github')}
                  className={`inline-flex items-center justify-center p-4 text-blue-600 border-b-2 ${
                    activeTab === 'github' ? 'border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group' : ''
                  }`}
                  aria-current={activeTab === 'github' ? 'page' : undefined}
                >
                  <svg
                    className={`w-10 h-10 me-2 text-blue-600 dark:text-blue-500 ${
                      activeTab === 'github' ? '' : 'group-hover:text-blue-500 dark:group-hover:text-blue-300'
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                <FaGithub size="1.7rem" />
                  </svg>
                  github
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  onClick={() => handleTabClick('medium')}
                  className={`inline-flex items-center justify-center p-4 text-blue-600 border-b-2 ${
                    activeTab === 'medium' ? 'border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group' : ''
                  }`}
                  aria-current={activeTab === 'medium' ? 'page' : undefined}
                >
                  <svg
                    className={`w-10 h-10 me-2 text-blue-600 dark:text-blue-500 ${
                      activeTab === 'medium' ? '' : 'group-hover:text-blue-500 dark:group-hover:text-blue-300'
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                <FaMedium size="1.7rem" />
                  </svg>
                  medium
                </a>
              </li>
            </ul>
          </div>

          {/* Render tab content based on activeTab */}
          {activeTab === 'github' && <GitHubRepos />}
          {activeTab === 'medium' && <MediumPosts />}
          {activeTab === 'researchGate' && <div>Research Gate Content</div>}
        </section>
      </main>
    </div>
  );
}
