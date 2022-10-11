import axios from 'axios'
export const baseURL = 'http://127.0.0.1:3007/'
const myAxios = axios.create({
    // axios 的一些配置，baseURL  timeout
        baseURL,
})

export default myAxios