import React from "react";
import { observer } from "mobx-react";
import { computed, observable } from "mobx";
function withScreenSizeDetectors(WrapperComponent){
    @observer
    class EnhanceComponent extends React.Component{
        @observable windowInnerWidth = window.innerWidth;
        componentDidMount(){
            window.addEventListener("resize",this.updateWindowWidth)
        }
        updateWindowWidth=()=>{
            this.windowInnerWidth = window.innerWidth
        }
        @computed
        get isMobile(){
            if (this.windowInnerWidth < 576)
            return true;
            return false;
        }
        @computed
        get isTablet(){
            if (this.windowInnerWidth >= 576 && this.windowInnerWidth < 992)
            return true;
            return false;
        }
        @computed
        get isDesktop(){
            if (this.windowInnerWidth >= 992)
            return true;
            return false;
        }


        render(){
            return <WrapperComponent isMobile={this.isMobile}
            isTablet={this.isTablet} isDesktop = {this.isDesktop}/>
        }

    }
    return EnhanceComponent

}
export default withScreenSizeDetectors