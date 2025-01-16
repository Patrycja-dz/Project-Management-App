import React from "react";
import styled from "styled-components";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
function NoProjectSelected({ onStartAddProject }) {
  const NoProject = styled.div`
    text-align: center;
    margin-top: 6rem;
    width: 66%;
    & h2 {
      font-size: 1.5rem;
      color: #222831;
      margin: 1rem 0;
    }
    img {
      width: 25%;
      margin: 0 auto;
      object-fit: contain;
    }
    p {
      color: #222821;
      margin-bottom: 1.25rem;
    }
  `;
  return (
    <NoProject>
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-1/2 mx-auto"
      />
      <h2>No project selected</h2>
      <p>Select a project or start with new one</p>
      <Button onClick={onStartAddProject}>Create a new project</Button>
    </NoProject>
  );
}

export default NoProjectSelected;
