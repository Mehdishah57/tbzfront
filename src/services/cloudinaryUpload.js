import axios from "axios";

const cloudinaryUpload = async(formData) => {
    const {data} = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`,
    formData);
    return data;
}

export default cloudinaryUpload;