const getToken = () => localStorage.getItem("whizcart");

const setToken = (token) => localStorage.setItem("whizcart", token);

const removeToken = () => localStorage.removeItem("whizcart");

export {
    removeToken, getToken, setToken
}