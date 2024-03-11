import React, { useState } from 'react';
import './AchieveCard.css';
import { achieve } from '../../../assets/constants/constants';

interface IAchieveCard {
  card: achieve;
  onClick: () => void;
}

const AchieveCard: React.FC<IAchieveCard> = ({ card, onClick }) => {
  return (
    <>
      <button className='achieve-card' onClick={onClick}>
        <img src={card.img} alt={card.name} className='achieve-card__image' />
        <p className='achieve-card__title'>{card.name}</p>
        <p className='achieve-card__place'>Место: {card.place}</p>
      </button>
    </>
  );
};

export default AchieveCard;
