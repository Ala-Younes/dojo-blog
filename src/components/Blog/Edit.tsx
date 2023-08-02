import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Blog } from "../../data";
import toast from "react-hot-toast";

interface BlogEditProps {
  blog?: Blog;
}
const BASIC_URL = import.meta.env.VITE_BASIC_URL;

const BlogEdit = ({ blog }: BlogEditProps) => {
  const [title, setTitle] = useState(blog?.title);
  const [body, setBody] = useState(blog?.body);
  const [author, setAuthor] = useState(blog?.author);
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    const updatedBlog = { title, body, author };

    try {
      const response = await fetch(`${BASIC_URL}/blogs/${blog?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBlog),
      });

      if (response.ok) {
        setIsPending(false);
        history.push("/");
        toast.success("Blog updated successfully!");
      } else {
        throw new Error("An error occurred while updating the blog.");
      }
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
      }
      setIsPending(false);
    }
  };

  return (
    <div className="pt-8 my-auto text-center flex flex-col items-center justify-center gap-8">
      <h2>Update Blog</h2>
      <form className="w-96" onSubmit={handleSubmit}>
        <label className="text-left block">Blog title:</label>
        <input
          className="w-full px-2 py-4 rounded-lg border border-gray-300"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="text-left block">Blog body:</label>
        <textarea
          className="w-full px-2 py-4 rounded-lg border border-gray-300"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label className="text-left block">Blog author:</label>
        <select
          className="w-full py-2 rounded-lg border border-gray-300"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending ? (
          <button className="button mt-8">Update</button>
        ) : (
          <>
            <button className="button mt-8">Updating Blog ...</button>
          </>
        )}
      </form>
    </div>
  );
};

BlogEdit.defaultProps = {
  blog: { title: "", body: "", author: "mario" },
};

export default BlogEdit;
