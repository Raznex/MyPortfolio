import './AboutMe.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import avatar from '../../assets/images/avatar.jpg';
import CircleLoad from '../CirclesLoad/CircleLoad';

const AboutMe = () => {
  return (
    <section id='about-me' className='about'>
      <div className='about__load'>
        <CircleLoad />
      </div>
      <div className='about__columns'>
        <img src={avatar} alt='Ваш аватар' className='about__photo' />
        <div className='about__container'>
          <div className='about__dev'>
            <h3 className='about__name'>Бурковецкий Андрей</h3>
            <p className='about__age'>Frontend developer</p>
          </div>
          <a
            href='https://github.com/Raznex'
            rel='noreferrer'
            target='_blank'
            className='about__github'
          >
            Мой Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
