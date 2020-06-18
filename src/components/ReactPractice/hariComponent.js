import React from "react";
import LearningHocComponent from "../ReactPractice/wrappedComponent"
import { observable } from "mobx";
class HariComponent extends React.Component{
    @observable age =  22;
    @observable state = "andhrapradesh";
    render(){
        return(
            <div><LearningHocComponent age ={this.age} state ={this.state}/></div>
        )
    }

}
export default HariComponent