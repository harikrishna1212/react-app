import React from "react";
import Product from "../Product/index";
import {observer} from "mobx-react";
import { toJS } from "mobx";
import {AllProductsInSingleDiv} from '../ProductList/styledComponents'
@observer
class ProductList extends React.Component{

    render(){
        const {products,onClickAddToCart} = this.props;
        const allProductINJavaScriptObject= toJS(products)
        return(
            <AllProductsInSingleDiv>
            {allProductINJavaScriptObject.map((eachProduct)=>{
               return <Product key = {eachProduct.productId}
                eachProduct={eachProduct} onClickAddToCart={onClickAddToCart} />
            })}
            </AllProductsInSingleDiv>


        );
    }

}
export default ProductList  