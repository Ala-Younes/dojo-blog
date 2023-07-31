import BlogList from "./BlogList";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>Loading ...</div>}
      <BlogList blogs={blogs} title={"All blogs"} />
    </>
  );
};

export default Home;
