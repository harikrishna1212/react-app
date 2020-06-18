import AuthStore from "../../Authentication/stores/AuthStore/index";
import AuthService from "../../Authentication/services/AuthService/index";
import ProductService from '../../ProductPage/services/ProductService/index';
import ProductStore from '../../ProductPage/stores/ProductStore/index'
import CartStore from "../../Cart/stores/CartStore";
import LoadingServiceFixture from "../../Services/LoadingServiceFixture/loadingFixtureService";
import LoadingPracticeStore from "../../stores/LoadingPracticeStote/index"

const authService = new AuthService();
const authStore = new AuthStore(authService);

const productService = new ProductService()
const productStore = new ProductStore(productService);

const cartStore = new CartStore(productStore);
const loadingServiceFixture = new LoadingServiceFixture()
const loadingPracticeStore  = new LoadingPracticeStore(loadingServiceFixture)

export default{ authStore,productStore,cartStore,loadingPracticeStore};