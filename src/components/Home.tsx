import BlogList from "./Blog/List";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const {
    data: blogs,
    error,
    isPending,
    setData,
  } = useFetch("http://localhost:8000/blogs");

  const handleDelete = (id: number) => {
    setData(blogs.filter((blog) => blog.id !== id));
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    });
  };
  return (
    <div className="pt-8">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      <BlogList onDelete={(id) => handleDelete(id)} blogs={blogs} />
    </div>
  );
};

export default Home;
