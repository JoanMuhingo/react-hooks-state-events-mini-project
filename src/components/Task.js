import React from "react";


function Task({ text, category, onDelete }) {
  const handleDelete = () => {
    onDelete(text, category);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      {/* You can add your delete button and logic here */}
      <button onClick={handleDelete}>Delete!</button>
    </div>
  );
}

export default Task;