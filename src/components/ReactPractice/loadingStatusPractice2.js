import React from 'react'
import LoadingComponentTwo from '../LoadingStatusTwo/index'
class LoadingStatusRouteTwo extends React.Component {
   render() {
      const { userDetails, getAdminAPIStatus, getUserAPIStatus } = this.props
      return (
         <LoadingComponentTwo
            userDetails={userDetails}
            getAdminAPIStatus={getAdminAPIStatus}
            getUserAPIStatus={getUserAPIStatus}
         />
      )
   }
}
export default LoadingStatusRouteTwo
