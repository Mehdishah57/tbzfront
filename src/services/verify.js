import axios from "axios";
import { getToken } from "../utilities/storage";

const verify = async({code}) => {
    const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/api/user/verify`
    ,{code},{headers: {"auth": getToken()}});
    return data;
}

export default verify;