import { useState } from "react";
import { useHistory } from "react-router-dom";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="max-w-md my-auto text-center">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label className="text-left block">Blog title:</label>
        <input
          className="w-full px-2 py-4 rounded-lg border border-[#ddd]"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="text-left block">Blog body:</label>
        <textarea
          className="w-full px-2 py-4 rounded-lg border border-[#ddd]"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label className="text-left block">Blog author:</label>
        <select
          className="w-full py-2 rounded-lg border border-[#ddd]"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending ? (
          <button className="button">Add Blog</button>
        ) : (
          <button className="button">Adding Blog ...</button>
        )}
      </form>
    </div>
  );
};

export default BlogCreate;
