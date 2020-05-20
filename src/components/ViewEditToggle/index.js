import React from "react";
import withToggle from "../../common/hocs/index";
import { observer } from "mobx-react";
import { observable } from "mobx";
@observer
class ViewEditToggle extends React.Component{
    @observable text="Click on the edit button to start editing"
    onToggle=()=>{
        const {onToggle} = this.props;
        onToggle()
    }
    handleChange=(event)=>{
        this.text = event.target.value;

    }
    render(){
        const {toggleStatus} = this.props;
      
        return(

        <div>{!toggleStatus?<p>{this.text}</p>:
        <input type="text" value ={this.text} onChange={this.handleChange}/>
    }
            <button onClick={this.onToggle}>{toggleStatus? "cancel" : "Edit"}</button>
            </div>
        );
    }
}
export default withToggle(ViewEditToggle)