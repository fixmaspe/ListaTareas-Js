import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "Gimnasio", done: true },
      { id: "002", name: "Hora medico", done: true },
      { id: "003", name: "Clases", done: false },
    ],
  };

  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({
      todos: newTodos,
    });
  };

  toggleTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done };
      else return todo;
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: newTodos,
    });
  };

  checkAll = (alldone) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done: alldone };
    });
    this.setState({ todos: newTodos });
  };

  deleteCompleted = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return !todo.done;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    const total = todos.length;
    const completed = todos.filter((todo) => {
      return todo.done === true;
    }).length;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            total={total}
            completed={completed}
            checkAll={this.checkAll}
            deleteCompleted={this.deleteCompleted}
          />
        </div>
      </div>
    );
  }
}
