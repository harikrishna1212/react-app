import React from "react";
import {observer} from "mobx-react";
import Todo from "./Todo"
import {TodoStore} from "../../stores/TodoStoreOld";

// type TodoListProps={
//     todoStore:TodoStore
// }
@observer
class TodoList extends React.Component{
    render(){
        
       const {todoStore}=this.props;
       return<div>
          {todoStore.FilteredTodos.map((eachTodoObject)=>{
           return <Todo  onRemove = {todoStore.onRemoveTodo} eachTodoObject={eachTodoObject}/>
       })}
       </div>
      
    }
   
    
}
export default TodoList