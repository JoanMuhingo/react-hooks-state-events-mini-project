import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onTaskFormSubmit(formData);

    setFormData({
      text: "",
      category: categories[0],
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {/* render <option> elements for each category here */}
          {CATEGORIES.map((category, index) => (
            category !== "All" && (
              <option key={index} value={category}>
                {category}
              </option>
            )
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;