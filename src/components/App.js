import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
////////////////////////////////////////////////////////
// SETTING STATE 
  const [taskArr, setTaskArr] = useState(TASKS)
  const [cat, setCat] = useState(null)
  const [input, setInput] = useState('')
  const [newCat, setNewCat] = useState(null)
////////////////////////////////////////////////////////
//FUNCTION TO RESET CATEGORY
  function catClass(category) {
    setCat(category)
  }
///////////////////////////////////////////////////////
//FUNCTION FOR SUBMITTING FORM
  function submitForm(e) {
    e.preventDefault();
    setTaskArr([
      ...TASKS,
      {
        text: input,
        category: newCat
      }
    ])
    setInput('');
    setNewCat(null);
  }
///////////////////////////////////////////////////////
//FUNCTIONS FOR NEW FORM
  function forNewCat(e) {
    setNewCat(e.target.value);
  }

  function forNewInput(e) {
    setInput(e.target.value);
  }
////////////////////////////////////////////////////////
//FILTER THE TASKS ARRAY ACCORDING TO THE CATEGORY
  const filterCategory = cat === null || cat === 'All' ? taskArr : taskArr.filter(task => task.category === cat)
///////////////////////////////////////////////////////
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={ CATEGORIES } catClass={ catClass } cat={ cat } />
      <NewTaskForm categories = { CATEGORIES } newCat={ newCat } input={ input } forNewCat={ forNewCat } forNewInput={ forNewInput } submitForm={ submitForm }/>
      <TaskList taskArr={ filterCategory } setTaskArr={ setTaskArr } cat={ cat } />
    </div>
  );
}

export default App;
