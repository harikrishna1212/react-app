import {observable,action} from "mobx";
import {API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {setAccessToken} from '../../utils/StorageUtils';
import {clearUserSession} from "../../utils/StorageUtils"

class AuthStore {

@observable getUserSignInAPIStatus = API_INITIAL;
@observable getUserSignInAPIError = null;
@observable authAPIService = '';

constructor(authAPIService){  
    
this.authAPIService = authAPIService;

}

@action.bound
userSignIn(){
    
    const authPromise = this.authAPIService.signInAPI();
   
    return bindPromiseWithOnSuccess(authPromise)
    .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
    .catch(this.setGetUserSignInAPIError)


}

@action.bound
setUserSignInAPIResponse(authResponse){

    setAccessToken(authResponse[0].access_token)

}

@action.bound
setGetUserSignInAPIError(authError){
   
    this.getUserSignInAPIError = authError;
}

@action.bound
setGetUserSignInAPIStatus(authStatus){
    
    this.getUserSignInAPIStatus = authStatus;

}

@action.bound
userSignOut(){
    
clearUserSession();


}

}
export default AuthStore
