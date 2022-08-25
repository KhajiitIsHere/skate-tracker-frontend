import React, {useState} from "react";
import MasteredTricksList from "../components/skate-tricks/mastered-tricks/MasteredTricksList";
import {useUser} from "../store/user-context";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";

const Profile = () => {

    const {username, changePassword} = useUser();
    const [isChangingPassword, setIsChangingPassword] = useState(false);

    const startChangePasswordHandler = () => {
        setIsChangingPassword(true);
    }

    const changePasswordHandler = (password) => {
        changePassword(password);
        setIsChangingPassword(false);
    }

    return (
        <div className="container text-center ">
            <div className="mt-5 mb-5 pb-5">
                <h1>{username === '' ? 'Guest user' : username}</h1>
                {!isChangingPassword && username !== '' && <button onClick={startChangePasswordHandler} className='mt-4 btn btn-light'>Change password</button>}
                {isChangingPassword && <ChangePasswordForm onSubmit={changePasswordHandler} />}
            </div>
            <MasteredTricksList />
        </div>
    )
}

export default Profile;