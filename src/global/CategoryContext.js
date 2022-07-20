import React,  { createContext } from "react";
import Loader from "../components/Loader";
import useGetCategory from "../hooks/useGetCategory";

export const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
    const { data, isLoading } = useGetCategory();

    if(isLoading) return <Loader />
    return <CategoryContext.Provider value={{categories: data}}>
        {children}
    </CategoryContext.Provider>
}

export default CategoryProvider;