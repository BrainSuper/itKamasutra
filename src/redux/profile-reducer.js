import {authAPI, profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    postData: [
        {id: 1, message: 'How are you?', likesCount: 15,},
        {id: 2, message: 'It is my first post!', likesCount: 20},
        {id: 3, message: 'Yo', likesCount: 0}
    ],
    newPostText: '',
    profile: null,
    status: 'yyy',
    loginData: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state,
            newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;

    }


}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileUsers(userId).then(response => {
            dispatch(setUserProfile(response));
        })

    }
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })

}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {

            dispatch(setStatus(status))
        }
    })
}
export default profileReducer;