import React from "react";

const Prerequisite = ({name, isKnown}) => {

    const background = isKnown ? 'bg-success' : 'bg-secondary'

    return <span className={`badge ${background} mx-1`}>{name}</span>
}

export default Prerequisite