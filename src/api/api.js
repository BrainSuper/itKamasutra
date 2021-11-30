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
    }
}

// sagfdsagsasgfasf
