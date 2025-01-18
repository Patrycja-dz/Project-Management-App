import Input from "../components/Input";
import React, { useRef } from "react";
import Actions from "./Actions";
import Modal from "./Modal";
function NewProject({ onAddProject, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function saveProjectHandler() {
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    if (
      project.title.trim() === "" ||
      project.description.trim() === "" ||
      project.dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAddProject(project);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption={"Close"}>
        <p className="text-xl font-bold text-stone-500 my-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-400 mb-4 font-semibold">
          Please fill out all fields.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <Actions onProjectSave={saveProjectHandler} onCancel={onCancel} />
        <div>
          <Input label="Title" ref={title} type="text" />
          <Input label="Description" Tag="textarea" ref={description} />
          <Input label="Due Date" ref={dueDate} type="date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
