import Input from "../components/Input";
import React, { useState } from "react";
import Actions from "./Actions";

function NewProject() {
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const { title, description, dueDate } = userInput;
  function handleChange(identifier, value) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [identifier]: value,
      };
    });
  }
  return (
    <div className="w-[35rem] mt-16">
      <Actions />
      <div>
        <Input
          label="Title"
          value={title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <Input
          label="Description"
          Tag="textarea"
          value={description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <Input
          label="Due Date"
          value={dueDate}
          onChange={(e) => handleChange("dueDate", e.target.value)}
        />
      </div>
    </div>
  );
}

export default NewProject;
