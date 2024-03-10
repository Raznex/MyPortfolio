import React from 'react';
import { achieve } from '../../../assets/constants/constants';

interface IAchieveCard {
  card: achieve;
}

const ProjectCard: React.FC<IAchieveCard> = ({ card }) => {
  return (
    <>
      <button className='projects-card'>
        <img src={card.img} alt={card.name} className='projects-card__image' />
        <p className='projects-card__title'>{card.name}</p>
        <p className='projects-card__place'>Место: {card.place}</p>
      </button>
    </>
  );
};

export default ProjectCard;
