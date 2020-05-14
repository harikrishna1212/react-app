import {observable}from "mobx";
import {observer} from "mobx-react";

class TodoModel {
    @observable title
    @observable isCompleted 
    constructor(){
        this.id=Math.random().toString();
        this.title="";
        this.isCompleted=false
    }
    onCompletedTodo(){
        
    this.isCompleted= !this.isCompleted;
        
    }
    onUpdateTodoTitle(title){
        this.title=title
    }

}
export default TodoModel