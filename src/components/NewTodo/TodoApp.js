import React from "react";
import todoStore from "../../stores/TodoStore/index";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

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