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
        <Link to="/todo-app">TodoApp</Link>
        <Link to="/mobx-todo-app">MobxTodo</Link>
        <Link to="/Provide-app">Provide</Link>
        <Link to="/Todo-App">NetworkCall Todo</Link>
        <Link to="/user-page">loading tryout</Link>
        <Link to="/ecommerce-store/sign-in/">signin</Link>
        <Link to="/login-form">LearningHocComponent</Link>
        <Link to="/practice-example">PracticeExample</Link>
        <Link to="/practice-advanced-concepts">ReactAdvancedConcepts</Link>
        <Link to="/react-concepts">ReactPractice</Link>
      </header>
    </div>
  );
}

export default App;
