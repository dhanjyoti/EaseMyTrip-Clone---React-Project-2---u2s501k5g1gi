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

const searchHotels = async ({location})=>{
    return (await http.get(`bookingportals/hotel?search={"location":"${location}"}`))
}

const searchTrains = async ({src, dest, day})=>{
    return (await http.get(`bookingportals/train?search={"source":"${src}","destination":"${dest}"}&day=${day}`))
}

const searchBuses = async ({src, dest, day})=>{
    return (await http.get(`bookingportals/bus?search={"source":"${src}","destination":"${dest}"}&day=${day}`))
}


const hotelDetail = async ({id})=>{
    return (await http.get(`bookingportals/hotel/${id}`))
}

const flightDetail = async ({id})=>{
    return (await http.get(`bookingportals/flight/${id}`))
}
const trainDetail = async ({id})=>{
    return (await http.get(`bookingportals/train/${id}`))
}

const flightFilterPrice = async ({src, dest, day, lowerPrice, upperPrice})=>{
    return (await http.get(`bookingportals/flight?search={"source":"${src}","destination":"${dest}"}&day=${day}&filter={"ticketPrice":{"$lte":${lowerPrice},"$gte":${upperPrice}}}`))
}

const api = {
    login,
    signup,
    searchFlights,
    searchHotels,
    searchTrains,
    searchBuses,
    hotelDetail,
    flightDetail,
    trainDetail,
    flightFilterPrice
}

export default api;