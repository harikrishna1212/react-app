
import React from "react"

class CheckoutButton extends React.Component{
    // clearCart=()=>{
    //     const {clearCart,total} = this.props;
    //     clearCart()

    // }
    render(){
        const {clearCart,total} = this.props;
        return (
            <div>
                <button disabled={total?false:true} onClick={clearCart}>CHECKOUT</button>
            </div>
        )
    }

}
export  {CheckoutButton}