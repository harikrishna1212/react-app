import React, {Component}from "react";
import counterStore from "../../stores/CounterStore/index.js";
import {observer} from "mobx-react";
@observer
class CounterPage extends Component{
  handleIncrement=()=>{
    counterStore.onIncrement()
  }
  handleDecrement=()=>{
    counterStore.onDecrement()
  }
  handleOnChange=()=>{
    
  }
  render(){
    return (
      <div>
      <button onClick={this.handleIncrement}>+</button>
      <input type="number" value={counterStore.count} />
      <button onClick={this.handleDecrement}>-</button>
      </div>
      );
  }
}
export default CounterPage
 



// import React, { Component } from 'react'
// import { observer, inject } from 'mobx-react'

// import stores from '../../stores'
// const counterStore = stores.counterStore

// @observer
// class CounterPage extends Component {
//   handleIncrement = () => {
//     counterStore.incrementCounter()
//   }

//   handleDecrement = () => {
//     if (counterStore.count !== 0) {
//       counterStore.decrementCounter()
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>{counterStore.count}</h1>
//         <button onClick={this.handleIncrement}>+</button>
//         <button onClick={this.handleDecrement}>-</button>
//       </div>
//     )
//   }
// }

// export default CounterPage
