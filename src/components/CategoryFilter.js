import React from "react";

function CategoryFilter({ categories, catClass, cat }) {

///////////////////////////////////////////////////
// MAP TRHOUGH LIST OF CATEGORIES
  const listOfCat = categories.map(category => {
    if(category === cat) {
      return <button key={ category } onClick={ () => catClass(category) } className='selected'>{ category }</button>
    } else {
      return <button key={ category } onClick={ () => catClass(category) } className=''>{ category }</button>
    }
})
///////////////////////////////////////////////////
  return (
    <div className="categories">
      <h5>Category filters</h5>
      { listOfCat }
    </div>
  );
}

export default CategoryFilter;
