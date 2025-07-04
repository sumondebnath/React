import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  const handleInput = (event) => {
    const inputValue = event.target.value;
    const updatedWarning = inputValue.includes(".js")
      ? "You need JavaScript skill to complete the task. Do you have it?"
      : null;

    setTodo(inputValue);
    setWarning(updatedWarning);
  };

  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea
          className="border-2 border-sky-500"
          name="todo"
          value={todo}
          onChange={handleInput}
        />
      </p>
      <hr />
      <h2 className="text-red-700">{warning}</h2>
    </div>
  );
}

export default Todo;
