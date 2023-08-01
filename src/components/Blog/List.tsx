import { Link } from "react-router-dom";
import { Blog } from "../../data";

interface BlogListProps {
  blogs: Blog[];
  // onDelete: (id: number) => void;
}

const BlogList = ({ blogs }: BlogListProps) => {
  // const handleDelete = (id: number): void => {
  //   onDelete(id);
  // };

  return (
    <div className="flex flex-col gap-8">
      {blogs.map((blog) => (
        <div
          className=" px-3 py-4 mx-5 border-b border-primary shadow-xl hover:bg-gray-50"
          key={blog.id}
        >
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="text-xl text-secondary mb-4">{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          <button className="rounded-md bg-secondary p-1">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
