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

};
const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messageData.length + 1,
                message: action.newMessage
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
            };
            break;
        default:
            return state;
    }

    return state;
}

export const sendMessageActionCreator = (newMessage) => ({type: SEND_MESSAGE , newMessage})

export default dialogReducer;