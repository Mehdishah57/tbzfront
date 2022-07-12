import axios from "axios";
import { getToken } from "../utilities/storage";

const changeName = async({name}) => {
    const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/api/user/name`
    ,{name},{headers: {"auth": getToken()}});
    return data;
}

export default changeName;