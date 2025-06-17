import React from "react";

export default class Form extends React.Component {
  state = {
    name: "JavaScript",
    text: "",
    library: "",
    isChecked: false,
  };

  handleChange = (event) => {
    // console.log(event.target.type);
    // this.setState({
    //   name: event.target.value,
    //   text: event.target.value,
    // });

    let type = event.target.type;

    if (type === "text") {
      this.setState({
        name: event.target.value,
      });
    } else if (type === "textarea") {
      this.setState({
        text: event.target.value,
      });
    } else if (type === "select-one") {
      this.setState({
        library: event.target.value,
      });
    } else if (type === "checkbox") {
      this.setState({
        isChecked: event.target.checked,
      });
      console.log(" is checkbox");
    } else {
      console.log(type);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, text, library, isChecked } = this.state;

    console.log(name, text, library, isChecked, "all are Submited!");
  };

  render() {
    const { name, text, library, isChecked } = this.state;
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="">
              Name
              <input
                type="text1"
                placeholder="Enter Title: "
                value={name}
                onChange={this.handleChange}
              />
            </label>
            <p>{name}</p>

            <br />

            <label htmlFor="">
              Textarea
              <textarea
                name="text"
                id=""
                rows={8}
                cols={30}
                placeholder="Type Here : "
                value={text}
                onChange={this.handleChange}
              ></textarea>
            </label>

            <br />
            <br />

            <label htmlFor="">
              pick one
              <select
                name=""
                id=""
                value={library}
                onChange={this.handleChange}
              >
                <option value="React">React</option>
                <option value="Vue">Vue</option>
              </select>
            </label>

            <br />
            <br />

            <label htmlFor="">
              Human or Robot
              <input
                type="checkbox"
                name=""
                id=""
                checked={isChecked}
                onChange={this.handleChange}
              />
            </label>

            <br />
            <br />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}
