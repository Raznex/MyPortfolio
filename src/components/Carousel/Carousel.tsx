import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';
import React from 'react';
import { IProjects } from '../../assets/constants/constants';

interface ICarousel {
  project: IProjects;
}

const CarouselCard: React.FC<ICarousel> = ({ project }) => {
  const items = [
    ...project.img.map((image) => (
      <div key={image.id} className='item'>
        <img
          src={image.path}
          alt={'картинка' + image.id}
          className='carousel__image'
        />
      </div>
    )),
  ];
  return <AliceCarousel mouseTracking items={items} infinite={true} />;
};

export default CarouselCard;
