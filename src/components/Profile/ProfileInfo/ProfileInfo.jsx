import React from 'react';
import classes from './Profile.module.css';
import Form from "./Form/Form";
import Posts from "./Posts/Posts";
const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <img className={classes.profile__img} src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg" alt=""></img>
            <div className={classes.descr}>
                <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt=""></img>
                <div className={classes.resume}>
                    <h2>Nikolai R.</h2>
                    <div className={classes.birth}>Date of Birth: 19 december</div>
                    <div className={classes.city}>City: Rivne</div>
                    <div className={classes.education}>Education: NTUU 'KPI'</div>
                    <div className={classes.site}>Web-site: https://nikodeveloper.com</div>
                </div>
            </div>
            <Form />
            <Posts />
        </div>
    )
}

export default Profile;