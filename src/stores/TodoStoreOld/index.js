import {observable,toJS, action, computed} from "mobx"
import TodoModel from "../models/TodoModel";


class  TodoStore {
  @observable todos=[];
  @observable selectedFilter="ALL"; //ACTIVE COMPLETED
 
@action.bound
 onAddTodo(title){ 

const todoModel= new TodoModel()
todoModel.onUpdateTodoTitle(title);
this.todos.push(todoModel)


 }
 @action.bound
 onRemoveTodo(todoId){
   const idToRemove=todoId
  const  newTodo= this.todos.filter((item) => item.id !== idToRemove);
  this.todos=newTodo;
 

 }
 @action.bound
 onChangeSelectedFilter(filter){
   this.selectedFilter=filter

 }
 @action.bound
 onClearCompleted(){
  const idToRemove=true
  this.todos = this.todos.filter((item) => item.isCompleted !== idToRemove);
  return this.todos;
   
 }
//  @computed
//  get ActiveTodosCount(){

//  }
 @computed
 get FilteredTodos(){

   let remainingTodos =[]

  
    if(this.selectedFilter==="Active"){
    const idToRemove=true
    remainingTodos = this.todos.filter((item) => item.isCompleted !== idToRemove);
    return remainingTodos;

   }
   else if(this.selectedFilter==="Completed"){
    const idToRemove=false
    remainingTodos = this.todos.filter((item) => item.isCompleted !== idToRemove);
    console.log(1, remainingTodos)
    return remainingTodos;
  
   }
   else{
     return this.todos
   }

  }
 
}


const todoStore = new TodoStore();
// console.log(todoStore);
export {todoStore as default,TodoStore} ;