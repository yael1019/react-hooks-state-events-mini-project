import React, { useState } from "react";
import Task from './Task';

function TaskList({ taskArr, setTaskArr }) {
//////////////////////////////////////////////////////
// FILTER THROUGH THE TASKS ARRAY 
function removeATask(clickDelete) {
  setTaskArr(taskArr.filter(task => task.text !== clickDelete))
}
///////////////////////////////////////////////////////
// MAP THROUGH TASKS 
  const listOfTasks = taskArr.map(task => <Task key={ task.text } task={ task } removeATask={ removeATask } />)
///////////////////////////////////////////////////////
  return (
    <div className="tasks">
      { listOfTasks }
    </div>
  );
}

export default TaskList;
