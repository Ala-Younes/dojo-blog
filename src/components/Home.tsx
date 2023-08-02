import BlogList from "./Blog/List";
import { useFetch } from "../hooks/useFetch";
import { toast } from "react-hot-toast";
const BASIC_URL = import.meta.env.VITE_BASIC_URL;

const Home = () => {
  const {
    data: blogs,
    error,
    isPending,
    setData,
  } = useFetch("http://localhost:8000/blogs");

  const handleDelete = async (id: number) => {
    setData(blogs.filter((blog) => blog.id !== id));
    try {
      const response = await fetch(`${BASIC_URL}/blogs/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Blog Deleted Successfully!");
      } else {
        throw new Error("An error occurred while deleting the blog.");
      }
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
      }
    }
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
