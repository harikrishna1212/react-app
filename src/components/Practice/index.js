import React from "react";
import {autorun,observable,action} from "mobx";
import { observer } from "mobx-react";
@observer
class PracticeExample extends React.Component{
    @observable count = -47;

    @action
    onDecre=()=>{
        this.count = this.count+12;
        this.count = this.count-23;
        this.count = this.count-30;
        
    }
    
    render(){
            return(
            <div>
                <p>{this.count}</p>
                <button onClick={this.onDecre}>DEc</button>
            </div>
            );
    
}

}
export default PracticeExample