import styled from "styled-components";
import Button from "./Button";
function Sidebar({
  onStartAddProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) {
  const SidebarSidebar = styled.aside`
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
      margin-bottom: 0.5rem;
    }
    li > button:hover {
      background-color: #79a3a1;
    }
    .currentProject {
      background-color: #ff8000;
    }
  `;
  const projectsLength =
    projects.length > 0 ? projects.length : "Currently there are no projects";
  const projectOrProjects = projects.length === 1 ? "Project" : "All projects";

  return (
    <SidebarSidebar>
      <p>
        {projectOrProjects} ({projectsLength})
      </p>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm ";
          if (project.id === selectedProjectId) {
            cssClasses += "currentProject";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectedProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </SidebarSidebar>
  );
}

export default Sidebar;
