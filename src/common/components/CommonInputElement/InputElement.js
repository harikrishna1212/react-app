import React from "react";
import CommonInputTagStyle from "./StyledComponent"
class InputElement extends React.Component{
   
    render(){
        const{type,placeholder,value,onChange} = this.props
        return <CommonInputTagStyle 
         type = {type}
         placeholder = {placeholder} 
         defaultValue ={value} 
         onChange = {onChange}/>
    }
}
export default InputElement