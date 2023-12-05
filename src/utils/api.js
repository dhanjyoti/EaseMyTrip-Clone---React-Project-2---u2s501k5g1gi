import http from "./http";

const login = async ({ data }) => {
    return (await http.post("bookingportals/login", data)).data
}
const signup = async ({ data }) => {
    return (await http.post("bookingportals/signup", data)).data
}

const api = {
    login,
    signup
}

export default api;