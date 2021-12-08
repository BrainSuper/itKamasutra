import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import preloader from '../../../img/spiner.svg'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader src={preloader}/>
    }
    return (
        <div>
            <img className={classes.profile__img}
                 src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg"
                 alt=""></img>
            <div className={classes.descr}>
                <img src={props.profile.photos.large} alt=""></img>
                <div className={classes.resume}>
                    <h2>{props.profile.fullName}</h2>
                    <div className={classes.birth}>Date of Birth: 19 december</div>
                    <div className={classes.birth}>About me: {props.profile.aboutMe}</div>
                    <div className={classes.city}>City: Rivne</div>
                    <div className={classes.education}>Education: NTUU 'KPI'</div>
                    <div className={classes.site}>Web-site: https://nikodeveloper.com</div>
                    <div className={classes.site}>Facebook: {props.profile.contacts.facebook}</div>
                    <div className={classes.site}>Vk: {props.profile.contacts.vk}</div>
                    <div className={classes.site}>Twitter: {props.profile.contacts.twitter}</div>
                    <div className={classes.site}>Instagram: {props.profile.contacts.instagram}</div>
                    <div className={classes.site}>Youtube: {props.profile.contacts.youtube}</div>
                    <div className={classes.site}>GitHub: {props.profile.contacts.github}</div>
                    <div className={classes.site}>Ищу работу? {props.profile.lookingForAJob ?
                        <div>Да, ищу... {props.profile.lookingForAJobDescription}</div> : <div>Не ищу</div>}</div>

                </div>
            </div>
            <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>
        </div>
    )
}

export default ProfileInfo;