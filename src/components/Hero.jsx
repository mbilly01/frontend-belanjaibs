import Carousel from 'react-bootstrap/Carousel';
import hero from '../assets/hero.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
const Hero = () => {
  return (
    <Carousel variant="dark" className='mt-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero}
          alt="First slide"
        />
        <Carousel.Caption className='full-height'>
          <h3 className='fs-1 text-danger fw-bold text-center'>BELI 10 GRATIS 1</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero2}
          alt="Second slide"
        />

        <Carousel.Caption className='mb-2'>
          <h1 className='text-white'>MAU LEBIH MURAH?</h1>
          <h1 className='text-white'>SUBSCRIBE AJA!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero3}
          alt="Third slide"
        />

        <Carousel.Caption className='mb-2'>
          <h1 className='fw-1 text-danger'>PENGIRIMAN KURANG DARI</h1>
          <h1 className='fw-1 text-danger'>3 JAM!</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;