import React from "react";
import MouseCoordinates from "../MouseCoordinates/index"
class DisplayMouseCoordinates extends React.Component{

    render(){
        
        
        return(
                <div>
                    <h1>Disply mouse Coordinates</h1>
                    <MouseCoordinates render={(object,mousehover)=>
                    <div onMouseMove={mousehover}>{object.x},{object.y}</div>}/>

                </div>
        )
                

        }
}
export default DisplayMouseCoordinates