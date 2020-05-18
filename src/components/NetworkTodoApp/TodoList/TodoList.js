import React from "react";
import {observer} from "mobx-react";
import Todo from "../Todo/Todo";
// import todoStore from "../../../stores/index"
@observer
class TodoList extends React.Component{

    render(){
        
       const {onRemoveTodo,FilteredTodos}=this.props;
       return <div>
          {FilteredTodos.map((todo)=>{
           return <Todo key={Math.random()} onRemoveTodo = {onRemoveTodo} todo={todo}/>
       })}
       </div>
      
    }
   
    
}
export default TodoList