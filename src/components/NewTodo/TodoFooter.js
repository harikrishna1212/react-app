import React from "react";
import { observer } from "mobx-react";
@observer
class TodoFooter extends React.Component{
    onChangeSelectedFilter=()=>{
        const {todoStore}=this.props;
        todoStore.onChangeSelectedFilter(event.target.value)


    }
    
    render(){
        const {todoStore}=this.props;
        return(
        <div>
        <button  value="All" onClick={this.onChangeSelectedFilter}>All</button>
        <button value="Active" onClick={this.onChangeSelectedFilter}>Active</button>
        <button  value="Completed" onClick={this.onChangeSelectedFilter}>Completed</button>
       < button onClick={todoStore.onClearCompleted}>ClearCompleted</button>
        </div>
        )
    }
}
export default TodoFooter;