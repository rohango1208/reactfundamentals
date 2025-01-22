// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (

//   );
// }

// export default App;
// import React from "react";
// import { TProvider } from "./ThemeContext";
// import ThemeComponent from "./ThemeComponent";

// function App() {
//   return (
//     <TProvider>
//       <div>
//         <h1>React App Using Context with Two Components</h1>
//         <ThemeComponent />
//       </div>
//     </TProvider>
//   );
// }

// export default App;
import React from 'react';
import { PasswordProvider } from './PasswordContext';
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    <PasswordProvider>
      <div>
        <h1>Password Generator</h1>
        <PasswordGenerator />
      </div>
    </PasswordProvider>
  );
}

export default App;

