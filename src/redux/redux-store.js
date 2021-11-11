import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendsReducer from "./friends-reducer";
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    friends: friendsReducer
});

let store = createStore(reducers);
export default store;
