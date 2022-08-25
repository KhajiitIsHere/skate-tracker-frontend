import React, {useState} from "react";

const ChangePasswordForm = ({onSubmit}) => {

    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const changeNewPasswordHandler = (event) => {
        setNewPassword(event.target.value);
    }

    const changeRepeatPasswordHandler = (event) => {
        setRepeatPassword(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (newPassword === '') {
            setErrorMessage('Please enter a value');
            return;
        }

        if (newPassword !== repeatPassword) {
            setErrorMessage('Passwords must match');
            return;
        }

        onSubmit(newPassword);
        setNewPassword('');
        setRepeatPassword('');
    }

    return (
        <form onSubmit={submitHandler} className='w-50 m-auto mt-4'>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">New password</label>
                <input value={newPassword} onChange={changeNewPasswordHandler} type="password" className="form-control"
                       id="newPassword"/>
            </div>
            <div className="mb-3">
                <label htmlFor="repeatPassword" className="form-label">Repeat password</label>
                <input value={repeatPassword} onChange={changeRepeatPasswordHandler} type="password"
                       className="form-control" id="repeatPassword"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ChangePasswordForm;