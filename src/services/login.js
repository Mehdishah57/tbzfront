import axios from "axios";

const login = async({email, password}) => {
    const {data} = await axios.post(`${process.env.REACT_APP_SERVER}/api/user/login`
    ,{email, password});
    return data;
}

export default login;