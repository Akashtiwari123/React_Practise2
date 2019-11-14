import React from "react";

function ToDo(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleChange(props.id)}
      />
      {props.item}
      <hr />
    </div>
  );
}

export default ToDo;
