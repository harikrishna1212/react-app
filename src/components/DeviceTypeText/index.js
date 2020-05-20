import React from "react";
import withScreenSizeDetectors from "../../common/hocs/withScreenSizeDetectors "
import { observer } from "mobx-react";
@observer
class DeviceTypeText extends React.Component{
render(){
    const {isMobile,isTablet} = this.props;
    return (
        <div>
        <p>DeviceType</p>
        {isMobile ? "Mobile" : isTablet ? " Tablet" :"Desktop"}
        </div>
    )
}
}
export default withScreenSizeDetectors(DeviceTypeText)