import { useParams } from "react-router-dom";
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

  return (
    <div className="pt-8">
      {isPending && <div> {isPending}</div>}
      {error && <div> {error}</div>}
      {blog && (
        <article className="flex flex-col gap-4">
          <h2 className="text-xl text-secondary mb-2">{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>{blog.body}</p>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
