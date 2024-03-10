import AboutMe from '../../components/AboutMe/AboutMe';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__up'>
          <p className='header__logo'>PORTFOLIO</p>
        </div>
        <AboutMe />
      </div>
    </div>
  );
};

export default Header;
