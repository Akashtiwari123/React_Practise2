import React, { Component } from "react";
import "./styles.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      ct: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState(prevState => {
      return {
        ct: prevState.ct + 1
      };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h2>{this.state.ct}</h2>
        <h2>
          <button onClick={this.handleClick}>
            <h4>Click Me</h4>
          </button>
        </h2>
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

export default Counter;
