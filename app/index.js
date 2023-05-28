import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import {checkToken, getToken, removeToken} from '../utils/token';




export default function Index() {
    const [token, setToken]  = useState("")
    useEffect(async () => {
        setToken(await getToken()) 
    }, [])
    
    useEffect(() => {
        checkToken()
    },[])
    return <Redirect href={token ? 'home' : 'login'} />;
}