const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
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
};
const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                messageData: [...state.messageData],
                newMessageBody: action.newMessageBody
            };
            break;
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messageData.length + 1,
                message: state.newMessageBody
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessageBody: ''
            };
            break;
        default:
            return state;
    }

    return state;
}

export const updateNewMessageBodyActionCreator = (newMessageBody) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessageBody: newMessageBody
    }
}
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export default dialogReducer;