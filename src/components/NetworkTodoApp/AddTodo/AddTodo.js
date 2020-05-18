import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class AddTodo extends React.Component{
    @observable todoTitle="";

    @action.bound
    onAddTodo(title){
    const{onAddTodo}=this.props;
    onAddTodo(title)

    }
    @action.bound
    onChangeInput(){
        if(event.key==="Enter"){
        let id=Math.random().toString();
        let isCompleted=false;
        this.todoTitle=event.target.value;
        event.target.value="";
        this.onAddTodo(this.todoTitle,id,isCompleted)
        } 
    }
    render(){
        
      return <div>
          <input type="text"  onKeyDown={this.onChangeInput}  placeholder="EnterTodo"/>
            </div>
    }

}
export default AddTodo