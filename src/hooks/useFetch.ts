import { useEffect, useState } from "react";
import { Blog } from "../data";

export const useFetch = (url: string) => {
  const [data, setData] = useState<Blog[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(`Could not fetch data => res.ok : ${res.ok}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
        setIsPending(false);
      });
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};
