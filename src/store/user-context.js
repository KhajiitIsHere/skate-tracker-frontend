import React, {useContext, useEffect, useState} from "react";
import useHttp from "../hooks/http-hook";

const UserContext = React.createContext({
    username: '',
    idToken: '',
})

const UserContextProvider = (props) => {
    const [username, setUsername] = useState('');
    const [idToken, setIdToken] = useState(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username')
        const storedIdToken = localStorage.getItem('idtoken');
        if (storedUsername){
            setUsername(storedUsername);
            setIdToken(storedIdToken);
        }

    }, [])

    const value = {
        username,
        idToken,
        setUsername,
        setIdToken,
    }

    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}

export const useUser = () => {
    const userContext = useContext(UserContext);
    const {errorMessage, login: doLogin, logout: doLogout, register: doRegister, changePassword: doChangePassword} = useHttp();

    if (!userContext)
        throw new Error("Context used out of provider");

    const {username,
        idToken,
        setUsername,
        setIdToken,} = userContext;

    const login = async (userName, password) => {
        const data = await doLogin(userName, password);

        if (data) {
            setUsername(data.username)
            setIdToken(data.userId)
            localStorage.setItem('username', data.username)
            localStorage.setItem('idtoken', data.userId);
            return true;
        }
        else
            return false;
    }

    const logout = async () => {
        const data = await doLogout(idToken);

        if (data) {
            setIdToken(null)
            setUsername('');
            localStorage.removeItem('username')
            localStorage.removeItem('idtoken');
            return true;
        }
        else
            return false;
    }

    const register = async (userName, password) => {
        const data = await doRegister(userName, password);

        if (data) {
            setUsername(data.username)
            setIdToken(data.userId)
            localStorage.setItem('username', data.username)
            localStorage.setItem('idtoken', data.userId);
            return true;
        }
        else
            return false;
    }

    const changePassword = async (password) => {
        const data = await doChangePassword(idToken, password);

        return !!data;
    }

    return {errorMessage, username, idToken, login, logout, register, changePassword};
}

export default UserContextProvider;