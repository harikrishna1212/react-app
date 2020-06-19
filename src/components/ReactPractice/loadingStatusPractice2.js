import React from 'react'
import LoadingComponentTwo from '../LoadingStatusTwo/index';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure/index';
class LoadingStatusRouteTwo extends React.Component {
   render() {
      const { userDetails} = this.props
      return (
         <LoadingComponentTwo
            userDetails={userDetails}
         />
      )
   }
}
export default LoadingStatusRouteTwo
