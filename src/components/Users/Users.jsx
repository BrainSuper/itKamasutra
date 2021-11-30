import React from "react";
import classes from './Users.module.css';
import avatar from '../../img/ava.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


let Users = (props) => {
    return <div className={classes.usersWrapper}>
        <div>
            {props.pages.map(p => {
                return <span onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p && classes.selectedPage}>{p}</span>;
            })}
        </div>
        {props.users.map(user => <div className={classes.user} key={user.id}>
            <div className={classes.follow}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : avatar} alt=""/>
                </NavLink>
                {user.followed
                    ? <button onClick={() => {
                        usersAPI.unfollowUsers(user.id).then(response => {
                            if (response.resultCode === 0) {
                                props.unfollow(user.id);
                            }
                        })
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        usersAPI.followUsers(user.id).then(
                            response => {
                                if (response.resultCode === 0) {
                                    props.follow(user.id);
                                }
                            })
                    }}>Follow</button>}
            </div>
            <div className={classes.description}>
                <div className={classes.info}>
                    <h2>{user.name}</h2>
                    <h3>{user.status}</h3>
                </div>
                <div className={classes.location}>
                    <div>'user.location.country'</div>
                    <div>'user.location.city'</div>
                </div>
            </div>
        </div>)}
    </div>

}
export default Users;
