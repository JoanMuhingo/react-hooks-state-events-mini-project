import React, {useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] =useState('All');
  const [filteredTasks, setFilteredTasks] =useState(TASKS);

  const handleCategoryChange = (category) => {
    
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredTasks(TASKS);
    } else {
      const filtered = TASKS.filter((task) => task.category === category);
      setFilteredTasks(filtered);
    }
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} />
      <TaskList TASK={filteredTasks} />
    </div>
  );
}

export default App;
