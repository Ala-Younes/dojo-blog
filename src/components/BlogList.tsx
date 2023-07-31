import { Blog } from "../data";

interface BlogListProps {
  blogs: Blog[];
  title: string;
  onDelete: (id: number) => void;
}

const BlogList = ({ blogs, title, onDelete }: BlogListProps) => {
  const handleDelete = (id: number): void => {
    onDelete(id);
  };

  return (
    <div className="pt-12 text-3xl">
      <div>{title}</div>
      <div className="pt-8 flex flex-col gap-12 ml-8">
        {blogs.map(({ id, author, body, title }) => (
          <div key={id}>
            <h3 className="text-xl text-secondary font-bold">{title}</h3>
            <div className="text-lg ml-1">
              <p>
                Written by <span className="font-bold"> {author} </span>
              </p>
              <p>{body}</p>
            </div>
            <button className="button" onClick={() => handleDelete(id)}>
              Delete Blog
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
