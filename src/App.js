import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./components/main/Main.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="App">
      <Navbar
        headline="React Facts"
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main headline="Fun facts about React!" darkMode={darkMode} />
    </div>
  );
}

export default App;
