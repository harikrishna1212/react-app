import React from "react";
import todoStore from "../../stores/TodoStore/index.js";
import AddTodo from "./AddTodo.js";
import TodoList from "./TodoList.js";
import TodoFooter from "./TodoFooter.js";

class TodoApp extends React.Component{

    render(){
      return <div>
           <AddTodo/>
           <TodoList todoStore={todoStore} />
           <TodoFooter todoStore={todoStore}/>
       </div>
    }
}
export default TodoApp