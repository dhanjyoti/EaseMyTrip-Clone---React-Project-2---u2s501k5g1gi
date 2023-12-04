import AxiosDefault from "axios"

const http = AxiosDefault.create({
    baseURL: 'https://academics.newtonschool.co/api/v1/',
    headers: {
        projectId: "u2s501k5g1gi",
    } 
  });

  http.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('bookingportals'))?.token}`
    return config
  }, (error)=> Promise.reject(error))

  export default http;