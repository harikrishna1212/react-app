import React from 'react'
class SearchCountry extends React.Component{
    render(){
        return <input className={this.props.selectedTheme==="Lightmode"?"SeachCountryLight":"SearchCountryDark"} 
        type="text" placeholder="Search Country" onChange={this.props.onChangeSearchText}/>
    }
}
export {SearchCountry}