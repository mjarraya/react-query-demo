import { Link } from "react-router-dom";
import { fetchPosts, createPost } from "./api";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useState } from "react";

export const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postsQuery = useQuery("posts", fetchPosts);

  const queryClient = useQueryClient();
  const mutation = useMutation((newPost) => createPost(newPost), {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    mutation.mutate({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>New Post</h2>
      <div className="new-post-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              value={content}
              onChange={({ target: { value } }) => setContent(value)}
            />
          </div>
          <button type="submit">Create</button>
        </form>
        {postsQuery.isLoading && <p>Loading...</p>}
        <ul>
          {postsQuery.data?.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
