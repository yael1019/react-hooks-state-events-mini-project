import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
////////////////////////////////////////////////////////
// SET STATE FOR THE TASKS ARRAY
  const [taskArr, setTaskArr] = useState(TASKS)
////////////////////////////////////////////////////////
  const [cat, setCat] = useState(null)

  function catClass(category) {
    setCat(category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={ CATEGORIES } catClass={ catClass } cat={ cat } />
      <NewTaskForm />
      <TaskList taskArr={ taskArr } setTaskArr={ setTaskArr } />
    </div>
  );
}

export default App;
