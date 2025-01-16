import React from "react";
import styled from "styled-components";

function Actions({ onProjectSave }) {
  const Menu = styled.menu`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin-block: 2rem;

    & button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.25rem;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.6s ease-in-out;
    }

    li:first-of-type button {
      background-color: #dde6ed;
    }

    & li:first-of-type button:hover {
      background-color: #b7c4cf;
    }

    li:not(:first-of-type) button {
      background-color: #9db2bf;
    }
    & li:not(:first-of-type) button:hover {
      background-color: #526d82;
    }
  `;

  return (
    <Menu>
      <li>
        <button>Cancel</button>
      </li>
      <li>
        <button onClick={onProjectSave}>Save</button>
      </li>
    </Menu>
  );
}

export default Actions;
