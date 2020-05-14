import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import todoStore from "../../stores/TodoStore/index.js"
@observer
class AddTodo extends React.Component{
    @observable todoTitle="";

    @action.bound
    onAddTodo(title){
    todoStore.onAddTodo(title)

    }
    @action.bound
    onChangeInput(event){
        if(event.key==="Enter"){
        this.todoTitle=event.target.value;
        event.target.value=""
        this.onAddTodo(this.todoTitle)
        }

        
    }
    render(){
        // console.log(this.todoTitle)
      return <div>
          <input type="text"  onKeyDown={this.onChangeInput}  placeholder="EnterTodo"/>
            </div>
    }

}
export default AddTodo