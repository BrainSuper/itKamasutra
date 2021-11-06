import React from 'react';
import classes from './Posts.module.css';
const Posts = () => {
    return (
            <div className={classes.posts}>
                <div className={classes.post}><img src="https://www.vhv.rs/dpng/d/443-4431349_yellow-circle-png-transparent-png-download.png" alt=""></img><div>Why nobody love me?</div></div>
                <div className={classes.post}><img src="https://www.vhv.rs/dpng/d/443-4431349_yellow-circle-png-transparent-png-download.png" alt=""></img><div>Of course, it is true!</div></div>
            </div>
    )
}

export default Posts;