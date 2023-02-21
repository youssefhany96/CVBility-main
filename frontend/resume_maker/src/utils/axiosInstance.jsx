import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://fuzail.pythonanywhere.com/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    }
})
export default axiosInstance;