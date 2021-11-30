import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""></img>

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login: <NavLink to={'/login'}>LOGIN</NavLink>}</div>
        </header>
    )
}

export default Header;