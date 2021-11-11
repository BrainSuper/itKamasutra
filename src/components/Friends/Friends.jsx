import React from 'react';
import classes from './Friends.module.css';
import Friend from "./Friend/Friend";
import StoreContext from "../../StoreContext";

let Friends = (props) => {



    return (
        <StoreContext.Consumer>
            {
                store => {
                    let friendsNames = store.getState().friends.map(friendName => <Friend friend={friendName.name}/>)
                    return (
                        <div className="block">
                            <div className={classes.subtitle}>Friends</div>
                            <div className={classes.friends__wrapper}>
                                {friendsNames}
                            </div>
                        </div>
                    )
                }
            }

        </StoreContext.Consumer>


    )
}

export default Friends;