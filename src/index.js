import React,{Component} from "react";
import ReactDOM from "react-dom";
import ToDo from "./ToDo"
import ToDoMap from "./ToDoMap"
import "./styles.css";


class App extends React.Component{

  constructor(){
    super();
    this.state={
     id:1,
    name:"sky"
  }
  }

  render(){
const todoItems=ToDoMap.map((items)=>
<ToDo item={items.item} id={items.id}/>
)

    return(
      <div>
       
        {todoItems}
        <h1>Id: {this.state.id}</h1>
        <Header username={this.state.name}/>
        <Greeting/>
      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return(
     <p>Hi this header {this.props.username}</p>
    )
  }
}

class Greeting extends Component{
  render(){
    return(
      <p>Hi this is footer</p>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
