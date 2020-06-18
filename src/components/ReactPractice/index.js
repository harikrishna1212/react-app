import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
@observer
class ReactPractice extends React.Component {
   @observable name = ''
   constructor() {
      super()
      this.name = 'hari';
      console.log('constructor')
   }
   componentDidMount() {
      this.name = 'Bala'
      console.log('componentDidmount')
   }
   componentWillMount() {
    
      console.log('ComponentWillMount')
   }
   onButtonClick = () => {
      this.name = 'Ramesh'
      console.log('onButtonClick')
   }

   render() {
      console.log('Render')
      return (
         <div>
            <p>Harikrishna{this.name}</p>
            <button onClick={this.onButtonClick}>click</button>
         </div>
      )
   }
}
export default ReactPractice
