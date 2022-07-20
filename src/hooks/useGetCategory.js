import { useQuery } from "react-query";
import getCategory from "../services/getCategory";

const useGetCategory = () => {
    const { data, isLoading } = useQuery("getCategory", getCategory, {
        refetchOnWindowFocus: false,
        retry: false
    });
    return { data, isLoading };
}

export default useGetCategory;