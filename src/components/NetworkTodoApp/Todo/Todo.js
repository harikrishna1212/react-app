import React from "react";
import {observer} from "mobx-react";

@observer
class Todo extends React.Component{

onCompletedTodo=(event)=>{
const {todo}=this.props;
todo.onCompletedTodo()
 }

onRemoveTodo=()=>{
        const {onRemoveTodo,todo}=this.props;
        onRemoveTodo(todo.id)

}
onUpdateTodoTitle=(event)=>{
const {todo}=this.props;
todo.onUpdateTodoTitle(event.target.value)

}
    render(){
        const {todo}=this.props;
   
        return (
            <div>
                <input   type="checkbox" checked={todo.isCompleted} onClick={this.onCompletedTodo}/>
                <input type="text" defaultValue={todo.title} onChange={this.onUpdateTodoTitle} />
                <button  onClick={this.onRemoveTodo}>X</button>
            </div>
        )
    }
    
}
export default Todo