import React from 'react'
import CountryCard from './CountryCard'
class Countries extends React.Component {
    renderCountries = () => {
        if (this.props.countries.length > 0)
            return this.props.countries.map((eachobject) => <CountryCard key={eachobject.id} eachobject={eachobject}/>)
        else
            return <p>Result Not Found</p>
    }
    render() {
        return this.renderCountries()
    }
}
export { Countries }
   





