import React from "react"

class ProvideC extends React.Component{

render(){
    const  {temp}=this.props;
return (
    <div>{temp}</div>
)
}
}
export default ProvideC