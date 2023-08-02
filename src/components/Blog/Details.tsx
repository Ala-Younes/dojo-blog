import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

interface RouteParams {
  id: string;
}

const BlogDetails = () => {
  const { id }: RouteParams = useParams();
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/blogs`);

  const blog = blogs?.find((blog) => blog.id === parseInt(id));
  const history = useHistory();

  const handleDelete = (id: number) => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="pt-8">
      {isPending && <div> {isPending}</div>}
      {error && <div> {error}</div>}
      {blog && (
        <article className="flex flex-col gap-4">
          <h2 className="text-xl text-secondary mb-2">{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>{blog.body}</p>
          <button
            className="rounded-md bg-secondary p-1"
            onClick={() => handleDelete(blog.id)}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
