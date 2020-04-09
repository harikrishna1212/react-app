import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/page-1">Page 1</Link>
        <Link to="/todolist">Todolist</Link>
        <Link to="/emoji-game">EmojiGame</Link>
        <Link to="/CountriesDashboardApp">CountriesAssignment</Link>
        <Link to="/counter-page">counter</Link>
        <Link to="/todo-app">TodoApp</Link>
      </header>
    </div>
  );
}

export default App;
