import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import { Blog } from "../data";

import initialBlogs from "../data";
const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);

  const handleDelete = (id: number): void => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);

  return <BlogList blogs={blogs} title={"All blogs"} onDelete={handleDelete} />;
};

export default Home;
