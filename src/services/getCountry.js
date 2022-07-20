import axios from "axios";

const getCountry = async() => {
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/country`);
    return data;
}

export default getCountry;