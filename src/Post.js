import { useQuery, useQueryClient } from "react-query";
import { fetchPost } from "./api";

export const Post = ({
  match: {
    params: { id },
  },
}) => {
  const queryClient = useQueryClient();
  const postQuery = useQuery(["posts", id], () => fetchPost(id), {
    initialData: () => {
      return queryClient.getQueryData("posts")?.find((post) => post.id == id); // props.match.params.id is a string and post.id is a number, hence the ==
    },
  });
  const post = postQuery.data;

  return (
    <div>
      {postQuery.isLoading && <p>Loading...</p>}
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
};
