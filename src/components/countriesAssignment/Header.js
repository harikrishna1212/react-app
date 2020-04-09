
import React from 'react';
import { IoMdMoon } from "react-icons/io";
class Header extends React.Component {
    render() {

        return <div className="Header"> 
                  <p className="Header-content">Where in the world?</p>
                  <button className={this.selectedTheme==="Lightmode"?"LightThemeButton":"DarkThemeButton"} onClick={this.setCurrentTheme}><IoMdMoon/>{this.selectedTheme}</button>
              </div>
    }
}
export { Header };
