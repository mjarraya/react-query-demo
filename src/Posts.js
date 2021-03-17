import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "./api";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const data = await fetchPosts();
      setPosts(data);

      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {isLoading && <p>Loading...</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
