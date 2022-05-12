import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../commen/FormsControls/FormsControls";
import classes from "../commen/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => { // handleSubmit приходит
    return <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, [required])}
            {/* <Field placeholder="Email" name="email" component={Input} validate={[required]} /> */}
            {createField("Password", "password", Input, [required])}
            {/* <Field placeholder="Password" name="password" component={Input} validate={[required]} /> */}
            {createField(null, "rememberMe", Input, [], {type: "checkbox"}, 'remember me' )}
            {/* <Field type={"checkbox"} name="rememberMe" component={'input'} /> remember me */}
            
        {error  && <div className={classes.formSummaryError}>
            {error}   
        </div>}
        <div>
            <button >Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth === undefined) return <Navigate to="/profile/*" />
    console.log(props.isAuth)

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
     
    </div>
}

const mapStateToProps = (state) => ({
    
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)