import React from "react";
import ViewEditToggle from "../../components/ViewEditToggle/index";
import CollapseExpand from "../../components/CollapseExpand/index";
import DeviceTypeText from "../../components/DeviceTypeText/index";
import DisplayMouseCoordinates from "../components/DisplayMouseCoordinates"
class PracticeAdvancedConceptsRoute extends React.Component{
    render(){
        return (
            <div>
                <ViewEditToggle/>
                <CollapseExpand/>
                <DeviceTypeText/>
                <DisplayMouseCoordinates/>
            </div>


        );
    }
}
export default PracticeAdvancedConceptsRoute