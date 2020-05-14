import React from "react";
import {Provider,observer} from "mobx-react";
import ProvideB from "../ProvideB/ProvideB"
class ProvideA extends React.Component{
    render(){
    
        return <Provider temp={"value"}>
        <ProvideB/>
        </Provider>
    }
}
export default ProvideA