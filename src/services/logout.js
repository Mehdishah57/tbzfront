import axios from "axios";
import { getToken, removeToken } from "../utilities/storage";

const logout = async() => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/user/logout`
        ,{headers: { "auth": getToken() }})
    removeToken();
    return data;
}

export default logout;