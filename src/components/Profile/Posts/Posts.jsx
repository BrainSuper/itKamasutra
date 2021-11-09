import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post";
const Posts = (props) => {
    let posts = props.postData
        .map(post => <Post message={post.message} likes={post.likesCount}/>)
    return (
        <div className={classes.posts}>
            {posts}
        </div>
    )
}

export default Posts;