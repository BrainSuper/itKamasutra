import React from 'react';
import StoreContext from "../../../StoreContext";
import Posts from "./Posts";
const PostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    return <Posts postData={store.getState().profilePage.postData} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;