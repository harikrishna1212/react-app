/*global fetch*/
import React from "react";
import Countries from './country.js';
import {withRouter} from "react-router"
import './index.css';

let countryData=[];
class CountriesDashboardApp extends React.Component{
    constructor(){
        super();
        this.state={
         countries:[],
        selectedTheme:true
        };
    }
componentDidMount=()=>{
    
    fetch('https://restcountries.eu/rest/v2/all')
    .then(Data=>{
        return Data.json();
    })
    .then(eachCountriesData=>{
        let updatearray=[]
        eachCountriesData.forEach( country=>{
            updatearray.push({
                Countryname:country.name,
                Population:country.population,
                Region:country.region,
                Capital:country.capital,
                Flag:country.flag,
            });    
        });
        countryData=updatearray;
        this.setState({
                countries:updatearray
            });
    });
}      
getCountries=()=>{
    
    
    
}       
filterCountriesBySelectedRegion=(e)=>{
    let regionCountries=[];
       countryData.filter(country=>{
        if(((country.Region)===(e.target.value))||(e.target.value=== "All")){
           regionCountries.push(country);
        }
    });
    console.log(regionCountries)
    this.setState({
        countries:regionCountries     
    });
}


filterCountriesByName=(value)=>{
    alert(1)
    //console.log(this.state.countries)
    const  searchByCountry=[];
    this.state.countries.forEach(item=>{
        
        let pattern=new RegExp(value, 'i');
        
        let cn=item.Countryname;
        let mn=cn.match(pattern);
        if(mn!==null){
            searchByCountry.push(item);
        }
    });
    
    this.setState({
        countries:searchByCountry
    });  
    
    
}
onChangeTheme=(e)=>{
    if(this.state.selectedTheme===true){
        this.setState({
        selectedTheme:false
    });

        }
    else{
        this.setState({
        selectedTheme:true
    });

    }
}
getCountries=(e)=>{
    this.setState({
        countries:e.target
    });
    
}

render(){
    
 
        if(this.state.selectedTheme===true){
            return(
        <div className="main-countries-page-white">
        <Header onChangeTheme={this.onChangeTheme} theme={this.state.selectedTheme}/>
        <SearchCountry filterCountriesByName1={this.filterCountriesByName}/>  
        <SelectRegion filterCountriesBySelectedRegion={this.filterCountriesBySelectedRegion}/>  
        <Countries CountriesList={this.state.countries} displayCountry={this.getCountries} />
    </div>);
        }
        else{
            return(
            <div className="main-countries-page-black">
        <Header onChangeTheme={this.onChangeTheme} theme={this.state.selectedTheme}/>
        <SearchCountry filterCountriesByName1={this.filterCountriesByName}/>  
        <SelectRegion filterCountriesBySelectedRegion={this.filterCountriesBySelectedRegion}/>  
        <Countries CountriesList={this.state.countries} displayCountry={this.getCountries}/>
    </div>);
        }
    
}

    
}



class SelectRegion extends React.Component{
    render(){
        return(
            <div>
            <select id="select" className="select-region" onChange={this.props.filterCountriesBySelectedRegion}>
            <option value="All">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            </select>
            </div>
            );
    }
}


class SearchCountry extends React.Component{
    state={
      UserInputText:''
      
    }
     handleOnChange=(e)=>{
         //console.log(e.target.value)
        this.setState({
            UserInputText:e.target.value
        });
        
    }
    handleOnSubmit=(event)=>{
            
           //console.log(this.state.UserInputText)
          
             
           this.props.filterCountriesByName1(this.state.UserInputText);
          this.setState({
              UserInputText:''
       });
        event.preventDefault();
          
    }
        
    render(){
       //console.log("hari");
        return(
        <form onSubmit={this.handleOnSubmit}>
        <input type="text" onChange={this.handleOnChange} value={this.state.UserInputText}/>
        </form>
        );
    }
}

class Header extends React.Component{
    
    render(){
        
        return(
            <span onClick={this.props.onChangeTheme}> {this.props.theme ? "lightMode":"darkmode"}</span>
            );
    }
}
//ReactDOM.render(<CountriesDashboardApp/>,document.getElementById("root"))
export default withRouter(CountriesDashboardApp);