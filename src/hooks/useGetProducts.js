import { useQuery } from "react-query";
import getProducts from "../services/getProducts";

const useGetProducts = () => {
    const { data, isLoading, isError, error } = useQuery("getProducts", getProducts, 
        { refetchOnWindowFocus: false });
        
    return { products: data, isLoading, error: error?.response?.data || null, isError } 
}

export default useGetProducts;