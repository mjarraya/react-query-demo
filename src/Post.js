import { useEffect, useState } from "react";
import { fetchPost } from "./api";

export const Post = ({
  match: {
    params: { id },
  },
}) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const data = await fetchPost(id);
      setPost(data);

      setIsLoading(false);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
};
