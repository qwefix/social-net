import * as axios from 'axios';
import key from './key'

const usersInstance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': key },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

const usersAPI = {
    setPage: (page) => usersInstance.get(`users?page=${page}&count=10`).then(res => res.data),
    follow: (id) => usersInstance.post(`follow/${id}`).then(res => res.data),
    unfollow: (id) => usersInstance.delete(`follow/${id}`).then(res => res.data),
}

export default usersAPI