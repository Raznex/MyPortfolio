import React from 'react';
import { IProjects } from '../../../assets/constants/constants';
import './ProjectCard.css';

interface IProjectCard {
  card: IProjects;
  onClick: () => void;
}

const ProjectCard: React.FC<IProjectCard> = ({ card, onClick }) => {
  return (
    <>
      <button className='projects-card' onClick={onClick}>
        <img
          src={card.img[0].path}
          alt={card.name}
          className='projects-card__image'
        />
        <p className='projects-card__title'>{card.name}</p>
      </button>
    </>
  );
};

export default ProjectCard;
