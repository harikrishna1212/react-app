import {observable}from "mobx";


class TodoModel {
    id:string
    @observable title:string
    @observable isCompleted:boolean 
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