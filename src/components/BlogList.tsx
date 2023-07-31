import { Blog } from "../data";

interface BlogListProps {
  blogs: Blog[];
  title: string;
  // onDelete: (id: number) => void;
}

const BlogList = ({ blogs, title }: BlogListProps) => {
  // const handleDelete = (id: number): void => {
  //   onDelete(id);
  // };

  return (
    <div className="pt-12 text-3xl">
      {blogs.length > 0 && <div>{title}</div>}
      <div className="pt-8 flex flex-col gap-12 md:ml-8">
        {blogs?.length > 0 &&
          blogs.map((blog) => (
            <div key={blog.id}>
              <h3 className="text-xl text-secondary font-bold">{blog.title}</h3>
              <div className="text-lg md:ml-1">
                <p>
                  Written by <span className="font-bold"> {blog.author} </span>
                </p>
                <p>{blog.body}</p>
              </div>
              <button className="button" onClick={() => console.log(blog.id)}>
                Delete Blog
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
