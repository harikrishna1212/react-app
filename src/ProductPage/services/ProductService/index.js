import {create} from "apisauce";
import {apiMethods} from '../../constants/SampleAPIConstants';
import {networkCallWithApisauce} from "../../utils/APIUtils";
import endpoints from "../endpoints";

class ProductService{
    api
    constructor(){
        this.api = create({
            baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
        })

    }

    getProductsAPI=()=>{
        return networkCallWithApisauce(this.api,endpoints.Productlist ,{},apiMethods.get)

    }

}
export default ProductService