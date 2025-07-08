import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.result,
      };
    case "ERROR":
      return {
        loading: false,
        error: "There is an Error1",
        post: {},
      };
    default:
      return state;
  }
};

export default function GetPostUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", result: data });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", result: err });
      });
  }, []);

  return (
    <p>
      <h3>
        Title : <span>{state.loading ? "Loading...." : state.post.title}</span>
      </h3>
      {state.error || null}
    </p>
  );
}
