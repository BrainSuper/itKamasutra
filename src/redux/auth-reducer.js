import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        case LOGOUT: {
            return {
                ...state, isAuth: false
            }
        }
        default:
            return state;

    }


}
const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
const logout = () => ({type: LOGOUT});
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login))
        }
    })
}
export const login = (formData) => (dispatch) => {
    authAPI.login(formData).then(response => {
        if (response.data.resultCode === 0) {
            authAPI.me().then(responseMe => {
                if (responseMe.resultCode === 0) {
                    dispatch(setAuthUserData(responseMe.data.id, responseMe.data.email, responseMe.data.login))
                }
            })
        }
    })
}

export const logoutTC = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(logout());
        }
    })
}
export default authReducer;