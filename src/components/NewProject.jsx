import Input from "../components/Input";
import React, { useRef } from "react";
import Actions from "./Actions";
function NewProject({ onAddProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function saveProjectHandler() {
    const project = {
      enteredTitle: title.current.value,
      enteredDescription: description.current.value,
      enteredDueDate: dueDate.current.value,
    };
    onAddProject(project);
  }

  return (
    <div className="w-[35rem] mt-16">
      <Actions onProjectSave={saveProjectHandler} />
      <div>
        <Input label="Title" ref={title} type="text" />
        <Input label="Description" Tag="textarea" ref={description} />
        <Input label="Due Date" ref={dueDate} type="date" />
      </div>
    </div>
  );
}

export default NewProject;
