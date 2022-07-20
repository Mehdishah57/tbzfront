import axios from "axios";

const getCategory = async() => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/category`);
    return data;
}

export default getCategory;