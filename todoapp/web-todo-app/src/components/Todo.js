import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange = (e) => {
    e.preventDefault();
    if (!todo.complete) {
      setNewTitle(e.target.value);
      handleEdit(todo, newTitle);
    }
  };

  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.complete && "line-through" }}
        type="text"
        value={newTitle}
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}
