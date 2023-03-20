import React from "react";

function NewTaskForm({ categories, submitForm, form, handleChange }) {

  const listOfCat = categories.map(category => category !== 'All' ? <option key={ category }>{ category }</option> : null)

  return (
    <form className="new-task-form" onSubmit={ submitForm } >
      <label>
        Details
        <input type="text" name="text" id="input" value={ form.input } onChange={ handleChange } />
      </label>
      <label>
        Category
        <select name="category" id="newCat" value={ form.newCat }onChange={ handleChange }>
          { listOfCat }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
