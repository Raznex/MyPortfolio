import React from 'react';
import './Projects.css';
import { achieve } from '../../assets/constants/constants';
import ProjectCard from './ProjectCard/ProjectCard';
const Projects = () => {
  return (
    <div className='projects'>
      {achieve.map((item) => (
        <ProjectCard
          key={'key' + item.id}
          card={item}
          // onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default Projects;
