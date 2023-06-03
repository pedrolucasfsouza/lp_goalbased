import axios from "axios"
import {getToken, getUser, handleLogout,} from "@/hooks/useUser";
// import {getCurrentUserData} from "../hooks/useUser";
// import {isElectron} from "../helpers";
export const apiURL = process.env.REACT_APP_API_URL
// export const apiURL = 'http://127.0.0.1:8000'
export const api = axios.create({
    baseURL: 'https://dev.boleta.ai/api'

})
api.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (window.location.pathname === '/login') {
        return error
    }
    if (error.response.status === 401) {
        return handleLogout()
    }
    return error
})
api.interceptors.request.use(function (config) {
    const token = getToken()?.access_token ?? undefined
    if (config.headers && token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
}, function (error) {
    console.log({error})
    // Do something with request error
    return Promise.reject(error);
});