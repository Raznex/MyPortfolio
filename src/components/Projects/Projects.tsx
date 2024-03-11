import React from 'react';
import './Projects.css';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../assets/constants/constants';
import ProjectCard from './ProjectCard/ProjectCard';
const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className='projects'>
      {projects.map((item) => (
        <ProjectCard
          key={'key' + item.id}
          card={item}
          onClick={() => navigate(`/${item.id}`, { replace: true })}
        />
      ))}
    </div>
  );
};

export default Projects;
