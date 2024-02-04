import http from "./http";

const login = async ({ data }) => {
    return (await http.post("bookingportals/login", data)).data
}
const signup = async ({ data }) => {
    return (await http.post("bookingportals/signup", data)).data
}

const searchFlights = async ({ src, dest, day })=>{
    return (await http.get(`bookingportals/flight?search={"source":"${src}","destination":"${dest}"}&day=${day}`)).data
}
const api = {
    login,
    signup,
    searchFlights
}

export default api;