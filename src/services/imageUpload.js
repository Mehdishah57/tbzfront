import axios from "axios";
import { getToken } from "../utilities/storage";

const imageUpload = async(payload) => {
    const {data} = await axios.post(`${process.env.REACT_APP_SERVER}/api/user/image`,
        {...payload?.queryKey[1]},{headers: {"auth": getToken()}});
    return data;
}

export default imageUpload;