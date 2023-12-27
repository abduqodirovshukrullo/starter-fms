import axios from 'axios'

const axiosIns = axios.create({
// You can add your headers here
// ================================
baseURL: 'http://oot.loc/api/',
// timeout: 1000,
headers: {'Accept': 'application/json'}
})

export default axiosIns
