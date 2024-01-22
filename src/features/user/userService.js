import axios from "axios"
import { base_url } from "../../utils/axiosConfig"


const register = async (userData) => {
    // console.log(`User Data: ${userData}`)

    try {
        const response = await axios.post(`${base_url}/user/register`, userData)

        return response.data
    } 
    
    catch (error) {
        console.log('error', error?.response?.data)
    }
}



const login = async (userData) => {
    console.log('dfdfdfdf', userData)

    try {
        
        const response = await axios.post(`${base_url}/user/login`, userData)
        console.log('sfsdsfesrgfser', response.data)

        return response.data

    } catch (error) {
        console.log('error', error?.response?.data)

    }
}


export const authService = {
    register,
    login
}