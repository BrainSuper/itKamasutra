import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialog-reducer";


const Dialogs = (props) => {
    let messages = props.state.messageData
        .map(message => {
            if (message.id === 1 || message.id === 3) {
                return <Message class={classes.message__my} message={message.message}/>
            } else {
                return <Message class={classes.message__friend} message={message.message}/>
            }

        })


    let dialogElements = props.state.dialogsData
        .map(el => <DialogItem name={el.name} id={el.id}/>)

    //for study
let messageArea = React.createRef();
    let updateNewMessageBody = () => {
        let messageText = messageArea.current.value;
        props.dispatch(updateNewMessageBodyActionCreator(messageText));
    }
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}><span>DIALOGS</span>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messages}
            </div>
            <textarea ref={messageArea} name="" id="" cols="30" rows="10" onChange={updateNewMessageBody} value={props.state.newMessageBody}></textarea>
            <button type='button' onClick={sendMessage}></button>
        </div>
    )
}
export default Dialogs;