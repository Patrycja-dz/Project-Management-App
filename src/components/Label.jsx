import React from "react";
import styled from "styled-components";
function Label({ label, children, ...props }) {
  const LabelWrapper = styled.p`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-block: 0.75rem;

    & label {
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      color: #222831;
    }

    & input,
    textarea {
      padding: 0.25rem;
      border-bottom: 2px solid #222831;
      background-color: #eeeeee;
      border-radius: 0.25rem;
      font-size: 1rem;
      width: 100%;
    }
    & input:focus,
    textarea:focus {
      outline: none;
      border-color: #00adb5;
    }
  `;

  return (
    <LabelWrapper>
      {label && <label {...props}>{label}</label>}
      {children}
    </LabelWrapper>
  );
}

export default Label;
