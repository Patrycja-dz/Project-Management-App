import styled from "styled-components";
import Button from "./Button";
function Sidebar() {
  const Sidebar = styled.aside`
    background-color: #222831;
    color: #fff;
    padding: 2.25rem 3.45rem;
    width: 20%;
    border-radius: 0 20px 20px 0;
    height: 100vh;

    p {
      font-size: calc(0.75rem + 0.5vw);
      margin-bottom: 1.5rem;
    }
  `;

  return (
    <Sidebar>
      <p>All projects (8)</p> {/* This should be dynamic */}
      <div>
        <Button>+ Add project</Button>
      </div>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li> {/* This should be dynamic */}
      </ul>
    </Sidebar>
  );
}

export default Sidebar;
