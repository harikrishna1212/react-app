import React from "react";
import { observer } from "mobx-react";
@observer
class TodoFilter extends React.Component{
    onChangeSelectedFilter=(event)=>{
        const {onChangeSelectedFilter,selectedTheme,onClearCompleted}=this.props;
        const filter=event.target.value
        onChangeSelectedFilter(filter) 

    }
    onClearCompleted=()=>{
      const {onChangeSelectedFilter,selectedTheme,onClearCompleted}=this.props;  
        onClearCompleted()

    }

render(){
    const {onChangeSelectedFilter,selectedTheme,onClearCompleted}=this.props;
    
        return(
        <div>
        <button  value="All" onClick={this.onChangeSelectedFilter}>All</button>
        <button value="Active" onClick={this.onChangeSelectedFilter}>Active</button>
        <button  value="Completed" onClick={this.onChangeSelectedFilter}>Completed</button>
       < button onClick={this.onClearCompleted}>ClearCompleted</button>
        </div>
        );
    
}
}
export default TodoFilter