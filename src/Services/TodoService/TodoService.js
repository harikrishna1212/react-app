import {create} from "apisauce";
import { apiMethods } from '../../constants/APIConstants';
import {networkCallWithApisauce} from "../../utils/APIUtils";
class TodoService {
    api
    constructor(){
        this.api=create({
            baseURL:'https://jsonplaceholder.typicode.com/'
        });
      
    }
    
    getTodoList(){
        
        return networkCallWithApisauce(this.api,'todos/',{},apiMethods.get)
    }


}
export default TodoService