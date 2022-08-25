import React from "react";
import ProfileIcon from "../UI/profile-icon/ProfileIcon";

const ProfileButton = ({username}) => {

    return(
        <div className='ms-3 d-flex align-items-center'>
            <ProfileIcon />
            <span className='ms-2'>
                {username === '' ? 'Guest' : username}
            </span>
        </div>
    )
}

export default ProfileButton;