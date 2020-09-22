import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(window.localStorage.getItem("todos") || "[]"),
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  create(newTodo) {
    this.setState(
      (st) => ({
        todos: [...this.state.todos, newTodo],
      }),
      () =>
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  }

  remove(id) {
    this.setState(
      (st) => ({
        todos: this.state.todos.filter((todo) => todo.id !== id),
      }),
      () =>
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState(
      (st) => ({ todos: updatedTodos }),
      () =>
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  }

  toggleComplete(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState(
      (st) => ({ todos: updatedTodos }),
      () =>
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={this.remove}
          updateTodo={this.update}
          completed={todo.completed}
          toggleTodo={this.toggleComplete}
        />
      );
    });
    return (
      <div className="TodoList">
        <h1>
          My Todo List <i className="fas fa-book-open"></i>
        </h1>

        <TodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
