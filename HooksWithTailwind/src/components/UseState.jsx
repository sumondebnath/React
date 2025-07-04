import { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState({
    title: "",
    description: "",
  });

  const { title, description } = todos;

  return (
    <div>
      <p>{title}</p>
      {/* <p>{description}</p> */}
      <label>
        {" "}
        Title :
        <input
          className="border-2 border-sky-600"
          type="text"
          value={title}
          onChange={(event) =>
            setTodos({ ...todos, title: event.target.value })
          }
        />
      </label>
      <br />
      <label>
        {" "}
        Description :
        <textarea
          className="border-2 border-sky-600 mt-3"
          name="todos"
          value={description}
          onChange={(event) =>
            setTodos({ ...todos, description: event.target.value })
          }
        />
      </label>
    </div>
  );
}

export default Todos;
