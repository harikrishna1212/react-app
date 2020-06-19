import React from 'react'
import LoadingStatusRouteOne from './LoadingStatusPractice1'
import LoadingStatusRouteTwo from './loadingStatusPractice2';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure/index'
import { inject, observer } from 'mobx-react';
import {getLoadingStatus} from "@ib/api-utils";
import {isAPIFailed} from "@ib/api-utils";
@inject('loadingPracticeStore')
@observer
class BothLoadingsComponent extends React.Component {
  componentDidMount(){
      this.doNetworkCalls()

   }
   
    doNetworkCalls =async ()=>{
      const {getAdminDeatilsApi,getUserDetailsApi} = this.props.loadingPracticeStore;
      await getAdminDeatilsApi();
      getUserDetailsApi();

   }
   renderSuccessUI=observer(()=>{
      const {adminDetails,userDetails} = this.props.loadingPracticeStore
      return(
         <div>
            <LoadingStatusRouteOne adminDetails={adminDetails}/>
            <LoadingStatusRouteTwo userDetails = {userDetails}/>
         </div>
      )

   })
   render() {
      const {
         getAdminAPIStatus,
         getUserAPIStatus,getAdminAPIError,getUserAPIError
      } = this.props.loadingPracticeStore;

    const loadingStatus = getLoadingStatus(getAdminAPIStatus,getUserAPIStatus);
    const loadingError = isAPIFailed(getUserAPIError,getAdminAPIError);
      return (
         <LoadingWrapperWithFailure
         apiStatus={loadingStatus}
         apiError = {loadingError}
         renderSuccessUI={this.renderSuccessUI}
         onRetryClick={this.doNetworkCalls}/>
         // <div>
         //    <LoadingStatusRouteOne
         //       adminDetails={adminDetails}
         //       getAdminAPIStatus={getAdminAPIStatus}
         //       getUserAPIStatus={getUserAPIStatus}
         //    />
         //    <LoadingStatusRouteTwo
         //       userDetails={userDetails}
         //       getAdminAPIStatus={getAdminAPIStatus}
         //       getUserAPIStatus={getUserAPIStatus}
         //    />
         // </div>
      )
   }
}
export default BothLoadingsComponent
