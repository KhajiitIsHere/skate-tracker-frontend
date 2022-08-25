import React, {useState} from "react";
import {Link} from "react-router-dom";

const LoginForm = ({errorMessage, mode, onSubmit}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [formErrorMessage, setFormErrorMessage] = useState(null);

    const changeUsernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const changePasswordHandler = (event) => {
        setPassword(event.target.value)
    }

    const changeRepeatPasswordHandler = (event) => {
        setRepeatPassword(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        setFormErrorMessage(null);

        if (username === '' || password === '') {
            setFormErrorMessage('Please enter values')
            return;
        }

        if (mode === 'sign-up' && password !== repeatPassword) {
            setFormErrorMessage('Passwords must match')
            return;
        }

        onSubmit(username, password);
    }

    let finalErrorMessage = formErrorMessage;

    if (finalErrorMessage === null)
        finalErrorMessage = errorMessage;

    return (
        <form onSubmit={submitHandler}>
            {finalErrorMessage && <p className="text-danger">{finalErrorMessage}</p>}
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input value={username} onChange={changeUsernameHandler} type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input value={password} onChange={changePasswordHandler} type="password" className="form-control" id="password" />
            </div>
            {mode === 'login' && <p>Don't have an account? <Link className='text-info' to='/sign-up'>Sign up</Link> </p>}
            {mode === 'sign-up' &&
            <div className="mb-3">
                <label htmlFor="repeatPassword" className="form-label">Repeat password</label>
                <input value={repeatPassword} onChange={changeRepeatPasswordHandler} type="password" className="form-control" id="repeatPassword" />
            </div>
            }
            <button type="submit" className="btn btn-primary">{mode === 'login' ? 'Login' : 'Sign up'}</button>
        </form>
    );
}

export default LoginForm;