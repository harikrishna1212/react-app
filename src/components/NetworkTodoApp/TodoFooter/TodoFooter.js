import React from "react";
import { observer } from "mobx-react";
import TodoFilter from "../TodoFilter/TodoFilter"

@observer
class TodoFooter extends React.Component{

   render(){
       const {selectedFilter,onChangeSelectedFilter,onClearCompleted}=this.props;
       return <TodoFilter selectedFilter={selectedFilter} 
        onChangeSelectedFilter={onChangeSelectedFilter} onClearCompleted={onClearCompleted} />
   } 

}
export default TodoFooter;