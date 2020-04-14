import React from "react";
import {observer} from "mobx-react";
import TodoModel from "../../stores/models/TodoModel"
type TodoProps={
    onRemove:Function,
    eachTodoObject:TodoModel
}
@observer
class Todo extends React.Component<TodoProps>{
onCompletedTodo=()=>{
this.props.eachTodoObject.onCompletedTodo()



    }
    onRemoveTodo=()=>{
    
        this.props.onRemove(this.props.eachTodoObject.id)

    }
    onUpdateTodoTitle=()=>{

    }
    render(){
        const {eachTodoObject}=this.props;
   
        return (
            <div>
                    <input   type="checkbox" checked={eachTodoObject.isCompleted} onClick={this.onCompletedTodo}/>
                <input type="text" value={eachTodoObject.title}  />
                <button  onClick={this.onRemoveTodo}>X</button>
            </div>
        )
    }
    
}
export default Todo