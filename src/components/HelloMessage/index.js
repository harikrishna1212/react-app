import React from "react";
class HelloMessage  extends React.Component{
    render(){
        return <p>Hello{this.props.message}</p>
    }
}
export{HelloMessage}