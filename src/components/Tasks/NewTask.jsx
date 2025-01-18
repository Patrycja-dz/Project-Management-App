import React, { useRef } from "react";
import styled from "styled-components";
import Input from "../Input.jsx";

function NewTask({ onAdd }) {
  const newTask = useRef();

  const handleClick = () => {
    onAdd(newTask.current.value);
  };
  const NewTaskWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;

    & button {
      background-color: rgb(161 161 170);
      border-radius: 0.45rem;
      padding: 0.5rem 1rem;
      color: #222831;
    }
  `;
  return (
    <NewTaskWrapper>
      <Input ref={newTask} type="text" />

      <button onClick={handleClick}>Add task</button>
    </NewTaskWrapper>
  );
}

export default NewTask;
