import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CarouselCard from '../../components/Carousel/Carousel';
import { projects } from '../../assets/constants/constants';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import git from '../../assets/icons/GitBlack.svg';
import './CarouselComp.css';

const CarouselComp = () => {
  const { cardId } = useParams();
  const projectId = cardId ? parseInt(cardId) : undefined;
  const project =
    projectId !== undefined
      ? projects.find((project) => project.id === projectId)
      : undefined;
  console.log(project);
  return (
    <div className='carousel-comp'>
      <p className='carousel__title'>{project?.name}</p>
      <p className='carousel__skills'>{project?.skills}</p>
      {project && <CarouselCard project={project} />}
      <a
        href={project?.git}
        target='_blank'
        className='carousel__git'
        rel='noreferrer'
      >
        <img src={git} alt='git' className='carousel__github' />
        GitHub
      </a>
    </div>
  );
};

export default CarouselComp;
