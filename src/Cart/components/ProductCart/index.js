import React from "react"
import { observable } from "mobx";
import {observer } from "mobx-react";
import CartList from "../CartList/index";
import {SubTotal} from "../SubTotal/index";
import {CheckoutButton} from "../CheckoutButton/index"
import {ProductCartMainDiv,ProductCartHiddenDiv,ProductCartShowDiv,ShowCartCloseButton} from "../ProductCart/styledComponents"
@observer
class ProductCart extends React.Component{
    @observable shouldDisplayCart = false;
   


    showCart=()=>{
       
        this.shouldDisplayCart = false;

    }

    hideCart=()=>{
        
        this.shouldDisplayCart = true;
      

    }
    render(){
        const {clearCart,cartProductList,onRemoveCartItem,getProductDetailsById,totalCartAmount} = this.props.cartStore;
        return(
           
            <ProductCartMainDiv>
            { this.shouldDisplayCart ?
               

            <ProductCartShowDiv>
            <ShowCartCloseButton onClick={this.showCart}>X</ShowCartCloseButton>
            <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
            </span>
            <CartList cartProductList={cartProductList} onRemoveCartItem={onRemoveCartItem}
             getProductDetailsById ={getProductDetailsById}/>
            <SubTotal total={totalCartAmount}/>
            <CheckoutButton total={totalCartAmount} clearCart={clearCart}/>
            
         
         
            </ProductCartShowDiv> :


            <ProductCartHiddenDiv onClick={this.hideCart} >
               
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </span>
            </ProductCartHiddenDiv> }

           
            </ProductCartMainDiv>
        )
    }

}
export default ProductCart