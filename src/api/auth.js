import * as axios from 'axios';
// import key from './key'

const usersInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

const authAPI = {
    autorise: () => usersInstance.get(`auth/me`).then(res => res.data),
    getUserInfo: (data) => usersInstance.get(`profile/${data.data.id}`).then(res => res.data)
}

export default authAPI