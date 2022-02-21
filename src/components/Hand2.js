import React from "react";
import Card from "./Card";

const Hand2 = ({hand2}) => {

    const hand2List = hand2.map((card, index) => {
        return <Card card={card} key={index}/>
    });

    return(
        <div>
            <ul>
                {hand2List}
            </ul>
        </div>
    )
}

export default Hand2