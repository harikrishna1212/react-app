import React from 'react'
class LoadingComponentOne extends React.Component {
   render() {
      const { adminDetails, getAdminAPIStatus, getUserAPIStatus } = this.props
      return <div>{adminDetails}</div>
   }
}
export default LoadingComponentOne
