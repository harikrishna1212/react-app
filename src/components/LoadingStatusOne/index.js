import React from 'react'
import { observer } from 'mobx-react'
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure/index'
// import {LoadingWrapperWithApi}
@observer
class LoadingComponentOne extends React.Component {
   render() {
      const { adminDetails } = this.props

      return <div>bala</div>
   }
}
export default LoadingComponentOne
