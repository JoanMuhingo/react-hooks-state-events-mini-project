import React, {useState} from "react";
import Task from "./Task";

function TaskList({TASK}){
  const[tasks, setTasks] =useState(TASK);

  const handleDelete = (text, category) => { 
    const updatedTasks = tasks.filter((task) => 
    !(task.text === text && task.category === category));
    setTasks(updatedTasks);
  };
  return (
    <div className="tasks">
      {TASK.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;