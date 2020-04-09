



/*global fetch*/
import React from 'react';
import { Header } from './Header.js';
import { CountriesFilterBar } from './CountriesFilterBar.js';
import { Countries } from './Countries.js';
import { withRouter } from 'react-router-dom';



class CountriesDashboardApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            searchText: "",
            selectedRegion: "All",
        }
    }
    containerStyles = () => {
        return this.props.containerStyles()
    }
    componentDidMount = () => {
        setTimeout(() => {
            fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then(json => (this.getCountries(json)))
        }, 1000)
    }
    getCountries = (json) => {
        let newList = this.state.countries.slice(0)
        json.map((eachobject, index) => {
            newList.push({
                id: index,
                src: eachobject.flag,
                name: eachobject.name,
                population: eachobject.population,
                region: eachobject.region,
                capital: eachobject.capital,
                alpha3Code: eachobject.alpha3Code
            })
        })
        this.setState({ countries: newList })
    }
    displayCountries = () => {
        return <Countries countries={this.filterCountriesBySearchText()}/>
    }
    filterCountriesBySelectedRegion = () => {
        let duplicateFilterRegionList = this.state.countries.slice(0)
        if (this.state.selectedRegion === "All")
            return duplicateFilterRegionList
        else {
            duplicateFilterRegionList = duplicateFilterRegionList.filter(eachobject => eachobject.region === this.state.selectedRegion)
            return duplicateFilterRegionList;
        }
    }
    filterCountriesBySearchText = () => {
        let duplicateFiltersearchList = this.filterCountriesBySelectedRegion()
        let newlist = duplicateFiltersearchList.filter(eachobject => eachobject.name.toUpperCase().includes(this.state.searchText.toUpperCase()));
        return newlist;
    }
    onChangeSearchText = (event) => {
        this.setState({ searchText: event.target.value })
    }
    onChangeSelectedRegion = (event) => {
        this.setState({ selectedRegion: event.target.value })
    }
    loading = () => {
        return <p className="page-loading">Loading...</p>
    }
    render() {
        return (<div className={this.containerStyles()}>
                    <Header onChangeTheme={this.props.onChangeTheme} selectedTheme={this.props.theme} />
                    <CountriesFilterBar searchText={this.state.searchText} regionOptions={this.state.regionOptions} selectedTheme={this.props.theme} onChangeSelectedRegion={this.onChangeSelectedRegion} onChangeSearchText={this.onChangeSearchText}/>
                    {(this.state.countries.length === 0)? this.loading():<div className="Countries">{this.displayCountries()}</div>}
                </div>)
    }
}
export default withRouter(CountriesDashboardApp)