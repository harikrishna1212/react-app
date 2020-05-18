import React from "react";
import  {ProductSortMainDiv,Label} from "../ProductsSort/styledComponents"
class ProductsSort extends React.Component{
   
    onSelectSortBy=()=>{
    const {onSelectSortBy} = this.props;
     onSelectSortBy(event.target.value)   
    }
    render(){
        return (
            <div>
                  <form>
                    <Label>Sort price by:
                    <ProductSortMainDiv onChange ={this.onSelectSortBy}>
                      <option  hidden>Select</option>
                      <option  value="ASCENDING">Lowest to highest</option>
                      <option  value="DESCENDING">Highest to lowest</option>
                    </ProductSortMainDiv>
                    </Label>
                  </form>


            </div>
        )
    }

}
export default ProductsSort