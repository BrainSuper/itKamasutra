import React from 'react';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import FormContainer from "./Form/FormContainer";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
        return (
            <div>
                <ProfileInfo updateStatus={props.updateStatus} status={props.status} profile={props.profile} />
                <FormContainer />
                <PostsContainer />
            </div>
        )
}

export default Profile;