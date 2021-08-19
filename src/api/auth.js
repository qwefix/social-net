import * as axios from 'axios';
// import key from './key'

const authAPI = {
    autorise: () => axios.get(
        `https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
        .then(res => res.data),
    getUserInfo: (data) => axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${data.data.id}`)
        .then(res => res.data)
}

export default authAPI