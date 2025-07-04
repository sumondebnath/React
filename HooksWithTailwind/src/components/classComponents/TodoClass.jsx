import React from "react";

class Todo extends React.Component {
  state = {
    todo: "",
    warning: null,
  };

  handleInput = (event) => {
    const inputValue = event.target.value;
    const warning = inputValue.includes(".js")
      ? "You need JavaScript skill to complete the task. Do you have it?"
      : null;

    this.setState({
      todo: inputValue,
      warning: warning,
    });
  };

  render() {
    const { todo, warning } = this.state;

    return (
      <div>
        <p>{todo}</p>
        <p>
          <textarea
            className="border-2 border-sky-500"
            name="todo"
            value={todo}
            onChange={this.handleInput}
          />
        </p>
        <hr />
        <h2 className="text-red-700">{warning}</h2>
      </div>
    );
  }
}

export default Todo;
