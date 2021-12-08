import React from 'react';
import classes from './Form.module.css';
import handleSubmit from "redux-form/lib/handleSubmit";
import {Field, reduxForm} from "redux-form";

let ProfileForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <h2>My posts</h2>
            <Field component='textarea' type='text' name='newPost'/>
            <button>Send</button>
        </form>
    </div>
}

ProfileForm = reduxForm({form: 'profileForm'})(ProfileForm);

const Form = (props) => {
    let addPost = (formData) => {
        props.addPost(formData.newPost);
    }

    return <ProfileForm onSubmit={addPost}/>
}

export default Form;