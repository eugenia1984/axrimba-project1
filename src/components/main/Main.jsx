import React from "react";
import "./mainstyle.css";
import Title from "./Title.jsx";
import List from "./List";

function Main( { headline }) {
  return (
    <main>
      <Title 
        name={ headline } 
      />
      <List />
    </main>
  );
}

export default Main;