const Sidebar = () => {
  return (
    <aside>
      <p>All projects (8)</p> {/* This should be dynamic */}
      <button>+ Add project</button>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li> {/* This should be dynamic */}
      </ul>
    </aside>
  );
};

export default Sidebar;
