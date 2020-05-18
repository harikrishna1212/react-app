import { create } from "apisauce";
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants';


class UserService{
    api
constructor(){
    this.api=create({ 
        baseURL: 'https://jsonplaceholder.typicode.com/'
})
    }
    getUsersAPI(){  
     return networkCallWithApisauce(this.api, 'users/', {}, apiMethods.get);
    }
}

export default UserService;