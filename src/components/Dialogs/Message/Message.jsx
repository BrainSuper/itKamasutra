import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Niko'},
        {id: 2, name: 'Lilia'},
        {id: 3, name: 'Evgeniy'},
        {id: 4, name: 'Stas'}
    ]

    let dialogsElements = dialogsData
        .map(el => <DialogItem name={el.name} id={el.id}/>)

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your name?'},
        {id: 3, message: 'Yo'}
    ]

    let messages = messageData
        .map(message => <Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>DIALOGS
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messages}
            </div>
        </div>
    )
}
export default Dialogs;