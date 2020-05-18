import { observable, action, computed,toJS } from "mobx";
import {API_INITIAL} from "@ib/api-constants";
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import ProductModel from '../model/Product/index'



class ProductStore {
    @observable productList=[];
    @observable getProductListAPIStatus = API_INITIAL;
    @observable getProductListAPIError = null
    @observable productsAPIService;
    @observable sizeFilter=[];
    @observable sortBy = "SELECT"; // ASCENDING //DESCENDING;
     
    
    constructor(productsAPIService){
        this.productsAPIService = productsAPIService;

    }
    @action.bound
    getProductList(){
        const productPromise = this.productsAPIService.getProductsAPI();

        return bindPromiseWithOnSuccess(productPromise)
        .to(this.setGetProductListAPIStatus,this.setProductListResponse)
        .catch(this.setGetProductListAPIError)

    }
    @action.bound
    setProductListResponse(productResponse){
        productResponse.forEach((eachProduct)=>{
            const productModel = new ProductModel(eachProduct);
            this.productList.push(productModel)
            
        })
        //this.sizeFilter = this.productList

    }
    @action.bound
    setGetProductListAPIError(productError){
        this.getProductListAPIError = productError;

    }
    @action.bound
    setGetProductListAPIStatus(productStatus){
      this.getProductListAPIStatus = productStatus

    }
    @action.bound
    onChangeSortBy(sortPrice){
        this.sortBy = sortPrice;
       

    }
    @action.bound
    onSelectSize(selectedSize){
        const indexOfSelectedSize = this.sizeFilter.indexOf(selectedSize)
        if(indexOfSelectedSize === -1){
            this.sizeFilter.push(selectedSize)
        }
        else{
            this.sizeFilter.splice(indexOfSelectedSize,1)
        }
       
    }
    @computed
    get Products(){
        const allProductINJavaScriptObject= toJS(this.productList);
         let filteredProducts  =[];

        if(this.sizeFilter.length===0){
            filteredProducts = this.productList

        }
        else{
        allProductINJavaScriptObject.forEach(eachProduct=>{
            
                   if(this.sizeFilter.some(item=>eachProduct.availableSizes.includes(item))){
                    filteredProducts.push(eachProduct);
                    
            }
        })
    }

    if(this.sortBy === "ASCENDING"){
        
        filteredProducts = filteredProducts.sort(function(a, b){return a.price - b.price});


    }
    else if(this.sortBy === "DESCENDING"){
       
        filteredProducts = filteredProducts.sort(function(a, b){return b.price - a.price});
        //filteredProducts = filteredProducts.reverse()

    }
    else{
        
        filteredProducts = filteredProducts
    }

        return filteredProducts;

    
    }
    @computed
    get sortedAndFilteredProducts(){
      
        return this.Products


    }
    @computed
    get totalNoOfProductsDisplayed(){
       
        return this.Products.length

    }

}
export default ProductStore