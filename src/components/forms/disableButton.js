/*global React*/
/*global ReactDOM*/
// class SetStateIsAsynchronous extends React.Component{
//     state={
//         count:0
//     }

// OnIncrement=()=>{
//     // this.setState({
//     //     count:this.state.count+1
//     // });
//     // console.log("Log0",this.state.count);
//     // this.setState({
//     //     count:this.state.count+1
//     // });
//     // console.log("Log1",this.state.count);
//     // this.setState({
//     //     count:this.state.count+1
//     // });
//     // console.log("Log2",this.state.count);
    
//     this.setState(prevstate=>({
//         count:prevstate.count+1
//     }));
//     console.log("log" ,this.state.count);
    
//     this.setState(prevstate=>({
//         count:prevstate.count+1
//     }));
//      console.log("log" ,this.state.count);
     
//      this.setState(prevstate=>({
//         count:prevstate.count+1
//     }));
//      console.log("log" ,this.state.count);
// }

 
// render(){
//     return (
//         <button onClick={this.OnIncrement}>clickme</button>
//         );

    
// }
// }
// ReactDOM.render(<SetStateIsAsynchronous/>,document.getElementById("root"));
// class ChildCounter extends React.Component{
//     state={
//         childCounter1:0,
//         childCounter2:0
//     }

// onIncrement=()=>{
//     this.props.onParentCounterIncreament();
//     this.setState({childCounter1:this.state.childCounter1+1})
// }
// }

// class Parent extends React.ChildCounter{
//     constructor(props){
//         super(props);
//         this.state={
             
//         parentCounter:0
//         }
//     }
    
//     onparentCounterIncreament=()=>{
//         this.setState({
//             parentCounter:this.state.parentCounter+1})
//         }
    
// render(){
//     console.log("parent counter rendre called");
//     return(
//         <ChildCounter
//         on
//         )
//     }
// }