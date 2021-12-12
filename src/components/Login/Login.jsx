import React from "react";
import {Field, handleSubmit, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Input} from "../common/FormCreator/FormCreator";
import {required} from "../../utils/validators";
import {Redirect} from "react-router-dom";

let LoginReduxForm = (props) => {
    console.log(props)
    const { handleSubmit } = props;
    return <form onSubmit={props.handleSubmit}>
        <div><Field name='email' component={Input} type="email" validate={[required]}/></div>
        <div><Field name='password' component={Input} type="password" validate={[required]}/></div>
        <div><Field name='checkbox' component={Input} type='checkbox' validate={[required]}/></div>
        <div>
            <button type="submit">Submit</button>
        </div>
        <div>
            {props.error}
        </div>
    </form>
}



LoginReduxForm = reduxForm({form: 'login'})(LoginReduxForm);
class Login extends React.Component {
    onSubmit = (formData) => {
        this.props.login(formData);
    }
    render() {
        if (this.props.isAuth) return <Redirect to='/profile'/>
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={this.onSubmit}/>
        </div>
    }



}

const mapStateToProps = (state) => {
    return {
        loginData: state.profilePage.loginData,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);

