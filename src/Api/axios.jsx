import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.27.211:8000/',
})