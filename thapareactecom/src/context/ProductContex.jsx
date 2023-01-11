import { useContext } from "react";
import { createContext } from "react";
import axios from "axios"
import { useEffect } from "react";
import { useReducer } from "react";
import reducer from "../reducer/ProductReducer"

 const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
const initialState={
    isLodaing:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading: false,
    singleProduct: {},
};


 const AppProvider =({children})=>{
    const [state,dispatch] =useReducer(reducer,initialState);
    const getProducts =async(url)=>{
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
          } catch (error) {
            dispatch({ type: "API_ERROR" });
          }

    }


// second api call 
 const getSingleProduct =async (url)=>{
    dispatch({type:"SET_SINGLE_LOADING"});

    try {
        const res =await axios.get(url);
        const singleProduct =await res.data;
        dispatch({type:'SET_SINGLE_PRODUCT', payload:singleProduct})
        
    } catch (error) {
        dispatch({type:"SET_SINGLE_ERROR"})
        
    }
 }

    useEffect(()=>{

        getProducts(API)
    },[])
        return( 
            <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>
        )
 }

// custom hooks
 const useProductContext =()=>{
    return useContext(AppContext)
 }
 export {AppProvider,AppContext ,useProductContext}