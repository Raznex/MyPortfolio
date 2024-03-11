import './Footer.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import telegram from '../../assets/icons/telegram.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vk from '../../assets/icons/vk.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import github from '../../assets/icons/gitHub.svg';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__up'>
          <a href='https://vk.com/razznex' target='_blank' rel='noreferrer'>
            <img src={vk} alt='vk' className='footer__logo' />
          </a>
          <a href='https://t.me/raznex' target='_blank' rel='noreferrer'>
            <img src={telegram} alt='telegram' className='footer__logo' />
          </a>
          <a href='https://github.com/Raznex' target='_blank' rel='noreferrer'>
            <img src={github} alt='git' className='footer__logo' />
          </a>
        </div>
        <p className='footer__desc'>© 2024 Burkoveckiy Andrei</p>
      </div>
    </div>
  );
};

export default Footer;
