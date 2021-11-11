import React from 'react';
import classes from './Dialogs.module.css';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


    return (<StoreContext.Consumer>
            {
            store => {
                let updateNewMessageBody = (messageText) => {
                    store.dispatch(updateNewMessageBodyActionCreator(messageText));
                }
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }
                return (
                    <Dialogs newMessageBody={store.getState().dialogsPage.newMessageBody}
                             sendMessage={sendMessage} updateNewMessageBody={updateNewMessageBody}
                             messageData={store.getState().dialogsPage.messageData}
                             dialogsData={store.getState().dialogsPage.dialogsData}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;