import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
const UncontrolledExample = () => {
  return (
    <Carousel className='carousel' interval={null}>
      <Carousel.Item>
        <div className='carousel__item'>G</div>
        <Carousel.Caption>
          <h3>Имя проекта</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel__item'>G</div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='carousel__item'>G</div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default UncontrolledExample;
