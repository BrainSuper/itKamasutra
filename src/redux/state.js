import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendsReducer from "./friends-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'How are you?', likesCount: 15,},
                {id: 2, message: 'It is my first post!', likesCount: 20},
                {id: 3, message: 'Yo', likesCount: 0}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Niko'},
                {id: 2, name: 'Lilia'},
                {id: 3, name: 'Evgeniy'},
                {id: 4, name: 'Stas'}
            ],
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your name?'},
                {id: 3, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        friends: [
            {name: 'Andrew'},
            {name: 'Sasha'},
            {name: 'Sveta'}
        ]
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.friends = friendsReducer(this._state.friends, action);
        this._callSubscriber(this._state);
    }
};


export default store;
window.store = store;
