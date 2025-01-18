import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projects, setProject] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  function handleSelectedProject(projectId) {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDelete() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: prevState.project.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleProjectStartSelection() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleCancel() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [...prevState.project, newProject],
      };
    });
  }
  const selectedProject = projects.project.find(
    (project) => project.id === projects.selectedProjectId
  );

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDelete} />
  );

  if (projects.selectedProjectId === null) {
    content = (
      <NewProject onAddProject={handleAddProject} onCancel={handleCancel} />
    );
  } else if (projects.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleProjectStartSelection} />
    );
  }
  return (
    <main className="h-screen m-0 p-0 flex gap-8">
      <Sidebar
        onStartAddProject={handleProjectStartSelection}
        projects={projects.project}
        onSelectedProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
