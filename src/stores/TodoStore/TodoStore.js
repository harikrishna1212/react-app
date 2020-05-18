import {observable,action,computed} from "mobx";
import TodoModel from "../model/TodoModel/TodoModel";
import {API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
class  TodoStore {
  @ observable getTodoListAPIStatus = API_INITIAL;
  @ observable getTodoListAPIError = null;
  @ observable todosAPIService;
  @observable todos=[];
  @observable selectedFilter="All" //ACTIVE COMPLETED

  constructor(todosAPIService){
    this.todosAPIService=todosAPIService

  }
  @action.bound
  getTodoList(){

  
    const todoPromise = this.todosAPIService.getTodoList()
    return bindPromiseWithOnSuccess(todoPromise)
    .to(this.setGetTodoListAPIStatus,this.setTodoListResponse)
    .catch(this.setGetTodoListAPIError)


  }
  @action.bound
  setTodoListResponse(todoResponse){
    // console.log(todoResponse)

    todoResponse.forEach((todo)=>{
      let todoTitle=todo.title;
      let  id=todo.id;
      let isCompleted=todo.completed
      this.onAddTodo(todoTitle,id,isCompleted)
  
    })

  }

  @action.bound
  setGetTodoListAPIError(todoError){
    this.getTodoListAPIError=todoError

  }
  @action.bound
  setGetTodoListAPIStatus(todoApiStatus){
    this.getTodoListAPIStatus=todoApiStatus

  }
 
@action.bound

 onAddTodo(todoTitle,id,isCompleted){
  //  const todoDetails={
  //    id:Math.random().toString(),
  //   title:todo.title,
  //    isCompleted:todo.completed
  //  }
     const todoModel = new TodoModel(todoTitle,id,isCompleted);
    //  todoModel.onUpdateTodoTitle(title);
     this.todos.push(todoModel);
    }

 @action.bound
 onRemoveTodo(todoId){
   
  const idToRemove=todoId
  const  newTodo= this.todos.filter((item) => item.id !== idToRemove);
  this.todos=newTodo;
  

 }
 @action.bound
 onChangeSelectedFilter(filter){
   this.selectedFilter=filter;
   


 }
 @action.bound
 onClearCompleted(){
  const idToRemove=true
  const newTodo = this.todos.filter((item) => item.isCompleted !== idToRemove);
   this.todos=newTodo
   
 }
 @computed
 get ActiveTodosCount(){

 }
 @computed
 get FilteredTodos(){
  let remainingTodos =[]

  if(this.selectedFilter==="Active"){
  const idToRemove=true
  remainingTodos = this.todos.filter((item) => item.isCompleted !== idToRemove);
  return  remainingTodos;

 }
 else if(this.selectedFilter==="Completed"){
   
  const idToRemove=false
  remainingTodos = this.todos.filter((item) => item.isCompleted !== idToRemove);
  return remainingTodos;

 }
 else{
   
   return this.todos;
 }


}

}
export default TodoStore




