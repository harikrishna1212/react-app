import React from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './components/countriesAssignment/index.css';
import './App.css';
import CountriesDashboardApp from './components/countriesAssignment/CountriesDashboardApp'
import CountriesDetails from './components/countriesAssignment/CountriesDetails';
// import Todos from "./components/TodoList/index";
import HomePage from "./components/HomePage";
import CounterPage from "./components/CounterPage";
import Page1 from "./components/Page1";
import TodoDashboardApp from "./components/Todolist1/TodoDashboardApp";
import EmojiGame from "./components/EmojiGame/EmojiGame";
import TodoApp from "./components/NewTodo/TodoApp";
import ProvideA from "./components/ProvideA/ProvideA";
import "./App.css";


@observer
class App extends React.Component {
  
  
 @observable selectedTheme="Lightmode";
 
  getCurrentTheme(){
    return this.selectedTheme;
  }
  setCurrentTheme(theme:any){
 
   return "";
  }
 
  containerStyles=()=>{
    let theme=["lightBackground","darkBackground"]
    if(this.selectedTheme==="Lightmode")
    return theme[0];
    return theme[1];
  }
  render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route exact path="/counter-page">
          <CounterPage />
        </Route>
        <Route exact path="/mobx-todo-app">
          <TodoApp />
        </Route>
       <Route exact path="/country-dashboard-app/details/:CountriesDetails">
            <CountriesDetails theme={this.getCurrentTheme} onChangeTheme={this.setCurrentTheme} containerStyles={this.containerStyles}/>
          </Route>
          <Route exact path="/CountriesDashboardApp">
            <CountriesDashboardApp theme={this.getCurrentTheme} onChangeTheme={this.setCurrentTheme} containerStyles={this.containerStyles}/>
          </Route>
          {/* <Route exact path="/todo-app">
          <Todos/>
        </Route> */}
        <Route exact path="/Provide-app">
          <ProvideA/>
        </Route>
      
      
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
  }
};

export default App;
                      