import React from "react";
import ProductsSort from "../ProductsSort/index";
import {HeaderDiv} from '../Header/styledComponents';
class Header extends React.Component{
    render(){
        const {productCount,onSelectSortBy} = this.props
        return (
            <HeaderDiv>
                <p>{productCount} product(s) found</p>
                <ProductsSort onSelectSortBy={onSelectSortBy}/>


            </HeaderDiv>
        )
    }

}
export default Header