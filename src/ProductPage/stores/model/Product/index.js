import { observable } from "mobx";

class ProductModel {
@observable productId=''
@observable availableSizes=[]
@observable currencyFormat=''
@observable currencyId=''
@observable description=''
@observable installmentsCount=''
@observable isFreeShipping=''
@observable price=''
@observable printStyle=''
@observable title=''
@observable imageURL=''

constructor(eachProduct){

this.productId= eachProduct.id
this. availableSizes= eachProduct.availableSizes
this. currencyFormat= eachProduct.currencyFormat
this. currencyId= eachProduct.currencyId
this. description=eachProduct.description
this. installmentsCount=eachProduct.installments
this.isFreeShipping=eachProduct.isFreeShipping
this. price=eachProduct.price
this. printStyle=eachProduct.style
this. title=eachProduct.title
this. imageURL=eachProduct.image
}


}
export default ProductModel