import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = {
    mouse: false,
  };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleCheck = (id) => {
    return (event) => {
      this.props.toggleTodo(id, event.target.checked);
    };
  };

  handleClick = (id) => {
    return () => {
      if (window.confirm("Are you sure? ")) {
        this.props.deleteTodo(id);
      }
    };
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <div>
        <li
          style={{ backgroundColor: mouse ? "#ddd" : "white" }}
          onMouseLeave={this.handleMouse(false)}
          onMouseEnter={this.handleMouse(true)}
        >
          <label>
            <input
              type="checkbox"
              checked={done}
              onChange={this.handleCheck(id)}
            />
            <span>{name}</span>
          </label>
          <button
            className="btn btn-danger"
            style={{ display: mouse ? "block" : "none" }}
            onClick={this.handleClick(id)}
          >
            Borrar
          </button>
        </li>
      </div>
    );
  }
}
