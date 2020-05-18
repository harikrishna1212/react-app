// import React from 'react';
// import {observable,toJs, action} from "mobx";
// import {observer} from "mobx-react";
// import allTodoStore from "../../stores/TodoStore/index.js"
// import './index.css';
// // let todosOfUser = [];
// @observer
// class Todos extends React.Component {
//     /*@observable todos=[];
//     @observable todosInList=false;
//     @observable clearCompletedButton=false;*/

//     completedTask = (idOfTodo) => {
        
//         // const duplicateArr = this.todos;
//         todosOfUser[idOfTodo].isCompleted ? todosOfUser[idOfTodo].isCompleted = false : todosOfUser[idOfTodo].isCompleted = true;
        
       
//         allTodoStore.todos=allTodoStore.todosOfUser;

//         if (   allTodoStore.todosOfUser.length === 0)
//             allTodoStore.todosInList=false;
//     }
//     removeTask = (indexOfTodo) => {
//         allTodoStore.todosOfUser.splice(indexOfTodo, 1);
       
//         allTodoStore.todos=   allTodoStore.todosOfUser;

//         if (   allTodoStore.todosOfUser.length === 0)
            
//         allTodoStore.todosInList=false
//     }

//     handleEnterKey = (event) => {
//         if (event.key === 'Enter') {
//             if (event.target.value !== "") {
//                 const todoTask = {
//                     id: (allTodoStore.todos).length + 1,
//                     task: event.target.value,
//                     isCompleted: false,
//                 };
//                 allTodoStore.todosOfUser.push(todoTask);
//                 allTodoStore.todos=    allTodoStore.todosOfUser;
//                 event.target.value = "";
//                 this.todosInList=true;
//             }
//             else
//                 alert("Todos Should not be empty");
//         }
//     }
//     allTodos(){
//      allTodoStore.allTodos();
     
//     }
//     // allTodos = () => {
//     //     allTodoStore.todos=   allTodoStore.todosOfUser;
//     // }

//     activeTodos = () => {
//         const activeTodosList =    allTodoStore.todosOfUser.filter((eachEl) => {
//             return (eachEl.isCompleted !== true);
//         });
//         allTodoStore.todos = activeTodosList;
//     }

//     todosLeft = () => {
//         let todosCount = 0;
//         allTodoStore.todosOfUser.forEach((eachEl) => {
//             if (eachEl.isCompleted !== true)
//                 todosCount++;
//         });
//         return (todosCount);
//     }

//     completedTodos = () => {
//         const completedTodosList =    allTodoStore.todosOfUser.filter((eachEl) => {
//             return (eachEl.isCompleted !== false);
//         });
//         allTodoStore.todos=completedTodosList;
//     }
//     clearCompletedTodos = () => {
//         allTodoStore.todosOfUser =    allTodoStore.todosOfUser.filter((eachEl) => {
//             return (eachEl.isCompleted !== true);
//         });
//         allTodoStore.todos=    allTodoStore.todosOfUser;

//         if (   allTodoStore.todosOfUser.length === 0)
//         allTodoStore.todosInList=false;
//     }

//     renderTodoList = () => {
//         const todoListItems = allTodoStore.todos.map((eachEl) => {
//             let eachElIndex = (allTodoStore.todos).indexOf(eachEl);
//             return (
//                 <li key={(eachEl.id).toString()} className="items todo-li-items">
//               <i className= {allTodoStore.todos[eachElIndex].isCompleted ? "fa fa-check-circle co":"fa fa-circle-thin co"} onClick={() => this.completedTask(eachElIndex)}></i>
//               <input type="text" className={allTodoStore.todos[eachElIndex].isCompleted ? "text lineThrough":"text"} defaultValue = {eachEl.task}/>
//               <i className="fa fa-close de" onClick={() => this.removeTask(eachElIndex)}></i>
//             </li>
//             );
//         });
//         return (todoListItems);
//     }
//     render() {
//         // console.log(this.todos)
//         // console.log(1)
//        // console.log(allTodoStore.todos);
//        console.log("coming to render")
//         return (
//             <div className = "todo-list-body-container">
//             <div className = "main-todo-conatiner">
//                 <div className="todo-list">
//                     <h1 className = "main-heading">Todos</h1>
//                 </div>
//                 <div className="todo-list-container">
//                     <input className="adding-elements" type="text" placeholder = "What need to be Done...!"
//                     onKeyDown = {this.handleEnterKey}
//                     />
//                     <ul className = "todo-ul-tag">
//                         {this.renderTodoList()}
//                     </ul>
//                     <div className={this.todosInList ? "footer-todo-list footer-display": "footer-todo-list footer-none"}>
//                         <span>{this.todosLeft()} Todos left</span>
//                         <div>
//                             <button className="filter-buttons" onClick = {this.allTodos}>All</button>
//                             <button className="filter-buttons" onClick = {this.activeTodos}>Active</button>
//                             <button className="filter-buttons" onClick = {this.completedTodos}>Completed</button>
//                         </div>
//                         <button className="filter-buttons filter-clear-completed-buttons" onClick = {this.clearCompletedTodos}>Clear completed</button>
//                     </div>
//                 </div>
//             </div>
            
//             </div>
//         );
//     }
// }
// export default Todos ;

 