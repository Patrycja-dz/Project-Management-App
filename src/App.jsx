import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen m-0 p-0 flex gap-8">
      <Sidebar />
      {/* <NewProject /> */}

      <NoProjectSelected />
    </main>
  );
}

export default App;
