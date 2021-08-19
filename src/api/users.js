import * as axios from 'axios';
import key from './key'

const usersAPI = {
    setPage: (page) => axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=10`,
        { "withCredentials": true, }).then(res => res.data),
    follow: (id) => axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
        { "withCredentials": true, "headers": { 'API-KEY': key } }).then(res => res.data),
    unfollow: (id) => axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
        { "withCredentials": true, "headers": { 'API-KEY': key } }).then(res => res.data),
}

export default usersAPI