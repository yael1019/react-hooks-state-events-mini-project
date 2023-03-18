import React, { useState } from "react";

function CategoryFilter({ categories, catClass, cat }) {

///////////////////////////////////////////////////
// MAP TRHOUGH LIST OF CATEGORIES
  const listOfCat = categories.map(category => <button key={ category } onClick={ () => catClass(category) } className={ cat ? 'selected' : '' } >{ category }</button>)
///////////////////////////////////////////////////
  return (
    <div className="categories">
      <h5>Category filters</h5>
      { listOfCat }
    </div>
  );
}

export default CategoryFilter;
