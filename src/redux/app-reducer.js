import {authAPI} from "../api/api";
import React from "react";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZING = 'INITIALIZING';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING: {
            return {
                ...state, initialized: true
            }
        }
        default:
            return state;

    }


}
const initializing = () => ({type: INITIALIZING});

export const initializingAC = () => (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(initializing());
    })
}

export default appReducer;