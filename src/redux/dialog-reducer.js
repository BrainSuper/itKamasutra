const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody;
            break;
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messageData.length + 1,
                message: state.newMessageBody
            }
            state.messageData.push(newMessage);
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