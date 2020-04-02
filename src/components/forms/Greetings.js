import React from 'react';
import './assigmnemt-3.css';

 class Greetings extends React.Component{
    constructor(props){
        super(props);
        this.state={
            UserInputText:"",
            displayName:''
        };
    }
    handleUserInput=(event)=>{
        
        this.setState({
            UserInputText:event.target.value,displayName:''
        });
    }
    handleSubmit=(event)=>{
        this.setState({
            displayName:this.state.UserInputText,UserInputText:"",
        });
      event.preventDefault();  
    }
    displayMessage=()=>{
        return <div>{this.state.displayName}</div>
    }
   
    render(){
        return(
        <div className="greetings">
        <form onSubmit={this.handleSubmit}>
      <input className="greetings-input" type="text" placeholder="Enter Your Name" 
       onChange={this.handleUserInput}  value={this.state.UserInputText}/>
        <button type="submit" className=" greet-button" >Greet</button>
        
        {this.displayMessage()}
        </form>
        
        
        </div>
        );
       
    }
}
export {Greetings};





// class Greetings extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//   }

//   handleChange=(event)=> {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit=(event)=> {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         <input type="submit" value="Submit"/>
//       </form>
//     );
//   }
// }

//export {Greetings};