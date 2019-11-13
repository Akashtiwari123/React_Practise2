import React, { Component } from "react";
import ReactDOM from "react-dom";
import ToDo from "./ToDo";
import ToDoMap from "./ToDoMap";
import "./styles.css";

class App extends React.Component {
  state = {
    ct: 0
  };
  Handle() {
    this.setState({ ct: 2 });
  }
  render() {
    const todoItems = ToDoMap.map(items => (
      <ToDo item={items.item} id={items.id} />
    ));

    return (
      <div>
        <p>{this.state.ct}</p>
        <br />
        <button onClick={this.Handle}>Click Me</button>
        {todoItems}
        <h1>Id: {this.state.id}</h1>
        <Header username={this.state.name} />
        <Greeting />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <p>Hi this header {this.props.username}</p>;
  }
}

class Greeting extends Component {
  render() {
    return <p>Hi this is footer</p>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
