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
    <>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.length > 0 ? (
          blogs.map(({ id, author, title }) => (
            <Link to={`/blogs/${id}`} key={id} className="">
              <div className=" px-3 py-4 mx-5 ring ring-black shadow-2xl hover:bg-gray-200 rounded-2xl">
                <h2>{title}</h2>
                <p className="pb-2">Written by {author}</p>
                <Link
                  to={"/"}
                  className="button"
                  onClick={() => handleDelete(id)}
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
    </>
  );
};

export default BlogList;
