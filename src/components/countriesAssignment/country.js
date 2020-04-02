import React from "react";
//import {CountryCard} from "./countrycard.js" 
import {withRouter} from "react-router";
import './index.css';
class Countries extends React.Component{
    navigatorNextPage=(value)=>{
        //console.log(value);
        
        const {history}=this.props
        history.push({pathname:`/countriesDashboard/:${value}`,state:{cname:{value}}});
    }
    render(){
        //console.log("1");
       // console.log(this.props.CountriesList.length)
        //console.log(this.props.CountriesList)
        if(this.props.CountriesList.length>0){
            //const  {CountriesList}=this.props;
                            
           const all= this.props.CountriesList.map(name=>{
               
              return( 
              <div className="main-root-div" onClick={()=>{this.navigatorNextPage(name.Countryname)}}>
              <div className="root-div" >
              <img className="image-size"src={name.Flag}/>
                <h3>{name.Countryname}</h3>
                <h3>Population:{name.Population}</h3>
                <h3>Region:{name.Region}</h3>
                <h3>Capital:{name.Capital}</h3>

                </div>
                
                </div>
                );
              
            });
            return all;
            
                
                
            
        }
        else
        return "";
        
    
    }
}
export default withRouter(Countries)