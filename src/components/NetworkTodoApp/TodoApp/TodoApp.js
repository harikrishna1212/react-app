import React from "react";
import { observer,inject } from "mobx-react";
//import todoStore from "../../../stores/index";
 import AddTodo from "../AddTodo/AddTodo";
 import TodoList from "../TodoList/TodoList";
import TodoFooter from "../TodoFooter/TodoFooter";
import LoadingWrapperWithFailure from '../../common/LoadingWrapperWithFailure';
import NoDataView from '../../common/NoDataView/index';

@inject("todoStore")

@observer
class NewTodoApp extends React.Component{
  componentDidMount(){
    this.doNetworkCalls();
  }
  doNetworkCalls = () => {
    const{getTodoList}=this.props.todoStore;
    
    getTodoList();
}
renderUserList=observer(()=>{
  const {
    onAddTodo,todos,onRemoveTodo,onClearCompleted,
  ActiveTodosCount,selectedFilter,onChangeSelectedFilter,FilteredTodos}=this.props.todoStore;
  if(todos.length===0){
    return <NoDataView/> 
  }
return (
<div>
   <AddTodo onAddTodo={onAddTodo}/>
     <TodoList todos={todos} onRemoveTodo={onRemoveTodo} FilteredTodos={FilteredTodos}/>
     <TodoFooter onClearCompleted={onClearCompleted} 
     ActiveTodosCount={ActiveTodosCount}
      selectedFilter={selectedFilter}
      onChangeSelectedFilter={onChangeSelectedFilter}
      onClearCompleted={onClearCompleted}/>  
</div>
);
});

    render(){
      const { getTodoListAPIStatus, getTodoListAPIError,onAddTodo } = this.props.todoStore;
      console.log(getTodoListAPIStatus,getTodoListAPIError)

      return (
        <div>
        
          <LoadingWrapperWithFailure
              apiError={getTodoListAPIError}
              apiStatus={getTodoListAPIStatus}
              onRetryClick={this.doNetworkCalls}
              renderSuccessUI={this.renderUserList}/>

        </div>
      );
     
    }
}
export default NewTodoApp