import React from "react";
import {Field, handleSubmit, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/profile-reducer";
import {render} from "@testing-library/react";
import {setAuthUserDataTC} from "../../redux/auth-reducer";


let LoginReduxForm = (props) => {
    const { handleSubmit } = props;
    return <form onSubmit={props.handleSubmit}>
        <div><Field name='email' component='input' type="email"/></div>
        <div><Field name='password' component='input' type="password"/></div>
        <div><Field name='checkbox' component='input' type='checkbox'/></div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
}



LoginReduxForm = reduxForm({form: 'login'})(LoginReduxForm);
class Login extends React.Component {

    onSubmit = (formData) => {
        this.props.setAuthUserDataTC(formData);
    }
    render() {
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={this.onSubmit}/>
        </div>
    }



}

const mapStateToProps = (state) => {
    return {
        loginData: state.profilePage.loginData
    }
}

export default connect(mapStateToProps, {setAuthUserDataTC})(Login);

