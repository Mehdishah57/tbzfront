import axios from "axios";

const getProducts = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_SERVER}/api/product`);
    return data;
}

export default getProducts;