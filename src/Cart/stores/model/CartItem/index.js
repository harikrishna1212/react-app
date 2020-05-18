import { observable, action } from "mobx"

class CartItemModel {
    @observable cartItemId
    @observable productId
    @observable quantity

constructor(productId){
    this.cartItemId = Math.random().toString()
    this.productId = productId
    this.quantity = 1
}

incrementQuantity=()=>{
    this.quantity+=1

}
    

    

}
export default CartItemModel