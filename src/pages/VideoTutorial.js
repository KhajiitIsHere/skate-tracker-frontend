import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import useTricks from "../hooks/tricks-hook";
import BackIcon from "../components/UI/back-icon/BackIcon";

const VideoTutorial = () => {

    const params = useParams();
    const {selectTrick, selectedTrick} = useTricks()

    useEffect(() => {
        const trickId = params.trickId;
        selectTrick(trickId);
    }, [selectTrick, params.trickId])



    if (selectedTrick) {
        return (
            <div className="container">
                <Link to={"/my-tricks"}><BackIcon /></Link>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <iframe title={selectedTrick.title} width="1280" height="720"
                            data-src={selectedTrick.videoLink} frameBorder="0"
                            allowFullScreen="" allow="autoplay; encrypted-media"
                            src={selectedTrick.videoLink}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <h2>Loading...</h2>
        )
    }
}

export default VideoTutorial;