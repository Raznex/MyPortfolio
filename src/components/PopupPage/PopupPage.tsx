import React from 'react';
import './PopupPage.css';
import { achieve } from '../../assets/constants/constants';

interface IPopup {
  cardId: number;
  setIsCardId: React.Dispatch<React.SetStateAction<number>>;
}

const PopupPage: React.FC<IPopup> = ({ cardId, setIsCardId }) => {
  const closePopup = () => {
    setIsCardId(-1);
  };
  return (
    <div className='PopupPage' onClick={closePopup}>
      <div className='PopupPage__container'>
        <img
          src={achieve[cardId].img}
          alt={achieve[cardId].name}
          className='PopupPage__image'
        />
        <p className='PopupPage__title'>{achieve[cardId].name}</p>
      </div>
    </div>
  );
};

export default PopupPage;
