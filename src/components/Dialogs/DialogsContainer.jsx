import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        newMessageBody: state.dialogsPage.newMessageBody,
        messageData: state.dialogsPage.messageData,
        dialogsData: state.dialogsPage.dialogsData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())

        },
        updateNewMessageBody: (messageText) => {
            dispatch(updateNewMessageBodyActionCreator(messageText));
            }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Dialogs);