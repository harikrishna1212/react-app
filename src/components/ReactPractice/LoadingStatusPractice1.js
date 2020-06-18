import React from 'react'
import LoadingComponentOne from '../LoadingStatusOne/index'

class LoadingStatusRouteOne extends React.Component {
   render() {
      const { adminDetails, getAdminAPIStatus, getUserAPIStatus } = this.props
      return (
         <LoadingComponentOne
            adminDetails={adminDetails}
            getAdminAPIStatus={getAdminAPIStatus}
            getUserAPIStatus={getUserAPIStatus}
         />
      )
   }
}
export default LoadingStatusRouteOne
