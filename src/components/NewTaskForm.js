import React from "react";

function NewTaskForm({ categories, newCat, input, submitForm, forNewCat, forNewInput }) {

  const listOfCat = categories.map(category => category !== 'All' ? <option key={ category }>{ category }</option> : null)

  return (
    <form className="new-task-form" onSubmit={ submitForm } >
      <label>
        Details
        <input type="text" name="text" value={ input } onChange={ forNewInput } />
      </label>
      <label>
        Category
        <select name="category" value={ newCat }onChange={ forNewCat }>
          { listOfCat }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
