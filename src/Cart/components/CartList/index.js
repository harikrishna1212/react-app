import React from "react"
import { observer } from "mobx-react";
import { toJS } from "mobx";
import CartItem from "../CartItem/index";


@observer
class CartList extends React.Component{
    render(){
        const {getProductDetailsById,cartProductList} = this.props;
        const {onRemoveCartItem} = this.props;
       
        const allProductINJavaScriptObject= toJS(cartProductList);
     

        return(
            <div>
            <div>{allProductINJavaScriptObject.map((cartItem)=>{  
               return <CartItem 
               cartItem={cartItem} key = {cartItem.cartItemId}  onRemoveCartItem={onRemoveCartItem} 
               getProductDetailsById={getProductDetailsById} />
            })}
            </div>
            </div>
        )

    }

}
export default CartList