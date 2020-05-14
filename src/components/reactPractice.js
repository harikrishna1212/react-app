import React from "react";
import ReactDOM from "react-dom"
class SearchCity extends React.Component {
  constructor(props) {
    super(props);
    this.city = "";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.city = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.city} onChange={this.handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}
ReactDOM.render(<SearchCity />, document.getElementById("root"));