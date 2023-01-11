import { useContext } from "react";
import { createContext } from "react";
import axios from "axios"
import { useEffect } from "react";

 const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

 const AppProvider =({children})=>{
    const getProducts =async(url)=>{
        const res = await axios.get(url);
        const products = await res.data;
        console.log(products)

    }
    useEffect(()=>{
        getProducts(API)
    },[])
        return( 
            <AppContext.Provider value={{myName:"anil patel"}}>{children}</AppContext.Provider>
        )
 }


 const useProductContext =()=>{
    return useContext(AppContext)
 }
 export {AppProvider,AppContext ,useProductContext}