import http from "./http";

const signup = async ({data})=>{
    return (await http.post("bookingportals/signup", data)).data
}

const api = {
    signup
}

export default api;