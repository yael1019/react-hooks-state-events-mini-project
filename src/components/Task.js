import React from "react";

function Task({ task, removeATask }) {

  return (
    <div className="task">
      <div className="label">{ task.category }</div>
      <div className="text">{ task.text }</div>
      <button className="delete" onClick={() => removeATask(task.text)} >X</button>
    </div>
  );
}

export default Task;
