import { observable, action } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';



 
class UserStore {

    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService

    constructor(userService) {
        // console.log(typeof(userService))
        this.userService=userService
        this.init();

    }

    @action.bound
    init() {

        this.getUsersApiStatus = API_INITIAL;
        this.getUsersApiError = null;
        this.users = [];

    }

    @action.bound
    setUsersResponse(usersResponse) {
        //console.log(usersResponse);
       

        this.users = usersResponse.map((user) => user.name);

    }

    @action.bound
    setUsersAPIError(error) {
        //console.log(error)

        this.getUsersApiError = error;

    }

    @action.bound
    getUsersAPI() {
        // console.log(this.userService)
        const usersPromise = this.userService.getUsersAPI();
        // console.log( usersPromise)
        // console.log(this.userService.getUsersAPI())
    
        
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setUsersAPIStatus, this.setUsersResponse)
            .catch(this.setUsersAPIError);

    }

    @action.bound
    setUsersAPIStatus(apiStatus) {
        //console.log(apiStatus);
        this.getUsersApiStatus = apiStatus;

    }

    @action.bound
    clearStore() {

        this.init();

    }

}
// const userService= new UserService()
// const userStore = new UserStore(userService);
// userStore.getUsersAPI();
export default UserStore;
