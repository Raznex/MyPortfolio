import './Achievements.css';

import { useState } from 'react';
import { achieve } from '../../assets/constants/constants';
import PopupPage from '../PopupPage/PopupPage';
import AchieveCard from './AchieveCard/AchieveCard';

const Achievements = () => {
  const [isCardId, setIsCardId] = useState<number>(-1);
  const handleCardClick = (id: number) => {
    setIsCardId(id);
  };
  return (
    <div className='achievements'>
      <div className='achievements__container'>
        {achieve.map((item, index) => (
          <AchieveCard
            key={'key' + item.id}
            card={item}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      {isCardId !== -1 ? (
        <PopupPage cardId={isCardId} setIsCardId={setIsCardId} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Achievements;
