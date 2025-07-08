import { useState, useReducer, useEffect } from "react";

export default function GetPostUseState() {
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setLoding(false);
        setError("");
        setPost(data);
      })
      .catch(() => {
        setLoding(false);
        setError("There Was a Error!");
        setPost({});
      });
  }, []);

  return (
    <p>
      <h3>
        Title : <span>{loading ? "Loading...." : post.title}</span>
      </h3>
      {error || null}
    </p>
  );
}
