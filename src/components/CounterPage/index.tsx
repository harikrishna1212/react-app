import React, {Component}from "react";
import {observer} from "mobx-react";
import counterStore from "../../stores/CounterStore/index";
@observer
class CounterPage extends Component{
  handleIncrement=()=>{
    // counterStore.onIncrement()
  }
  handleDecrement=()=>{
    // counterStore.onDecrement()
  }
  handleOnChange=()=>{
    
  }
  render(){
    return (
      <div>
      <button onClick={this.handleIncrement}>+</button>
      <input type="number"  />
      <button onClick={this.handleDecrement}>-</button>
      </div>
      );
  }
}
export default CounterPage
 



// import React, { Component} from 'react'
// import { observer, inject } from 'mobx-react'
// import { reaction, observable } from 'mobx'

// import CounterStore from '../../stores/CounterStore'
// import stores from '../../stores'
// const counterStore = stores.counterStore

// @observer
// class CounterPage extends Component {
//   @observable count:any = 0;
//   handleIncrement = () => {
//     reaction (()=>{CounterStore.count},(count)=>{console.log("vamsi",count)})
//     counterStore.incrementCounter()
//   }

//   handleDecrement = () => {
//     if (counterStore.count !== 0) {
//       counterStore.decrementCounter()
//       reaction (()=>{CounterStore.count},(count)=>{console.log("vamsi",count)})
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
