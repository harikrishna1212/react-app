import {create} from "apisauce";
import {apiMethods} from '../../constants/SampleAPIConstants';
import {networkCallWithApisauce} from "../../utils/APIUtils";
import endpoints from "../endpoints";

class AuthService{
    api
    constructor(){
        this.api=create({
            baseURL:'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
        })
    
    }
    signInAPI=()=>{
        
        return networkCallWithApisauce(this.api,endpoints.signIn,{},apiMethods.get)
    }
}
export default AuthService