import React from 'react'
import LoadingStatusRouteOne from './LoadingStatusPractice1'
import LoadingStatusRouteTwo from './loadingStatusPractice2'
import { inject } from 'mobx-react'
inject('loadingPracticeStore')
class BothLoadingsComponent extends React.Component {
   render() {
      const {
         adminDetails,
         userDetails,
         getAdminAPIStatus,
         getUserAPIStatus
      } = this.props.loadingPracticeStore
      return (
         <div>
            <LoadingStatusRouteOne
               adminDetails={adminDetails}
               getAdminAPIStatus={getAdminAPIStatus}
               getUserAPIStatus={getUserAPIStatus}
            />
            <LoadingStatusRouteTwo
               userDetails={userDetails}
               getAdminAPIStatus={getAdminAPIStatus}
               getUserAPIStatus={getUserAPIStatus}
            />
         </div>
      )
   }
}
export default BothLoadingsComponent
