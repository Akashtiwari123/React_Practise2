import React from "react";

function ToDo(props) {
  const mystyle = {
    fontStyle: "italic",
    color: "#f123",
    textDecoration: "line-through"
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleChange(props.id)}
      />
      <p style={props.completed ? mystyle : null}> {props.item}</p>
      <hr />
    </div>
  );
}

export default ToDo;
