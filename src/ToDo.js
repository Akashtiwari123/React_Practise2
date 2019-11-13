import React,{Component} from 'react';

class ToDo extends Component{
  render(){
    return(
      <div>
       {this.props.id} <input type="checkbox"/>{this.props.item}
        <hr/>
      </div>
    )
  }
}

export default ToDo