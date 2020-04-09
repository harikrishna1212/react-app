import React from 'react';
import { SearchCountry } from './SearchCountry.js'
import { SelectRegion } from './SelectRegion.js'
class CountriesFilterBar extends React.Component {
    render() {
        return <div className="SearchBar">
                <SearchCountry onChangeSearchText={this.props.onChangeSearchText} selectedTheme={this.props.selectedTheme}/>
                <SelectRegion onChangeSelectedRegion={this.props.onChangeSelectedRegion} regionOptions={this.props.regionOptions} selectedTheme={this.props.selectedTheme}/>
                </div>
    }
}
export { CountriesFilterBar };
