import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import TodoDashboardApp from "./components/Todolist1/TodoDashboardApp.js";
import EmojiGame from "./components/EmojiGame/EmojiGame.js"


import "./App.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
      <Route exact path="/Todolist">
         <TodoDashboardApp />
        </Route>  
        <Route exact path="/emoji-game">
          <EmojiGame />
        </Route> 
        <Route path="/">
          <HomePage />
        </Route>        
      </Switch>
    </Router>
  );
};

export default App;
