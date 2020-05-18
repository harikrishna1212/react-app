import React from "react"
import { observer } from "mobx-react";

class SubTotal extends React.Component{
    render(){
        const {total} = this.props;
       
        return (
            <div>
              <p>SUBTOTAL</p>
              {total}
            </div>
        )
    }

}
export  {SubTotal}