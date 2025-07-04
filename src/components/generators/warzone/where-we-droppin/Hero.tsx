// --- React ---
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <h1>Discover Your Next Victory.</h1>
        <p>Stop debating and start dropping. Get a random landing spot for your next match.</p>
        <Button variant='success' size='lg' href='#where-we-droppin' className='cta-button'>
          Find Your Drop Spot!
        </Button>
      </div>
    </div>
  );
};

export default Hero;
