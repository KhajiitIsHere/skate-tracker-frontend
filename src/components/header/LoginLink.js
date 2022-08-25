import React from "react";
import {Link} from "react-router-dom";
import {useUser} from "../../store/user-context";
import {useNavigate} from "react-router-dom";
import classes from './LoginLink.module.css';

const LoginLink = ({isLoggedIn}) => {

    const {logout} = useUser();
    const navigate = useNavigate();

    const signOutHandler = () => {
        logout()
        navigate('/all-tricks');
    }

    return !isLoggedIn ?
        <Link className="nav-link text-info ms-5" to='/login'>Sign in</Link> :
        <div onClick={signOutHandler} className={`nav-link text-info ms-5 ${classes['clickable-text']}`}>Sign out</div>
}

export default LoginLink;