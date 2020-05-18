import {observable}from "mobx";


class TodoModel {
    id
    @observable title
    @observable isCompleted
    constructor(todoTitle,id,isCompleted){
        this.id=id,
        this.title=todoTitle,
        this.isCompleted=isCompleted
    }
    onCompletedTodo(){
    this.isCompleted= !this.isCompleted;
        
    }
    onUpdateTodoTitle(title){
        this.title=title
    }

}
export default TodoModel