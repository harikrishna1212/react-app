// import {observable,action,reaction} from 'mobx';
// class CounterApp{
//    render(){
//       reaction (()=>{counterStore.count},(count)=>{console.log("vamsi",count)})
//    }
//    @observable count=0;
//    @action.bound
//    onIncrement(){
//     this.count+=1;
//    }
//    @action.bound
//    onDecrement(){
//        this.count-=1
//    }
//    @action.bound
//    onChangeCount(){
      
//    }
   
// }
// const counterStore=new CounterApp
// export  default counterStore
import { observable,action} from 'mobx'

class CounterStore {
   
   @observable count:any = 0

   @action.bound
   incrementCounter():any {
      this.count = this.count + 1

   }

   @action.bound
   decrementCounter():any {
      this.count = this.count - 1
   }
}

export default CounterStore

