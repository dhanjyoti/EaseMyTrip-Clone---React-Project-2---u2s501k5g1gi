import { createContext, useContext, useEffect, useMemo, useState } from "react";

const userContext = createContext()

const getUser = ()=>{
    try{
        return JSON.parse(localStorage.getItem('user'))
    }catch{
        return null
    }
}

const saveUser = (user)=>{
    localStorage.setItem("user", JSON.stringify(user))
}
export const UserProvider = ({children})=>{
    const [user, setUser]=useState(getUser())

    useEffect(()=>{
        saveUser(user)
    },[user])

    return <userContext.Provider value={useMemo(()=>({user, setUser}), [user, setUser])}>
        {children}
    </userContext.Provider>
}

const useUser = ()=>{
    return useContext(userContext)
}


export default useUser