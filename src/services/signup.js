import axios from "axios";

const signup = async(values) => {
    const {data} = await axios.post(`${process.env.REACT_APP_SERVER}/api/user/signup`
    ,values);
    return data;
}

export default signup;