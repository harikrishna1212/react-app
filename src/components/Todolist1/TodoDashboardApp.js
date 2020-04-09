import React from "react";
import HeaderTodo from './HeaderTodo.js';
import InputTagForEnterTodo from './InputTagForEnterTodo.js'
class TodoDashboardApp extends React.Component{
    state={
        
    }
    render(){
       return(
           <div><HeaderTodo/>
           <InputTagForEnterTodo/>
           </div>
       ) 
    }
}
export default TodoDashboardApp;
