import React from 'react';
import classes from './Friends.module.css';

let Friends = () => {
    return (
        <div className="block">
            <div className={classes.subtitle}>Friends</div>
            <div className={classes.friends__wrapper}>
                <div className={classes.friend}>
                    <img src="https://www.vhv.rs/dpng/d/443-4431349_yellow-circle-png-transparent-png-download.png" alt=""></img>
                    <div className={classes.friend__name}>Andrew</div>
                </div>
            </div>
        </div>

    )
}

export default Friends;