import * as axios from 'axios';
// import key from './key'

const profileInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/'
})
const profileAPI = {
    getUser: (id) => profileInstance.get('' + id).then(res => res.data),
}

export default profileAPI