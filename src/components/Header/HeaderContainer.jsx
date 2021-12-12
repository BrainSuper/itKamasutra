import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    logout() {
        authAPI.logout();
    }

    render() {
        return (
            <Header logout={this.props.logoutTC} {...this.props}/>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

}

export default connect(mapStateToProps, {logoutTC})(HeaderContainer);