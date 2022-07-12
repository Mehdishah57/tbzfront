import axios from "axios";
import { getToken } from "../utilities/storage";

const sendCode = async() => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/user/sendCode`
    ,{headers: {"auth": getToken()}});
    return data;
}

export default sendCode;