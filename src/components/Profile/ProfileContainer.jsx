import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {getStatus, getUserProfileThunkCreator, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;

        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getStatus(userId);
        };
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update');
    }

    render() {
        // if (!this.props.isAuth) {return <Redirect to={'/login'}/>}
        return (
            <Profile updateStatus={this.props.updateStatus} status={this.props.status} {...this.props} profile={this.props.profile}/>
        )
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
})

export default compose(withAuthRedirect, connect(mapStateToProps, {getUserProfileThunkCreator, getStatus, updateStatus}), withRouter)(ProfileContainer);