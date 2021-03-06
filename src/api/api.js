import axios from "axios";
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '03dc2ce9-bd56-44ab-be4f-ade43a3c5ec7'
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(response => response.data)
    },
    followUsers(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollowUsers(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfileUsers(userId) {
        console.warn('This appeal is deprecated, use profileAPI');
        return profileAPI.getProfileUsers(userId);
    }
}

export const profileAPI = {
    getProfileUsers(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status` , {status: status})
    }
}
export const authAPI = {
    me () {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login (formData) {
        return instance.post(`auth/login`, formData)
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
}


