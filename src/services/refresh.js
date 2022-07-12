import axios from "axios";
import { getToken } from "../utilities/storage";

const refresh = async() => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/user/refresh`,
    {headers: {"auth": getToken()}});
    return data;
}

export default refresh;