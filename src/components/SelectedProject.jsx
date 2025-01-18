import React from "react";
import styled from "styled-components";
import Button from "./Button";
function SelectedProject({ project, onDelete }) {
  const SelectedProjectWrapper = styled.div`
    width: 35rem;
    margin-top: 1rem;

    header {
      border-bottom: 1px solid #ccc;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      font-size: 1.5rem;
      margin: 0;
    }
    p {
      font-size: 0.85rem;
    }
  `;

  const { title, dueDate, description } = project;
  const formattedDueDate = new Date(dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <SelectedProjectWrapper>
      <header>
        <div>
          <h1>{title}</h1>
          <Button onClick={onDelete}>Delete</Button>
        </div>
        <p>{formattedDueDate}</p>
        <p className="whitespace-pre-wrap">{description}</p>
      </header>
      TASKS
    </SelectedProjectWrapper>
  );
}

export default SelectedProject;
