import React from 'react'
import LoadingComponentOne from '../LoadingStatusOne/index'

class LoadingStatusRouteOne extends React.Component {
   render() {
      const { adminDetails} = this.props
      return (
         <LoadingComponentOne
            adminDetails={adminDetails}
         />
      )
   }
}
export default LoadingStatusRouteOne
