import {create} from "apisauce";
import {apiMethods} from '../../constants/SampleAPIConstants';
import {networkCallWithApisauce} from "../../utils/APIUtils";
import endpoints from "../endpoints";

class ProductService{
    api
    constructor(){
        
        this.api = create({
            //baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
            baseURL :"https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/"
        })

    }
    /*constructor (){
        this.api = create ({
            baseURL :"https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/products?limit=3&offset=0"

        })
    }*/

    getProductsAPI=(limit,offset)=>{
        return networkCallWithApisauce(this.api,endpoints(limit,offset),{},apiMethods.get)

    }

}
export default ProductService