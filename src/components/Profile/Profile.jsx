import React from 'react';
import classes from './Profile.module.css';
import Form from "./Form/Form";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Form dispatch={props.dispatch}/>
            <Posts postData={props.profilePage.postData}/>
        </div>
    )
}

export default Profile;