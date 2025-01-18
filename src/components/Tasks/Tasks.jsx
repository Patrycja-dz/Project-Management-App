import React, { useState } from "react";
import styled from "styled-components";
import NewTask from "./NewTask.jsx";
import Input from "../Input.jsx";
function Tasks({ tasks, onAdd, onDelete, onEdit, onResolve }) {
  const TasksWrapper = styled.section`
    & h2 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
      color: #222831;
    }
    & p {
      color: #222831;
      margin: 0.2rem 0;
    }
    & ul {
      margin-top: 0.45rem;
      border-radius: 0.25rem;
      background-color: #efefe9;
      justify-content: space-between;
    }
    & li {
      padding: 0.5rem 1rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & .delete {
      border-radius: 0.45rem;
      padding: 0.5rem 1rem;
      color: #222831;
      font-weight: 600;
      transition: color 0.6s ease-in-out;
    }
    & button.delete:hover {
      color: #ff5722;
    }
    & .resolved {
      text-decoration: line-through;
      color: #666;
    }
  `;
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");
  const handleEditClick = (task) => {
    setIsEditing(task.id);
    setEditText(task.text);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSave = (taskId) => {
    onEdit(taskId, editText);
    setIsEditing(null);
    setEditText("");
  };

  const handleResolve = (taskId) => {
    onResolve(taskId);
  };

  const noTasks =
    tasks.length === 0 && "This project does not have any tasks yet";

  const showTasks = tasks.length > 0 && (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {isEditing === task.id ? (
            <>
              <input type="text" value={editText} onChange={handleEditChange} />
              <button onClick={() => handleEditSave(task.id)}>Save</button>
            </>
          ) : (
            <>
              <Input
                type="checkbox"
                checked={task.resolved || false}
                onChange={() => handleResolve(task.id)}
              />
              <span className={task.resolved ? "resolved" : ""}>
                {task.text}
              </span>
              <button onClick={() => handleEditClick(task)}>Edit</button>
              <button onClick={() => onDelete(task.id)} className="delete">
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <TasksWrapper>
      <h2> Tasks</h2>
      <NewTask onAdd={onAdd} />
      <p>{noTasks}</p>
      {showTasks}
    </TasksWrapper>
  );
}

export default Tasks;
