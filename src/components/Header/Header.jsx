import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""></img>

            <div className={classes.loginBlock}>
                {props.isAuth ? <div>
                    <div>{props.login}</div>
                    <div onClick={props.logout}>LOGOUT</div>
                </div>: <NavLink to={'/login'}>LOGIN</NavLink>}</div>
        </header>
    )
}
//logout
export default Header;