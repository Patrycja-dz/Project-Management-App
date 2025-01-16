import styled from "styled-components";
import Button from "./Button";
function Sidebar({ onStartAddProject, projects }) {
  const Sidebar = styled.aside`
    background-color: #222831;
    color: #fff;
    padding: 2.25rem 3.45rem;
    width: 20%;
    border-radius: 0 20px 20px 0;
    height: 100vh;

    p {
      font-size: calc(0.75rem + 0.5vw);
      margin-bottom: 1.5rem;
    }

    li > button {
      width: 100%;
      background-color: #a6cdc1;
      border-radius: 0.45rem;
      padding: 0.5rem 1rem;
      color: #222831;
      font-weight: 600;
      transition: background-color 0.6s ease-in-out;
    }
    li > button:hover {
      background-color: #79a3a1;
    }
  `;

  return (
    <Sidebar>
      <p>All projects (8)</p> {/* This should be dynamic */}
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button>{project.title}</button>
          </li>
        ))}
      </ul>
    </Sidebar>
  );
}

export default Sidebar;
