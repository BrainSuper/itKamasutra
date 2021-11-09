import React from 'react';
import classes from './Post.module.css';
const Post = (props) => {
    return (
                <div className={classes.post}><img src="https://www.vhv.rs/dpng/d/443-4431349_yellow-circle-png-transparent-png-download.png" alt=""></img><div>{props.message} Likes: {props.likes}</div></div>
    )
}

export default Post;