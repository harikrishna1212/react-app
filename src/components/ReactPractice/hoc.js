import React from "react";
function withHigherOrderComponent(WrappedComponent){
return class extends React.Component{
    render(){
        return <WrappedComponent name="hari" {...this.props} />
    }
} 
}
export default withHigherOrderComponent