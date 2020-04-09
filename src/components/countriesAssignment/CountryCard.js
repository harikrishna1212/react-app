import React from 'react';
import { withRouter } from "react-router-dom";
class CountryCard extends React.Component {
    onclick = (obj) => {
        
        this.props.history.push({ pathname: `/country-dashboard-app/details/${obj.alpha3Code}`, state: [obj] });
    }
    render() {
        return <div className="each-country" onClick={()=>this.onclick(this.props.eachobject)}>
              <img  className="countries-images"src={this.props.eachobject.src} alt={this.props.eachobject.name}/>        
              <h4>{this.props.eachobject.name}</h4>
              <h6>Population:<span>{this.props.eachobject.population}</span></h6>
              <h6>Region:<span>{this.props.eachobject.region}</span></h6>
              <h6>Capital:<span>{this.props.eachobject.capital}</span></h6>
              </div>
    }
}
export default withRouter(CountryCard);
