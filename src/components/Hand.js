import React from "react";
import Card from "./Card";

const Hand = ({hand}) => {

    const handList = hand.map((card, index) => {
        return <Card card={card} key={index}/>
    });

    return(
        <div>
            <ul>
                {handList}
            </ul>
        </div>
    )
}

export default Hand