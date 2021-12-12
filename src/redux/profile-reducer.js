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
    loginData: null,
    fake: 10
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postData.length + 1,
                message: action.newPost,
                likesCount: 0
            };

            return {
                ...state,
                postData: [...state.postData, newPost],
            };
            break;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case 'FAKE': {
            return {...state, fake: state.fake + 1};
        }
        default:
            return state;

    }


}

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});

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