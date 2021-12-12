import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialog-reducer";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators";
import {Textarea} from "../common/FormCreator/FormCreator";
const maxLength50 = maxLengthCreator(50);
let MessageForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='message' type='text' validate={[required, maxLength50]}/>
            <button></button>
        </form>
    </div>
}

MessageForm = reduxForm({form: 'messageForm'})(MessageForm);


const Dialogs = (props) => {
    let messages = props.messageData
        .map(message => {
            if (message.id === 1 || message.id === 3) {
                return <Message class={classes.message__my} message={message.message}/>
            } else {
                return <Message class={classes.message__friend} message={message.message}/>
            }

        })


    let dialogElements = props.dialogsData
        .map(el => <DialogItem name={el.name} id={el.id}/>)

let messageArea = React.createRef();

    let updateNewMessageBody = () => {
        let messageText = messageArea.current.value;
        props.updateNewMessageBody(messageText);

    }
    const sendMessage = (formData) => {
        props.sendMessage(formData.message)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}><span>DIALOGS</span>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messages}
            </div>

            <MessageForm onSubmit={sendMessage}/>
        </div>
    )
}
export default Dialogs;