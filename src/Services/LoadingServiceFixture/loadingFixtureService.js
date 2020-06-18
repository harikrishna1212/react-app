import getAdminResponse from '../../fixtures/getAdminResponse.json'
import getUserResponse from '../../fixtures/getUsersResponse.json'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from "../../constants/APIConstants";
import {create} from "apisauce";
class LoadingServiceFixture {
   constructor(){

   }
   getAdminDeatils = () => {
       return promise = new Promise(function(resolve){
           resolve(getAdminResponse)

       })
   }
   getUserDetails = () => {
       return promise = new Promise(function(resolve){
           resolve(getUserResponse)
       })
   }
}
export default LoadingServiceFixture
