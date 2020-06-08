import React from "react";
import withToggle from "../../common/hocs/index";
import { observer } from "mobx-react";

@observer
class CollapseExpand extends React.Component{
    onToggle=()=>{
        const {onToggle} = this.props;
        onToggle()
    }

    render(){
        const {toggleStatus} = this.props;
      
        return(

        <div>
        {toggleStatus?
            <div>
            <p>Eggs</p>
            <p>Milk</p>
            </div>:
            <div></div>

    }

        <button onClick={this.onToggle}>{toggleStatus? "Collpase" : "Expand"}</button>
            </div>
        );
    }
}
export default withToggle(CollapseExpand)