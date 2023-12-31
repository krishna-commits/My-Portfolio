// GitHubRepos.js
import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/krishna-commits/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 p-5">
      {repos.map((repo) => (
        <div key={repo.id} className="bg-white p- rounded-lg ring-1 px-14 py-10 hover:ring-4 hover:cursor-pointer">
          <h3 className="text-[1.8rem] font-semibold mb-4">{repo.name}</h3>
          <p className="text-gray-600 text-[1.5rem]	">{repo.description ? repo.description : 
          `This repository serves as an example for ${repo.name}. Feel free to explore the code, contribute, or use it as a starting point for your own projects.
          `
          }</p>
       
          <div className="mt-4 flex justify-between">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className=" flex text-blue-500 hover:text-blue-900">
              <FaGithub/> 
              <span className='text-[1.3rem] ml-2 hover:underline'>
                View on github
                </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GitHubRepos;
