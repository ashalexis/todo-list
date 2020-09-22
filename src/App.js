import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ toggled: !this.state.toggled });
  }

  render() {
    let darkStyle = {
      backgroundColor: this.state.toggled ? "rgb(46, 45, 45)" : "white",
    };
    return (
      <div className="App" style={darkStyle}>
        <div className="App-toggle">
          <label
            className="switch"
            htmlFor="checkbox"
            title="Change color scheme to dark mode"
          >
            <input
              type="checkbox"
              id="checkbox"
              defaultChecked={this.state.toggled}
              onChange={this.handleChange}
            />
            <div className="slider round"></div>
            <div className="toggle-moon">
              <span role="img" aria-label="moon">
                🌙
              </span>
            </div>
            <div className="toggle-sun">
              <span role="img" aria-label="sun">
                ☀️
              </span>
            </div>
          </label>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
