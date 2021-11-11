import React from 'react';
import classes from './Form.module.css';


const Form = (props) => {
    let addPost = () => {
        props.addPost();
    }
    let changePostText = () => {
        let newPost = newPostElement.current.value;
        props.updateNewPostText(newPost);
    }
    let newPostElement = React.createRef();

    return (
        <form action="">
            <h2>My posts</h2>
            <input onChange={changePostText} ref={newPostElement} type="text" placeholder='your news...'
                   value={props.newPostText}/>
            <button type='button' onClick={addPost}>Send</button>
        </form>
    )
}

export default Form;