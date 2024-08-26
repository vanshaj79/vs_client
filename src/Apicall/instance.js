import axios from "axios"
 
const axioInstance = axios.create({
    baseURL:'https://vs-server.vercel.app/',
    headers: {
        'Content-Type': 'application/json',
    },
})
export default axioInstance;
