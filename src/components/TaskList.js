import React from "react";
import Task from './Task';

function TaskList({ tasks }) {

  const listOfTasks = tasks.map(task => <Task key={ task.text } task={ task } />)

  return (
    <div className="tasks">
      { listOfTasks }
    </div>
  );
}

export default TaskList;
