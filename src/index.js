import React from "react";
import ReactDOM from "react-dom";
import TicTacToe from "./TicTacToe";
import Home from "./home.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TicTacToe />, rootElement);
