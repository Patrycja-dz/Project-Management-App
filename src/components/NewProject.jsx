import Input from "../components/Input";
import React from "react";
import Actions from "./Actions";

function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <Actions />
      <div>
        <Input label="Title" />
        <Input label="Description" Tag="textarea" />
        <Input label="Due Date" />
      </div>
    </div>
  );
}

export default NewProject;
