import React from 'react';
import './assigmnemt-3.css';
class FavouriteDessert extends React.Component{
    constructor(props){
        super(props);
        this.state={
        selectedDessert:'',
         favoriteDessert:""
        }
    }
    handleUserInput=(e)=>{
        this.setState({
            selectedDessert:e.target.value,favoriteDessert:e.target.value
      //console.log(e.target.value)
    })
    }
    handleSubmit=(e)=>{
             this.setState({
            selectedDessert:''
             })
             e.preventDefault();  
    }
    displayMessage=()=>{
        
             
    }
    renderDessertOptions=()=>{
             
    }
    render(){
        return(
            <div className="fav-dessert">
            <h2>What is your Favourite Dessert</h2>
            <form onSubmit={this.handleSubmit}>
            <label>
            <input type="radio" value="Vanilla" name="favoriteDessert" onChange={this.handleUserInput}/>
            Vanilla
            </label>
            <label>
            <input type="radio" value="Butterscotch" name="favoriteDessert"
            onChange={this.handleUserInput}/>
            Buffer
            </label>
            <label>
            <input type="radio" value="Gulab Jamum" name="favoriteDessert"
            onChange={this.handleUserInput}/>
            Gulab Jamum
            </label>
            <label>
            <input type="radio" value="Yoghurt ports" name="favoriteDessert"
            onChange={this.handleUserInput}/>
            Yoghurt ports
            </label>
            <label>
            <input type="radio" value="Baked Bananna" name="favoriteDessert"
            onChange={this.handleUserInput}/>
            Baked Bananna
            </label>
            <label>
            <input type="radio" value="Chocolate" name="favoriteDessert"
            onChange={this.handleUserInput}/>
            Chocolate
            </label>
            <button onClick={this.displayMessage}>Make Your Choice</button>
            
            </form>
            </div>
            );
    }
    
}
export{FavouriteDessert}