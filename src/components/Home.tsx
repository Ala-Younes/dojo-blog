import BlogList from "./Blog/List";
import { useFetch } from "../hooks/useFetch";
import { toast } from "react-hot-toast";
import FilterByAuthor from "./Blog/Filter";
import { useCallback, useEffect, useState } from "react";
import { Blog } from "../data";
const BASIC_URL = import.meta.env.VITE_BASIC_URL;

const Home = () => {
  const {
    data: blogs,
    error,
    isPending,
    setData,
  } = useFetch("http://localhost:8000/blogs");
  // TODO maybe a store to rerender the component whenever the data changes
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([...blogs]);
  const [selectedAuthor, setSelectedAuthor] = useState<string>("all");

  const handleSelect = useCallback(
    (author: string) => {
      setSelectedAuthor(author);
      switch (author.toLowerCase()) {
        case "mario":
          setFilteredBlogs(blogs.filter((blog) => blog.author === "mario"));
          break;
        case "yoshi":
          setFilteredBlogs(blogs.filter((blog) => blog.author === "yoshi"));
          break;
        default:
          setFilteredBlogs(blogs);
          break;
      }
    },
    [blogs, setFilteredBlogs]
  );

  useEffect(() => {
    handleSelect(selectedAuthor);
  }, [handleSelect, selectedAuthor]);

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
      <FilterByAuthor onFilter={handleSelect} />
      <BlogList onDelete={(id) => handleDelete(id)} blogs={filteredBlogs} />
    </div>
  );
};

export default Home;
