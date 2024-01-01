import { useState, useEffect } from 'react';
import { FaMedium } from 'react-icons/fa';

const MediumPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@neupane.krishna33`);
        const data = await response.json();
        setPosts(data.items);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 p-5">
      {posts.map((post) => (
        <div key={post.guid} className="bg-white p- rounded-lg ring-1 px-14 py-10 hover:ring-4 hover:cursor-pointer">
          <h3 className="text-[1.8rem] font-semibold mb-4">{post.title}</h3>

          <div className="mt-4 flex justify-between">
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex text-blue-500 hover:text-blue-900">
              <span className='text-[1.3rem] ml-2 hover:underline'>
                Read on Medium
              </span>
              <FaMedium />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediumPosts;
