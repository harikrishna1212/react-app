import AuthStore from "../../Authentication/stores/AuthStore/index";
import AuthService from "../../Authentication/services/AuthService/index";
import ProductService from '../../ProductPage/services/ProductService/index';
import ProductStore from '../../ProductPage/stores/ProductStore/index'
import CartStore from "../../Cart/stores/CartStore";

const authService = new AuthService();
const authStore = new AuthStore(authService);

const productService = new ProductService()
const productStore = new ProductStore(productService);

const cartStore = new CartStore(productStore)

export default{ authStore,productStore,cartStore};