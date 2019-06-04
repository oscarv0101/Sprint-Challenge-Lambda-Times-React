import React from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map(card => <Card cards={card}/>)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      tab:  PropTypes.string,
      img:  PropTypes.string,
      author: PropTypes.string
    })
  )
}

export default Cards;