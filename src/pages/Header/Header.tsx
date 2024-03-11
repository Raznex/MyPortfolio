import AboutMe from '../../components/AboutMe/AboutMe';
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__up'>
          <button
            className='header__logo'
            onClick={() => navigate(`/`, { replace: true })}
          >
            PORTFOLIO
          </button>
          {location.pathname !== '/' ? (
            <button
              className='carousel__back'
              onClick={() => navigate(`/`, { replace: true })}
            >
              Назад
            </button>
          ) : (
            ''
          )}
        </div>
        {location.pathname === '/' ? <AboutMe /> : ''}
      </div>
    </div>
  );
};

export default Header;
