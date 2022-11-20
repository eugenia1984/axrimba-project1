import React from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./components/main/Main.jsx";


function App() {
  return (
    <div className="App">
      <Navbar 
        headline="React Facts" 
        text="React Course - Project 1"/>
      <Main 
        headline="Fun facts about React!"
      />
    </div>
  );
}

export default App;