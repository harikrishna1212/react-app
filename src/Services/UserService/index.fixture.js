import usersResponse from "../../fixtures/getUsersResponse.json";

class UserFixtureService{

    getUsersAPI=()=>{  
     return new Promise((resolve,reject)=>{
         resolve(usersResponse);
     });
    }
}

export default UserFixtureService;