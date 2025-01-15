import styled from "styled-components";
const Sidebar = () => {
  const Sidebar = styled.aside`
    background-color: #222831;
    color: #fff;
    padding: 2.25rem 3.45rem;
    width: 20%;
    border-radius: 0 20px 20px 0;
    height: 100svh;
    & p {
      font-size: calc(0.75rem + 0.5vw);
      margin-bottom: 1.5rem;
    }
    & button {
      background-color: #00adb5;
      color: #eeeeee;
      border: none;
      padding: 0.75rem 3.75rem;
      border-radius: 10px;
      font-weight: 700;
      margin-bottom: 1.5rem;
      cursor: pointer;
      &:hover {
        background-color: #bf4f74;
        transition: background-color 0.6s ease-in-out;
      }
    }
  `;

  return (
    <Sidebar>
      <p>All projects (8)</p> {/* This should be dynamic */}
      <div>
        <button>+ Add project</button>
      </div>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li> {/* This should be dynamic */}
      </ul>
    </Sidebar>
  );
};

export default Sidebar;
