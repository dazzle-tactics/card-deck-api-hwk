import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({deck, moveFromDeckToHand, moveFromDeckToHand2}) => {

    const deckList = deck.map((card, index) => {
        return <Card card={card} key={index} index={index} moveFromDeckToHand={moveFromDeckToHand} moveFromDeckToHand2={moveFromDeckToHand2}/>
    });


    return(
        <div>
            <ul>
                {deckList}
            </ul>
        </div>
    )
}

export default CardList