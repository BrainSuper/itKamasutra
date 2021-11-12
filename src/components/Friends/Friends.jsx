import React from 'react';
import classes from './Friends.module.css';
import Friend from "./Friend/Friend";
let Friends = (props) => {


    let friendsNames = props.friends.map(friendName => <Friend friend={friendName.name}/>)
    return (
        <div className="block">
            <div className={classes.subtitle}>Friends</div>
            <div className={classes.friends__wrapper}>
                {friendsNames}
            </div>
        </div>
    )
}

export default Friends;