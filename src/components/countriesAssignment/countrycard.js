import React from "react";
import {withRouter} from "react-router"
import './index.css';
let singleCountryData=[];
class CountryCard extends React.Component{
    state={
        specificCountry:[]
    }
    prevsPage=()=>{
        const {history}=this.props
        history.goBack();
    }
    componentDidMount=()=>{
        fetch('https://restcountries.eu/rest/v2/all')
    .then(Data=>{
        return Data.json();
    })
    .then(eachCountriesData=>{
        singleCountryData = eachCountriesData;
        let selectedSingleCountry=[];
        
        //console.log(singleCountryData)
        
        eachCountriesData.forEach( country=>{
            //console.log(country)
            if(this.props.location.state.cname.value===country.name){
            selectedSingleCountry.push({
                Countryname:country.name,
                Population:country.population,
                Region:country.region,
                Capital:country.capital,
                NativeName:country.nativeName,
                SubRegion:country.subregion,
                Borders:country.borders,
                TopLevelDomain:country.topLevelDomain,
                Curriencs:country.currencies,
                Languages:country.languages,
                Flag:country.flag,
            
                
            }); 
            
            }
            
        });
        //console.log(selectedSingleCountry);
        this.setState({
                specificCountry:selectedSingleCountry
            });
            
    });
    
    }
    render(){
        //console.log(this.state.specificCountry)
        if(this.state.specificCountry.length>0){
            //const  {CountriesList}=this.props;
                            
           const all= this.state.specificCountry.map(name=>{
               
               console.log(name);
               
              return( 
              <div className="main-root-div">
              <div className="root-div" >
              <button onClick={this.prevsPage}>goback</button>
              <img className="image-size"src={name.Flag} />
                <h3>{name.Countryname}</h3>
                <h3>Population:{name.Population}</h3>
                <h3>Region:{name.Region}</h3>
                <h3>Capital:{name.Capital}</h3>
                <h3>NativeName:{name.NativeName}</h3>
                <h3>SubRegion:{name.SubRegion}</h3>
                <div>
                <h1> Borders:</h1>
                <ul><BorderCountries borders={name.Borders}/></ul>
                </div>
                
                <h3>TopLevelDomain:{name.TopLevelDomain[0]}</h3>
                <h3>Curriencs:{name.Curriencs[0].name}</h3>
                <h3>Languages:{name.Languages[0].name}</h3>
                
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


class BorderCountries extends React.Component{
    render(){
        const bordersCountries=this.props.borders.map((eachBorder)=>{
            return(
                
                <li><button>{eachBorder}</button></li>
                )
        })
        return bordersCountries;
    }
}
export  default withRouter(CountryCard)