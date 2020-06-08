import React from "react";
import { inject } from "mobx-react";


@inject('productStore')
class Pagination extends React.Component{
    render(){
        return (
            <div>
                <button >Left</button>
                <button >Right</button>
            </div>
        )
    }
}
export default Pagination