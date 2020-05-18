import { observable, action,toJS, computed } from "mobx";
import CartItemModel from "../model/CartItem/index";


// @inject('cartStore')
class CartStore{
    @observable cartProductList =[];
    @observable total = 0;
    @observable productStore 

    constructor(productStore){
   
        this.productStore = productStore;
        
    }

    @action.bound
    onClickAddToCart(productId){

      
        if(this.cartProductList.length===0){
        const cartItemModel = new CartItemModel(productId)
        this.cartProductList.push(cartItemModel)
        }
        else{
             const sameProduct = this.cartProductList.find(element => element.productId === productId)
           
             if(sameProduct===undefined){
                const cartItemModel = new CartItemModel(productId)
                this.cartProductList.push(cartItemModel)
             }
             else{
                sameProduct.incrementQuantity()
              
             }
        }
        // console.log(this.cartProductList)
        
    
       
}
    @action.bound
    onRemoveCartItem(cartItemId){
        let deleteProduct=[]
    
        deleteProduct= this.cartProductList.filter(eachProduct =>{ return eachProduct.cartItemId !== cartItemId});
       this.cartProductList =  deleteProduct;

        
    }

    @action.bound
    clearCart(){
     
       this.cartProductList = [];


    }

    @action.bound
      getProductDetailsById(productId){
          
        const allProductINJavaScriptObject= toJS(this.productStore.productList);
         let cartProduct =''
        allProductINJavaScriptObject.forEach(eachProduct=>{
            if(eachProduct.productId === Number(productId)){
               cartProduct = eachProduct 
            }
         
        });
        return cartProduct;
        

       

    }

    @computed
    get totalCartAmount(){
        let totalAmount = 0;
        this.cartProductList.map((eachItem)=>{
            
            totalAmount += ((eachItem.quantity) * (this.getProductDetailsById(eachItem.productId).price))
           

        })
        totalAmount = totalAmount.toFixed(2)  
        return totalAmount;
   
    }

    @computed
    get noOfProductsInCart(){

    }


}
export default CartStore