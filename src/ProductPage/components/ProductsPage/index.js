import React from "react";
import { inject,observer } from "mobx-react";
import SizeFilter from "../SizeFilter";
import ProductList from "../ProductList/index";
import Header from '../Header/index';
import ProductCart from "../../../Cart/components/ProductCart/index";
import Pagination from "../Pagination/index"
import {ProductPageMainDiv,SignOutButton,SizeFilterAndProductsDiv,HeaderAndProducts,SignOutButtonAndProductCart} from "../ProductsPage/styledComponents";

@inject('authStore','productStore','cartStore')
@observer
class ProductsPage extends React.Component{

    componentDidMount(){
        this.doProductCall()

    }
    doProductCall= ()=>{
        const {getProductList} = this.props.productStore;
        getProductList()

    }
    onClickSignOut=()=>{
        const {userSignOut} = this.props.authStore;
        const {productStore} = this.props;
        userSignOut()
        productStore.productList=[];
        const {history} =  this.props;
        history.replace('/ecommerce-store/sign-in/');

        
    }
    render(){
        const {sortedAndFilteredProducts,totalNoOfProductsDisplayed,onChangeSortBy} = this.props.productStore;
        const {cartStore} = this.props
        
        
        return (
            <ProductPageMainDiv>

           <SignOutButtonAndProductCart>
            <SignOutButton onClick={this.onClickSignOut}>Sign Out</SignOutButton>
            <ProductCart cartStore = {cartStore}/>
            </SignOutButtonAndProductCart>

            <SizeFilterAndProductsDiv>
            <SizeFilter/>
            <HeaderAndProducts>
            <Header productCount = {totalNoOfProductsDisplayed} onSelectSortBy={onChangeSortBy}/>
            <ProductList products={sortedAndFilteredProducts} onClickAddToCart={cartStore.onClickAddToCart}/>
            </HeaderAndProducts>
            <Pagination/>
            </SizeFilterAndProductsDiv>
            
            
            
            
           
           
          
            
            </ProductPageMainDiv>

        );
    }

}
export default ProductsPage