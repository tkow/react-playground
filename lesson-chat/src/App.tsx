import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface WidgetProps {
  message: string;
}

function Widget(props: WidgetProps) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{props.message}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Widget message="Hello React!" />
    </div>
  );
}

export default App;
