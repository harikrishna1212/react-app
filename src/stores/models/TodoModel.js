import {observable}from "mobx";


class TodoModel {
    id
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