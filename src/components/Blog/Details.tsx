import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import BlogEdit from "./Edit";

interface RouteParams {
  id: string;
}

const BlogDetails = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { id }: RouteParams = useParams();
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/blogs`);

  const blog = blogs?.find((blog) => blog.id === parseInt(id));

  const handleUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit ? (
        <div className="mt-8 p-8 bg-slate-100">
          {isPending && <div> {isPending}</div>}
          {error && <div> {error}</div>}
          {blog && (
            <article className="flex flex-col gap-4 items-center mx-auto">
              <h2 className="bg-gray-200 w-full">
                <span className="text-black font-bold"> Title : </span>
                {blog.title}
              </h2>
              <p className="bg-gray-300 w-full">
                <span className="text-black text-xl font-bold">
                  Written by :
                </span>
                {blog.author}
              </p>
              <p className="bg-gray-400 w-full">
                <span className="text-black text-xl font-bold">Content :</span>
                {blog.body}
              </p>
              <button className="button max-w-md w-full" onClick={handleUpdate}>
                Update
              </button>
            </article>
          )}
        </div>
      ) : (
        <BlogEdit blog={blog} />
      )}
    </>
  );
};

export default BlogDetails;
