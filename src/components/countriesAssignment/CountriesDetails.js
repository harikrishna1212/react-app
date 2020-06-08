import React from 'react';
import { TiArrowLeftThick } from "react-icons/ti";
/*global fetch*/
import { withRouter } from "react-router-dom";
import { Header } from './Header';
//import { BorderNames } from './borderNames.js'

class CountriesDetails extends React.Component {
    constructor(props) {
        super(props)
        const { match } = this.props;
        this.alphacode = match.params.CountriesDetails;
        this.state = {
            countryDetails: [],
            duplistOfJson: ""
        }
      
    }
    componentDidMount = () => {
        this.getCountryDetails()
    }
    getCountryDetails = (json) => {
        let newList = [];
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(json => {
                this.state.duplistOfJson = json
                json.forEach((eachobject, index) => {
                    if (eachobject.alpha3Code === this.alphacode) {
                        newList.push({
                            id: index,
                            src: eachobject.flag,
                            name: eachobject.name,
                            nativename: eachobject.nativeName,
                            population: eachobject.population,
                            region: eachobject.region,
                            subregion: eachobject.subregion,
                            capital: eachobject.capital,
                            topleveldomain: eachobject.topLevelDomain,
                            currencies: eachobject.currencies,
                            languages: eachobject.languages,
                            borders: eachobject.borders
                        })
                        this.setState({ countryDetails: newList })
                    }
                })
            })
    }
    navigateToCountryDetailsPage = (AlphaCode) => {
        this.props.history.push({ pathname: `/country-dashboard-app/details/${AlphaCode}` })
        this.alphacode = AlphaCode;
        this.getCountryDetails()
    }
    navigateBack = () => {
        this.props.history.push('/CountriesDashboardApp');
    }
    borderNames = (eachCode) => {
        return this.state.duplistOfJson.map((eachobject) => {
            if (eachCode === eachobject.alpha3Code) {
                return eachobject.name
            }
        })
    }
    renderlist = () => {
        if (this.state.countryDetails.length > 0) {
            return (
        <div className={this.props.containerStyles()}>
        <Header onChangeTheme={this.props.onChangeTheme} selectedTheme={this.props.theme}/>
        <button className={this.props.theme==="Lightmode"?"LightTheme":"DarkTheme"} onClick={this.navigateBack}><TiArrowLeftThick/>Back</button>
        <div className="country-details">
        <div>
           <img className="country-details-img"src={this.state.countryDetails[0].src}/>
        </div>
        <div>
            <b>{this.state.countryDetails[0].name}</b>
            <p><b>Native Name: </b>{this.state.countryDetails[0].nativename}</p>
            <p><b>Population: </b>{this.state.countryDetails[0].population}</p>
            <p><b>Region: </b>{this.state.countryDetails[0].region}</p>
            <p><b>Sub Region: </b>{this.state.countryDetails[0].subregion}</p>
            <p><b>Capital: </b>{this.state.countryDetails[0].capital}</p>
        </div>
        <div>
            <p><b>Top Level Domain: </b>{this.state.countryDetails[0].topleveldomain}</p>
            <p><b>Currencies: </b>{this.state.countryDetails[0].currencies[0].name}</p>
            <p><b>Languages: </b>{this.state.countryDetails[0].languages.map((eachobj)=>eachobj.name).join(", ")}</p>
        </div>
        </div>
        <div className="border-names-container">
            <p><b>borders:</b>{this.state.countryDetails[0].borders.map(eachCode=> <button key={eachCode} className={this.props.theme==="Lightmode"?"border-button-Light":"border-button-Dark"} onClick={()=>{this.navigateToCountryDetailsPage(eachCode)}}>{this.borderNames(eachCode)}</button>)}</p>
        </div>
        </div>)
        }
    }
    render() {
        return (<div>
        {this.renderlist()}
        </div>)
    }
}
export default withRouter(CountriesDetails);

