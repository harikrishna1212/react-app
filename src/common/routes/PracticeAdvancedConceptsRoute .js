import React from "react";
import ViewEditToggle from "../../components/ViewEditToggle/index";
import CollapseExpand from "../../components/CollapseExpand/index";
import DeviceTypeText from "../../components/DeviceTypeText/index"
class PracticeAdvancedConceptsRoute extends React.Component{
    render(){
        return (
            <div>
                <ViewEditToggle/>
                <CollapseExpand/>
                <DeviceTypeText/>
            </div>


        );
    }
}
export default PracticeAdvancedConceptsRoute