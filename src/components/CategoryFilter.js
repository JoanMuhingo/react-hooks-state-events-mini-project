import React from "react";

function CategoryFilter({categories, selectedCategory, onCategoryChange}) {

   const handleCategoryClick = (category)=>{
    onCategoryChange(category)
   };
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index)=>(
         <button key={index}
         className={selectedCategory === category ? "selected" :""}
         onClick ={()=>handleCategoryClick(category)}>{category}</button>
      ))}
     
    </div>
  );
}

export default CategoryFilter;
