import React from 'react';
class SelectRegion extends React.Component {
    render() {
        return <select className={this.props.selectedTheme==="Lightmode"?"SelectRegionLight":"SelectRegionDark"} onChange={this.props.onChangeSelectedRegion}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
    }
}
export { SelectRegion };






