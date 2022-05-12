import axios from "axios"

// currentPage= 1, pageSize = 10

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f0c77684-9244-4fbc-bfbb-fa4f7c66b670'
    }
})

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    deleteUser: (userId) => { // unfollow
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    },
    postUser: (userId) => { // follow
        return instance.post(`follow/${userId}`, {})
        .then(res => res.data)
    },
    // getProfile: (userId) => {
    //     console.warn('>>>>>>>>>Obsolete method. Please profileAPI object')
    //     // return instance.get(`profile/${userId}`)
    //     //     .then(res => res.data)
    //     return profileAPI.getProfile(userId) 
          
    // }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (status) => {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
        // .then(res => res.data)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
            // .then(res => res.data)
    },
    logout(){
        return instance.delete(`auth/login`)
            // .then(res => res.data)
    },
}