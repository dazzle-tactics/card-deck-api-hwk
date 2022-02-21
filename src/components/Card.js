import React from "react";

const Card = ({card, index, moveFromDeckToHand, moveFromDeckToHand2}) => {

    const handleClick = function(){
        moveFromDeckToHand(card, index)
    }

    const handleDoubleClick = function(){
        moveFromDeckToHand2(card, index)
    }

    return <div>

        <img src={card.image} alt={`${card.value} OF ${card.suit}`} onClick={handleClick} onDoubleClick={handleDoubleClick}></img>
        </div>


}

export default Card

//<img src={card.images.svg}></img>
        /* The {card.value} of {card.suit}: */