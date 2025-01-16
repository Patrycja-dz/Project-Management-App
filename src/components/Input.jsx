import React from "react";
import Label from "./Label";

const Input = ({ Tag = "input", label, ...props }) => {
  return (
    <Label label={label}>
      <Tag {...props} />
    </Label>
  );
};

export default Input;
