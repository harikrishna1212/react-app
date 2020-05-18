import CounterStore from './CounterStore';
import UserService from "../Services/UserService/index.api";
import UserFixtureService from '../Services/UserService/index.fixture';
import UserStore from "./UsersStore/index";
import TodoService from "../Services/TodoService/TodoService";
import TodoStore from "./TodoStore/TodoStore";


const counterStore = new CounterStore();

const userService = new UserService();
const todoService = new TodoService();

const userStore=new UserStore(userService);
const todoStore = new TodoStore(todoService)
export default {
  counterStore,userStore,todoStore
}



