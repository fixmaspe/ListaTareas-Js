import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { nanoid } from "nanoid";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    const { target, keyCode } = event;
    if (keyCode !== 13) return;

    if (target.value.trim() === "") {
      alert("Input cannot be null");
      return;
    }
    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false,
    };
    this.props.addTodo(todoObj);
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <div className="todo-header-title">
          <h1>LISTA DE TAREAS</h1>
        </div>
        <input
          type="text"
          placeholder="Ingrese tarea y presiona 'Enter' para confirmar"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
