import React from "react";
import {toJS} from "mobx"
//import todoStore from "../../stores/TodoStore/index.js";
import {observer} from "mobx-react";
@observer
class Todo extends React.Component{
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