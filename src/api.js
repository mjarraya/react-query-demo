const fetchPosts = async () => (await fetch("/posts")).json();

const fetchPost = async (id) => (await fetch(`/posts/${id}`)).json();

const createPost = async (post) =>
  (
    await fetch("/posts", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
  ).json();

export { fetchPosts, fetchPost, createPost };
