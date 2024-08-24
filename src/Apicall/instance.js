import axios from "axios"
 
const axioInstance = axios.create({
    baseURL:'http://localhost:5000/',
    headers: {
        'Content-Type': 'application/json',
    },
})
export default axioInstance;