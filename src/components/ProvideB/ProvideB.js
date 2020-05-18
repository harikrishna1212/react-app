import React from "react"
import ProvideC from "../ProvideC/ProvideC";

class ProvideB extends React.Component{
    render(){
        const {temp}=this.props
        return <ProvideC temp={temp}/>
    }




}
export default ProvideB