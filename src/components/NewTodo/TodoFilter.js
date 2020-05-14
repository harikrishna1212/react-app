import React from "react";
class TodoFilter extends React.Component{
    onChangeSelectedFilter(){
        
    }
    render(){
        return( 
                <div>
                <button  value="All" onClick={this.onChangeSelectedFilter}>All</button>
                <button value="Active" onClick={this.onChangeSelectedFilter}>Active</button>
                <button  value="Completed" onClick={this.onChangeSelectedFilter}>Completed</button>
               < button onClick={this.onClearCompleted}>ClearCompleted</button>
                </div>
                )
            }

    

    }

export default TodoFilter