import React from "react";
import styled from "styled-components";
function Button({ children, ...props }) {
  const Button = styled.button`
    button {
      background-color: #00adb5;
      color: #eeeeee;
      border: none;
      padding: 0.75rem 3.75rem;
      border-radius: 10px;
      font-weight: 700;
      margin-bottom: 1.5rem;
      cursor: pointer;
      transition: background-color 0.6s ease-in-out;
    }

    button:hover {
      background-color: #bf4f74;
    }
  `;
  return <Button {...props}>{children}</Button>;
}

export default Button;
