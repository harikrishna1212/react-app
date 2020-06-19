import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import './components/countriesAssignment/index.css'
import './App.css'
import CountriesDashboardApp from './components/countriesAssignment/CountriesDashboardApp'
import CountriesDetails from './components/countriesAssignment/CountriesDetails'
import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import TodoDashboardApp from './components/Todolist1/TodoDashboardApp'
import EmojiGame from './components/EmojiGame/EmojiGame'
import TodoApp from './components/NewTodo/TodoApp'
import ProvideA from './components/ProvideA/ProvideA'

import UsersPage from './components/UsersPage/index'
import NewTodoApp from './components/NetworkTodoApp/TodoApp/TodoApp'
import LoginForm from './components/LoginForm/LoginForm'
import stores from './stores/index'
import commonStore from './common/stores/index'

import { routes } from './Authentication/routes/SignInRoute/index'
import ProductsPage from './ProductPage/components/ProductsPage/index'

import PracticeExample from './components/Practice/index'
import PracticeAdvancedConceptsRoute from '../src/common/routes/PracticeAdvancedConceptsRoute '
import ReactPractice from '../src/components/ReactPractice/index'
import BothLoadingsComponent from '../src/components/ReactPractice/BothLoadingsComponent'
import './App.css'

// @observer
class App extends React.Component {
  //  @observable selectedTheme = 'Lightmode'

  //  getCurrentTheme() {
  //     return this.selectedTheme
  //  }
  //  setCurrentTheme(theme) {
  //     return ''
  //  }

  //  containerStyles = () => {
  //     let theme = ['lightBackground', 'darkBackground']
  //     if (this.selectedTheme === 'Lightmode') return theme[0]
  //     return theme[1]
  //  }
   render() {
      return (
         <Provider {...stores} {...commonStore}>
            <Router basename={process.env.PUBLIC_URL}>
               <Switch>
                  <Route exact path='/mobx-todo-app'>
                     <TodoApp />
                  </Route>
                  <Route
                     exact
                     path='/country-dashboard-app/details/:CountriesDetails'
                  >
                     <CountriesDetails
                        theme={this.getCurrentTheme}
                        onChangeTheme={this.setCurrentTheme}
                        containerStyles={this.containerStyles}
                     />
                  </Route>
                  <Route exact path='/CountriesDashboardApp'>
                     <CountriesDashboardApp
                        theme={this.getCurrentTheme}
                        onChangeTheme={this.setCurrentTheme}
                        containerStyles={this.containerStyles}
                     />
                  </Route>
                  {/* <Route exact path="/todo-app">
          <Todos/>
        </Route> */}
                  <Route exact path='/Provide-app'>
                     <ProvideA />
                  </Route>

                  <Route exact path='/page-1'>
                     <Page1 />
                  </Route>
                  <Route exact path='/Todolist'>
                     <TodoDashboardApp />
                  </Route>
                  <Route exact path='/emoji-game'>
                     <EmojiGame />
                  </Route>
                  <Route exact path='/Todo-App'>
                     <TodoApp />
                  </Route>
                  <Route exact path='/user-page' component={UsersPage}></Route>
                  {routes}
                  <Route
                     exact
                     path='/products-page'
                     component={ProductsPage}
                  ></Route>
                  <Route
                     exact
                     path='/login-form'
                     component={BothLoadingsComponent}
                  ></Route>
                  <Route
                     exact
                     path='/practice-example'
                     component={PracticeExample}
                  ></Route>
                  <Route exact path='/practice-advanced-concepts'>
                     <PracticeAdvancedConceptsRoute />
                  </Route>
                  <Route exact path='/react-concepts'>
                     <ReactPractice />
                  </Route>

                  <Route path='/'>
                     <HomePage />
                  </Route>
               </Switch>
            </Router>
         </Provider>
      )
   }
}

export default App
