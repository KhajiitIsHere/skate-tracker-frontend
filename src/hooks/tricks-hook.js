import {useCallback, useContext, useEffect, useState} from "react";
import {TricksContext} from "../store/tricks-context";

const getDate = (date) => {

    if (date === null)
        return 'Not tracked yet';

    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1).toString();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const useTricks = () => {
    const tricksContext = useContext(TricksContext)

    if (!tricksContext)
        throw new Error("Context used out of provider");

    const {allTricks, myTricks, trackTrick, increaseTrickLevel, addNoteToTrick} = tricksContext;

    const [filteredAllTricks, setFilteredAllTricks] = useState([]);
    const [filteredMyTricks, setFilteredMyTricks] = useState([])
    const [selectedTrickId, setSelectedTrickId] = useState(null);
    const [selectedTrick, setSelectedTrick] = useState(null);
    const [masteredTricks, setMasteredTricks] = useState([]);

    const selectTrick = useCallback((trickId) => {
        setSelectedTrickId(+trickId);
    }, [])

    const unselectTrick = useCallback(() => {
        setSelectedTrickId(null);
    }, [])

    useEffect(() => {
        if (allTricks.length === 0) {
            setFilteredAllTricks([]);
            return;
        }

        const trickWithLevel = {};
        allTricks.forEach(trick => trickWithLevel[trick.id] = {level: 0, name: trick.title})

        myTricks.forEach(trick => trickWithLevel[trick.trickId].level = trick.currentLevel)

        const filteredTricks = [];

        allTricks.filter(trick => trickWithLevel[trick.id].level === 0)
            .forEach(trick => {
                let canLearn = true;

                const prerequisites = trick.prerequisites.map(pre => {
                    const forTrick = trickWithLevel[pre.trickId];
                    const name = `${forTrick.name} lvl${pre.level}`

                    if (forTrick.level > pre.level)
                        return {name: name, isKnown: true};
                    else {
                        canLearn = false;
                        return {name: name, isKnown: false};
                    }
                })

                const returnTrick = {
                    id: trick.id,
                    title: trick.title,
                    prerequisites: prerequisites,
                    imgName: trick.imgName,
                    shortDescription: trick.shortDescription
                }

                if(canLearn)
                    filteredTricks.unshift(returnTrick);
                else
                    filteredTricks.push(returnTrick);
            })

        setFilteredAllTricks(filteredTricks);
    }, [allTricks, myTricks,])

    useEffect(() => {
        if (myTricks.length === 0) {
            setFilteredMyTricks([]);
            return;
        }

        const alreadyMastered = {}

        masteredTricks.forEach(trick => alreadyMastered[trick.trickId] = true);

        const filteredTricks = myTricks
            .filter(trick => !alreadyMastered[trick.trickId])
            .map(trick => {
            const originalTrick = allTricks.find(t => t.id === trick.trickId);
            const lastTrackedDate = trick.notes.length > 0 ? trick.notes[trick.notes.length - 1].date : null;
            return {
                id: trick.trickId,
                title: originalTrick.title,
                level: trick.currentLevel,
                shortDescription: originalTrick.shortDescription,
                imgName: originalTrick.imgName,
                videoLink: originalTrick.videoLink,
                lastTracked: getDate(lastTrackedDate),
            }
        })

        setFilteredMyTricks(filteredTricks);

    }, [myTricks, allTricks, masteredTricks])

    useEffect(() => {
        if (allTricks.length === 0 || selectedTrickId === null){
            setSelectedTrick(null);
            return;
        }
        const originalTrick = allTricks.find(trick => trick.id === selectedTrickId);
        const myTrick = myTricks.find(trick => trick.trickId === selectedTrickId);

        setSelectedTrick({
            trickId: selectedTrickId,
            title: originalTrick.title,
            videoLink: originalTrick.videoLink,
            levels: originalTrick.levels,
            currentLevel: myTrick.currentLevel,
            notes: myTrick.notes,
        });
    }, [selectedTrickId, allTricks, myTricks])

    useEffect(() => {
        const maxLevelForTricks = {};

        allTricks.forEach(trick => maxLevelForTricks[trick.id] = {title: trick.title, maxLevel: trick.levels.length, imgName: trick.imgName});

        const filteredTricks = myTricks
            .filter(trick => trick.currentLevel > maxLevelForTricks[trick.trickId].maxLevel)
            .map(trick => {
                const ogTrick = maxLevelForTricks[trick.trickId];

                return {
                    trickId: trick.trickId,
                    title: ogTrick.title,
                    imgName: ogTrick.imgName,
                };
            })

        setMasteredTricks(filteredTricks);
    }, [allTricks, myTricks,])


    return {
        allTricks: filteredAllTricks,
        myTricks: filteredMyTricks,
        masteredTricks,
        selectedTrick,
        selectTrick,
        unselectTrick,
        trackTrick,
        increaseTrickLevel,
        addNoteToTrick
    };

}

export default useTricks;