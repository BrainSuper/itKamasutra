import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}><NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}><NavLink to='/news' activeClassName={classes.active}>News</NavLink></div>
            <div className={classes.item}><a href='/music'>Music</a></div>
            <div className={classes.item}><a href='/setting'>Settings</a></div>
            <FriendsContainer/>
        </nav>
    )
}


export default Navbar;