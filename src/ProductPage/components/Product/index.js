import React from "react";
import {FreeShipping,Image,Currency,AddToCartButton,ProductDiv,
    ProductCost,CurrencyFormat,ProductTitle,SmallLine,MoneyForSingleItem} from "../Product/styledComponents"
class Product extends React.Component{
    onClickAddToCart=(event)=>{
        const {onClickAddToCart} = this.props;
        onClickAddToCart(event.target.id)

    }
    render(){
        const {eachProduct} = this.props;
        let  installmentCost= eachProduct.price/eachProduct.installmentsCount
        let TotalInstallmentCost = installmentCost.toFixed(2)  

        return(

            <ProductDiv>
                {eachProduct.isFreeShipping ?<FreeShipping>Free shipping</FreeShipping>:''}
                <Image src={eachProduct.imageURL} />
                <ProductTitle>{eachProduct.title}</ProductTitle>
                <SmallLine></SmallLine>
                <Currency>
                <CurrencyFormat>{eachProduct.currencyFormat}</CurrencyFormat>
                <ProductCost>{eachProduct.price}</ProductCost>
                </Currency>
                <MoneyForSingleItem> or {eachProduct.installmentsCount}x{TotalInstallmentCost}</MoneyForSingleItem>
                <AddToCartButton id={eachProduct.productId} onClick ={this.onClickAddToCart}>Add to cart</AddToCartButton>
            </ProductDiv>

        );
    }

}
export default Product 