import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
  function withToggle(WrapperComponent){
    @observer
    class EnhanceComponent extends React.Component{
        @observable toggleStatus = false;
        onToggle=()=>{
              this.toggleStatus = !this.toggleStatus
        }
        render(){
            return <WrapperComponent onToggle={this.onToggle} toggleStatus={this.toggleStatus}/>

        }
    }
    return EnhanceComponent
}
export default withToggle
