import { useQuery } from "react-query";
import { removeToken } from "../utilities/storage";
import refresh from "../services/refresh";

const useRefresh = (setUser) => {
    const onSuccess = (data) => setUser(data);

    const onError = () => removeToken();

    const { isLoading } = useQuery("refresh", refresh, { onSuccess, onError, refetchOnWindowFocus:false, retry:false });

    return { isLoading }
}

export default useRefresh;