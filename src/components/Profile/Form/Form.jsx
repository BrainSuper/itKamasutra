import React from 'react';
import classes from './Form.module.css';
import handleSubmit from "redux-form/lib/handleSubmit";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormCreator/FormCreator";
import {maxLengthCreator, required} from "../../../utils/validators";
const maxLength10 = maxLengthCreator(10);
let ProfileForm = (props) => {
    console.log(props)
    return <div>
        <form onSubmit={props.handleSubmit}>
            <h2>My posts</h2>
            <Field validate={[required, maxLength10]} component={Textarea} name='newPost'/>
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