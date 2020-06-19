import getAdminResponse from '../../fixtures/getAdminResponse.json'
import getUserResponse from '../../fixtures/getUsersResponse.json'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from "../../constants/APIConstants";
import {create} from "apisauce";
class LoadingServiceFixture {
   constructor(){

   }
   getAdminDeatils = () => {
      
        const promise = new Promise(function(resolve,reject){
            setTimeout( function(){
                resolve(getAdminResponse)
            },1000)
            
          

       })
       return promise
   }
   getUserDetails = () => {
     
        const promise = new Promise(function(resolve,reject){
           setTimeout(function (){
               resolve(getUserResponse)
        },2000)
       })
       return promise
   }
}
export default LoadingServiceFixture
