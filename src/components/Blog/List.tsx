import { Link } from "react-router-dom";
import { Blog } from "../../data";

interface BlogListProps {
  blogs: Blog[];
  onDelete: (id: number) => void;
}

const BlogList = ({ blogs, onDelete }: BlogListProps) => {
  const handleDelete = (id: number): void => {
    onDelete(id);
  };

  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className="">
            <div className=" px-3 py-4 mx-5 border-b border-primary shadow-xl hover:bg-gray-200">
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
              <Link
                to={"/"}
                className="button"
                onClick={() => handleDelete(blog.id)}
              >
                Delete
              </Link>
            </div>
          </Link>
        ))
      ) : (
        <Link
          to={"/create"}
          className="text-2xl pt-8 hover:underline underline-offset-8 md:col-span-2 lg:col-span-3 text-center"
        >
          📝 Please Add a Blog 🖊️
        </Link>
      )}
    </div>
  );
};

export default BlogList;
