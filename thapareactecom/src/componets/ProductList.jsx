import React from 'react'
import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView';

const ProductList = () => {
  const {filter_products ,setGridview} =useFilterContext();
  
 
  // if(setGridview){
    return(<>
    {/* <GridView  products={filter_products}/> */}
     {/* <h1>dvdjvbd</h1> */}
     <div>product list</div>
    </>
    )
  // }
}



export default ProductList ;