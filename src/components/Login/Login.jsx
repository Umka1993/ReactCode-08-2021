import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from "../common/FormsControls/FormControls.module.sass";
import {connect} from "react-redux";
import {login} from "../../REDUX/authReducer";
import {Redirect} from "react-router-dom";







const LoginForm = ({handleSubmit,error}) => {
    // debugger
    return (
            <form onSubmit={handleSubmit}>
                <div className={s.formControl}>
                    {createField('Email','email', [required], Input )}
                </div>
                <div>
                    {createField('Password','password', [required], Input, {type:'password'} )}
                </div>
                <div className={s.inputCheckbox}>
                    {createField(null,'rememberMe', [], Input, {type:'checkbox'}, 'remember  me')}
                </div>

                {error && <div className = {s.formSummaryError}> {error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    // debugger
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)