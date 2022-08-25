import React, {useEffect, useState} from "react";
import useHttp from "../hooks/http-hook";
import {useUser} from "./user-context";


export const TricksContext = React.createContext()

// [
//     {
//         id: 3,
//         title: 'Pop Shuvit',
//         prerequisites: [{trickId: 7, level: 10}, {trickId: 4, level: 3},],
//         levels: [
//             {text: 'Get board off the ground(filming yourself may help)'},
//             {text: 'Get board 1cm off the ground'},
//             {text: 'Level out board'},
//             {text: 'Jump over a line on the ground'},
//             {text: 'Jump over a branch'},
//             {text: '1'},
//             {text: '2'},
//             {text: '3'},
//             {text: '4'},
//             {text: '5'},
//         ],
//         imgName: 'pop-shuvit.jpg',
//         shortDescription: 'A 50/50 grind is a skateboarding trick where the skateboarder ollies their board onto an obstacle (like a handrail or bench), grinding forward on the middle part of the deck before landing their board on the ground again.'
//     },
// ]

// [
//     {
//         trickId: 3,
//         currentLevel: 2,
//         notes: [
//             {
//                 id: 1,
//                 text: 'First note',
//                 date: new Date(2022, 5, 12)
//             }
//         ],
//     },
// ]

const TricksContextProvider = (props) => {

    const [tricks, setTricks] = useState([]);
    const [myTricks, setMyTricks] = useState([]);
    const {idToken} = useUser();

    const {
        getAllTricks: fetchTricks,
        getMyTricks: fetchMyTricks,
        increaseTrickLevel,
        addNoteToTrick,
        trackTrick: trackSkateTrick
    } = useHttp();

    useEffect(() => {

        const fillState = async () => {
            const allTricksData = await fetchTricks();
            const myTricksData = await fetchMyTricks(idToken);
            setTricks(allTricksData);
            setMyTricks(myTricksData);
        }

        fillState()
    }, [fetchTricks, fetchMyTricks, idToken])

    const trackTrick = async (trickId) => {
        const newSkateProgression = await trackSkateTrick(trickId, idToken)

        if (newSkateProgression === null)
            return;

        setMyTricks(prev => [...prev, newSkateProgression]);

    }

    const increaseLevel = async (trickId) => {
        const newSkateProgression = await increaseTrickLevel(trickId, idToken);

        setMyTricks(prev => prev.map(trick => {
            if (trick.trickId === +trickId)
                return newSkateProgression;
            else
                return trick;
        }))
    }

    const addNote = async (trickId, noteText) => {
        const newSkateProgression = await addNoteToTrick(trickId, noteText, idToken)

        setMyTricks(prev => prev.map(trick => {
            if (trick.trickId === +trickId)
                return newSkateProgression;
            else
                return trick;
        }))
    }

    const value = {

        allTricks: tricks,
        myTricks: myTricks,
        trackTrick: trackTrick,
        increaseTrickLevel: increaseLevel,
        addNoteToTrick: addNote,
    }

    return (
        <TricksContext.Provider value={value}>{props.children}</TricksContext.Provider>
    )
}

export default TricksContextProvider;