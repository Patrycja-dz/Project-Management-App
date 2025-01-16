import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handleProjectStartSelection() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
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
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(project);
  let content;

  if (project.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (project.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleProjectStartSelection} />
    );
  }
  return (
    <main className="h-screen m-0 p-0 flex gap-8">
      <Sidebar onStartAddProject={handleProjectStartSelection} />
      {content}
    </main>
  );
}

export default App;
