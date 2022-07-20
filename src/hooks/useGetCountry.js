import { useQuery } from "react-query";
import getCountry from "../services/getCountry";

const useGetCountry = () => {
    const { data, isLoading } = useQuery("getCountry", getCountry, {
        refetchOnWindowFocus: false,
        retry: false
    })
    return { countries: data, isLoading }
}

export default useGetCountry;