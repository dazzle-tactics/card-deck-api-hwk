import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import Hand from "../components/Hand";
import Hand2 from "../components/Hand2";
import './DeckContainer.css';

const DeckContainer = () => {

    const [deck, setDeck] = useState([])
    const [hand, setHand] = useState([])
    const [hand2, setHand2] = useState([])

    useEffect(() => {
        getDeck();
    }, [])


    const getDeck = function(){
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
        .then(res => res.json())
        .then(data => setDeck(data.cards))
    }

    const moveFromDeckToHand = function(card, index){
        if (hand.length < 7){
            let newHand = [...hand, card];
            let uniqueNewHand = Array.from(new Set(newHand));
            let newDeck = deck
            setHand(uniqueNewHand);
            newDeck.splice(index, 1)
            setDeck(newDeck);
        };
    }

    const moveFromDeckToHand2 = function(card, index){
        if (hand2.length < 7){
            let newHand = [...hand2, card];
            let uniqueNewHand = Array.from(new Set(newHand));
            let newDeck = deck
            setHand2(uniqueNewHand);
            newDeck.splice(index, 1)
            setDeck(newDeck);
        };
    }

    return (
        <div id="container">            
            <div id="deck">Card List:
            <CardList deck={deck} moveFromDeckToHand={moveFromDeckToHand}
            moveFromDeckToHand2={moveFromDeckToHand2}/>
            </div>
            <div>Hand 1:
            <Hand hand={hand} />
            </div>
            <div>Hand 2:
            <Hand2 hand2={hand2} />
            </div>
        </div>
    )
}

export default DeckContainer;