import React, { Component } from "react";
import ReactDOM from "react-dom";
import ToDo from "./ToDo";
import ToDoMap from "./ToDoMap";
import Counter from "./counter";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ToDoMap
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
    console.log("changed", id);
  }

  render() {
    const todoItems = this.state.todos.map(items => (
      <ToDo
        id={items.id}
        item={items.item}
        key={items.id}
        handleChange={this.handleChange}
      />
    ));

    return (
      <div>
        {todoItems}
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
