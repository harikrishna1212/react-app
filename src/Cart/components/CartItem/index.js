import React from "react"
// import { observer } from "mobx-react";
import {Image,CartItemTitleAndPrintStyleAndQuantity,CartItemMainDiv,
    ButtonForRemoveItemInCart,CartProductPrice,RemoveProductFromCartButtonAndCartPrice} from '../CartItem/styledComponents';

class CartItem extends React.Component{

    onRemoveCartItem=()=>{
        const {onRemoveCartItem} = this.props;
     
        onRemoveCartItem(event.target.id)
    }

   
    render(){
       
        const {cartItem,getProductDetailsById} = this.props;
        let productId = cartItem.productId;
       
        let cartProduct =  getProductDetailsById(productId);
        return(
              <CartItemMainDiv>
                  <div>

                    <Image src={cartProduct.imageURL} />
                </div>

                <CartItemTitleAndPrintStyleAndQuantity>
                        <h3>{cartProduct.title}</h3>
                        <h3>{cartProduct.printStyle}</h3>
                        <p>Quantity:{cartItem.quantity}</p>
                </CartItemTitleAndPrintStyleAndQuantity>


                <RemoveProductFromCartButtonAndCartPrice>
                <ButtonForRemoveItemInCart  id={cartItem.cartItemId} onClick={this.onRemoveCartItem}>X</ButtonForRemoveItemInCart>
                <CartProductPrice>
                <p>{cartProduct.currencyFormat}</p>
                <p>{cartProduct.price}</p>
                </CartProductPrice>
                </RemoveProductFromCartButtonAndCartPrice>

               

            </CartItemMainDiv>
        )
    }

}
export default CartItem