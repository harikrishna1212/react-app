import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
@observer
class MouseCoordinates  extends React.Component{
@observable  x= 0;
@observable y=0;
handleMouseMove=(event)=>{
    this.x = event.clientX
    this.y=  event.clientY
}
render(){
    
    const{render}=this.props;
    const mouseCoordinates = {x:this.x,y:this.y}
    return render(mouseCoordinates,this.handleMouseMove)
    

}
}
export default MouseCoordinates