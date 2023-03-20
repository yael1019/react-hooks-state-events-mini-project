import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
////////////////////////////////////////////////////////
// SETTING STATE 
  const [taskArr, setTaskArr] = useState(TASKS)
  const [cat, setCat] = useState('All')
  const [form, setForm] = useState({
    input: '',
    newCat: ''
  })
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
        text: form.input,
        category: form.newCat
      }
    ])
    setForm({
      input: '',
      newCat: ''
    })
  }
///////////////////////////////////////////////////////
//FUNCTION FOR NEW FORM
  function handleChange(e) {
    let key = e.target.id;
    let value = e.target.value;

    setForm({
      ...form,
      [key]: value
    })
  }
////////////////////////////////////////////////////////
//FILTER THE TASKS ARRAY ACCORDING TO THE CATEGORY
  const filterCategory = cat === 'All' ? taskArr : taskArr.filter(task => task.category === cat)
///////////////////////////////////////////////////////
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={ CATEGORIES } catClass={ catClass } cat={ cat } />
      <NewTaskForm categories = { CATEGORIES } form={ form } handleChange={ handleChange } submitForm={ submitForm }/>
      <TaskList taskArr={ filterCategory } setTaskArr={ setTaskArr } cat={ cat } />
    </div>
  );
}

export default App;
