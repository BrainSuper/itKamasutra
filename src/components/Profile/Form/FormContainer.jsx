import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Form from "./Form";
import StoreContext from "../../../StoreContext";


const FormContainer = () => {


    return (
        <StoreContext.Consumer>
            {
            (store => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let updateNewPostText = (text) => {

                    store.dispatch(updateNewPostTextActionCreator(text));
                }
                return (<Form updateNewPostText={updateNewPostText} addPost={addPost}/>)
            }
                )
        }
        </StoreContext.Consumer>
    )
}

export default FormContainer;