import React from 'react'
class LoadingComponentTwo extends React.Component {
   render() {
      const { userDetails, getAdminAPIStatus, getUserAPIStatus } = this.props
      return <div>{userDetails}</div>
   }
}
export default LoadingComponentTwo
