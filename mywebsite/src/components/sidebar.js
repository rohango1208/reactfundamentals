// import React from "react";

// const Sidebar = () => {
//     return (
//         <sidebar style={sidebarStyle}>
//             <p>Contact us:</p>
//         </sidebar>
//     );
// };
// const sidebarStyle = {
//     backgroundColor: "#333",
//     color: "#fff",
//     textAlign: "center",
//     padding: " 0 10px ",
//     // marginTop: "auto",
// };

// export default Sidebar;
// Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <h2>Sidebar</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>Home</li>
        <li style={listItemStyle}>About</li>
        <li style={listItemStyle}>Contact</li>
      </ul>
    </div>
    
  );
};

// Sidebar Styles
const sidebarStyle = {
  width: "250px",
//   height:"10px",
  backgroundColor: "#333",
  color: "#fff",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-between",
};

const listStyle = {
  listStyleType: "none",
  padding: "0",
};

const listItemStyle = {
  padding: "9px",
  borderBottom: "1px solid #444",
};

export default Sidebar;
