import React from "react";
import { observer } from "mobx-react";
import TodoFilter from "../NewTodo/TodoFilter"



@observer
class TodoFooter extends React.Component{
    
    render(){
        return(
        <TodoFilter/>
        );
    }
    
   
}
export default TodoFooter;