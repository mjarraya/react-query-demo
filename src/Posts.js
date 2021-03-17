import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchPosts } from "./api";

export const Posts = () => {
  const postsQuery = useQuery("posts", fetchPosts, {
    staleTime: 2000,
  });

  return (
    <div>
      <h2>Posts</h2>
      {postsQuery.isLoading && <p>Loading...</p>}
      <ul>
        {postsQuery.data?.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
