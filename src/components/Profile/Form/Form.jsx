import React from 'react';
import classes from './Form.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const Form = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let updateNewPostText = () => {
        let newPost = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(newPost));
    }
    let newPostElement = React.createRef();

    return (
        <form action="">
            <h2>My posts</h2>
            <input onChange={updateNewPostText} ref={newPostElement} type="text" placeholder='your news...'
                   value={props.newPostText}/>
            <button type='button' onClick={addPost}>Send</button>
        </form>
    )
}

export default Form;