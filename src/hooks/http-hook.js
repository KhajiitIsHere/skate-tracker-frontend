import {useCallback, useState} from "react";

const URL = "http://localhost:8080/api"

const mapToMySkateTrick = (item) => {
    const notes = item.notes.map(note => {
        return {
            id: note.id,
            text: note.text,
            date: new Date(note.dateCreated),
        }
    })

    return {
        trickId: item.skateTrickId,
        currentLevel: item.level,
        notes,
    }
}

const mapToAllSkateTrick = (item) => {
    const prerequisites = item.prerequisites.map(pre => {
        return {
            trickId: pre.skateTrickId,
            level: pre.requiredLevel,
        };
    });

    return {
        id: item.id,
        title: item.name,
        prerequisites,
        levels: item.levels,
        imgName: item.imageLink,
        shortDescription: item.shortDescription,
        videoLink: item.videoLink,
    }
}


const useHttp = () => {

    const [errorMessage, setErrorMessage] = useState(null);

    const sendRequest = async (urlPath, method='GET', body=undefined, userId=undefined) => {

        setErrorMessage(null);

        const headers = {'Content-Type': 'application/json',};
        if (userId)
            headers['user-id'] = userId;

        const request = await fetch(URL+urlPath, {
            method: method,
            headers: headers,
            body: body ? JSON.stringify(body) : undefined,
        })

        if (request.ok)
            return await request.json();
        else {
            const data = await request.json()
            if (data && data.text) {
                setErrorMessage(data.text);
                console.log(data.text);
            }

            return null;
        }
    }

    const getAllTricks = useCallback(async () => {

        const data = await sendRequest('/all-tricks');

        if (data) {
            return data.map(item => mapToAllSkateTrick(item));
        } else {
            return [];
        }
    }, [])

    const getMyTricks = useCallback(async (idToken) => {
        const data = await sendRequest('/my-tricks', 'GET', undefined, idToken);

        if (data) {
            return data.map(item => mapToMySkateTrick(item));
        } else {
            return [];
        }
    }, [])

    const trackTrick = useCallback(async (trickId, idToken) => {
        const data = await sendRequest(`/all-tricks/${trickId}`, 'POST', undefined, idToken);

        if(data) {
            return mapToMySkateTrick(data);
        } else {
            return null;
        }
    }, [])

    const increaseTrickLevel = useCallback(async (trickId, idToken) => {
        const data = await sendRequest(`/my-tricks/level-up/${trickId}`, 'POST', undefined, idToken)

        if (data) {
            return mapToMySkateTrick(data);
        } else {
            return null;
        }
    }, [])

    const addNoteToTrick = useCallback(async (trickId, noteText, idToken) => {
        const data = await sendRequest(`/my-tricks/add-note/${trickId}`, 'POST', {text: noteText}, idToken);

        if (data) {
            return mapToMySkateTrick(data);
        } else {
            return null;
        }
    }, [])

    const register = async (username, password) => {
        const body = {username, password};
        return await sendRequest('/user/register', 'POST', body)
    }

    const login = async (username, password) => {
        const body = {username, password};
        return await sendRequest('/user/login', 'POST', body)
    }

    const logout = async (idToken) => {
        return await sendRequest('/user/logoff', 'POST', undefined, idToken)
    }

    const changePassword = async (idToken, password) => {
        return await sendRequest('/user/change-password', 'POST', {password}, idToken)
    }

    return {errorMessage, getAllTricks, getMyTricks, trackTrick, increaseTrickLevel, addNoteToTrick, register, logout, login, changePassword};
}

export default useHttp;