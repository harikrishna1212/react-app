import React from 'react'
import { observer } from 'mobx-react'
@observer
class LoadingComponentTwo extends React.Component {
   render() {
      const { userDetails } = this.props
      return (
         <div>
            bala
         </div>
      )
   }
}
export default LoadingComponentTwo
