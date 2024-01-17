import Axios from "axios"
import { base_url } from "../../utils/axiosConfig"


const register = async (userData) => {
    console.log(userData)
    const response = await Axios.post(`${base_url}/register`, userData)
    console.log(response);
    console.log(response.data)
    if (response.data) {
        return response.data
    }
}


export const authService = {
    register
}