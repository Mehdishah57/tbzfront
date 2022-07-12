import { useMutation } from "react-query";
import logout from "../services/logout";

const useLogout = () => {
    const { mutate, isLoading } = useMutation(logout,{retry: false});

    return { logout: mutate, isLoading };
}

export default useLogout;