import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./ProductContex";
import reducer from "../reducer/FilterReducer"

const FilterContext =createContext();
const initialState={
    filter_products:[],
    all_products:[],
    // grid_view:true
}

const FilterContextProvider =({children})=>{

    const {products}= useProductContext();

    const [state,dispatch] =useReducer(reducer, initialState)

    // // to set the grid view 
    // const setGridView=()=>{
    //     return dispatch({type:"SET_GRID_VIEW"})
    // }

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
    },[products])
    return <FilterContext.Provider value={{...state ,}}>
        {children}
    </FilterContext.Provider>
}
export default FilterContextProvider;

export const useFilterContext =()=>{
    return useContext(FilterContext);
}