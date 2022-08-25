import React from "react";
import LoginForm from "../components/login/LoginForm";
import classes from './Login.module.css'
import {useUser} from "../store/user-context";
import {useNavigate} from "react-router-dom";

const Login = ({mode}) => {

    const {errorMessage, login, register} = useUser();
    const navigate = useNavigate();

    const submitHandler = (username, password) => {

        const doTask = async () => {
            let isOkay;
            if (mode === 'login')
                isOkay = await login(username, password);
            else
                isOkay = await register(username, password);
            if (isOkay)
                navigate('/all-tricks');
        }

        doTask();
    }

    return (
        <div className='container p-5'>
            <div className={classes.card}>
                <h3>{mode === 'login' ? 'Login' : 'Sign up'}</h3>
                <LoginForm errorMessage={errorMessage} mode={mode} onSubmit={submitHandler} />
            </div>
        </div>
    );
}

export default Login;