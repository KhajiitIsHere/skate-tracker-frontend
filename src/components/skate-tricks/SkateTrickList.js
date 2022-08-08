import React from "react";
import xIcon from "../../images/x-icon.webp"
import fiftyFiftyGrind from "../../images/50-50-grind.jpg"
import SkateTrick from "./SkateTrick";

const SkateTrickList = (props) => {
    return (
        <div className="container">
            <SkateTrick title={'Kickflip'}
                        prerequisites={[{name: 'Ollie lvl3', isKnown: true},]}
                        imgName={'kickflip.jpg'}
                        shortDescription={'A kickflip is a common skateboard trick that pops the skater up into the air, using their feet to flip the board a full rotation—360 degrees.'}/>
            <SkateTrick title={'Pop Shuvit'}
                        prerequisites={[{name: 'Shuvit lvl10', isKnown: false}, {name: 'Ollie lvl3', isKnown: true}]}
                        imgName={'pop-shuvit.jpg'}
                        shortDescription={'The pop shove it combines an ollie with a shove it, popping up the board as it spins 180 degrees in the air while you hover above it without spinning.'}/>
            <SkateTrick title={'50/50 grind'}
                        prerequisites={[{name: 'Kickflip lvl5', isKnown: false},]}
                        imgName={'50-50-grind.jpg'}
                        shortDescription='A 50/50 grind is a skateboarding trick where the skateboarder ollies their board onto an obstacle (like a handrail or bench), grinding forward on the middle part of the deck before landing their board on the ground again.'/>
        </div>
    )
}

export default SkateTrickList;