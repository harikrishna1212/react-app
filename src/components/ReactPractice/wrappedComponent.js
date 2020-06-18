import React from "react";
import withHigherOrderComponent from "../ReactPractice/hoc";
import { observer } from "mobx-react";
import {observable} from "mobx";
@observer
class LearningHocComponent extends React.Component{
    @observable country = "india";
    render(){
    return (
    <div><p>name:{this.props.name}</p>
    <h1>age:{this.props.age}</h1>
    <p>state:{this.props.state}</p>
    <p>country:{this.country}</p>
    </div>
    )}
}
export default withHigherOrderComponent(LearningHocComponent) 