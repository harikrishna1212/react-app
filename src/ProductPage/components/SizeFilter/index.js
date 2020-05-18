import React from "react";
import { inject, observer } from "mobx-react";
import {ProductSizeButton,SizesHeading,SizesFilterDiv} from "../SizeFilter/styledComponents"
@inject('productStore')
@observer
class SizeFilter extends React.Component{
   
    onSelectSize=()=>{
        const {onSelectSize} =this.props.productStore;
        let selectedSize =event.target.value
        onSelectSize(selectedSize);

    }
    render(){
        return(
            <SizesFilterDiv>
                <SizesHeading>Sizes</SizesHeading>
                <ProductSizeButton  value="XS" onClick={this.onSelectSize}>XS</ProductSizeButton>
                <ProductSizeButton  value="S" onClick={this.onSelectSize}>S</ProductSizeButton>
                <ProductSizeButton  value="M" onClick={this.onSelectSize}>M</ProductSizeButton>
                <ProductSizeButton  value="L" onClick={this.onSelectSize}>L</ProductSizeButton>
                <ProductSizeButton  value="XL" onClick={this.onSelectSize}>XL</ProductSizeButton>
                <ProductSizeButton  value="XXL" onClick={this.onSelectSize}>XXL</ProductSizeButton>
            </SizesFilterDiv>
        )
    }

}
export default SizeFilter