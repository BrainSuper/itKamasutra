import React from 'react';
import classes from './Friend.module.css';

let Friend = (props) => {
    return (
        <div className={classes.friend}>
            <img src="https://www.vhv.rs/dpng/d/443-4431349_yellow-circle-png-transparent-png-download.png"
                 alt=""></img>
            <div className={classes.friend__name}>{props.friend}</div>
        </div>)


}

export default Friend;