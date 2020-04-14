import React from "react"
import ProvideC from "../ProvideC/ProvideC";
type ProvideBProps={
    temp:string
}
class ProvideB extends React.Component<ProvideBProps>{
    render(){
        const {temp}=this.props
        return <ProvideC temp={temp}/>
    }




}
export default ProvideB