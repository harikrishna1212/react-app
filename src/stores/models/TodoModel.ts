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
    onUpdateTodoTitle(title:any){
        this.title=title
    }

}
export default TodoModel