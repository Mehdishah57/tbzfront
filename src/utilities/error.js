const getError = (error, message) => {
    if(error.response?.data && typeof error.response.data === "string") return error.response.data 
    return message
}

export default getError ;