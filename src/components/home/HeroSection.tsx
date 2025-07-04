'use client';

// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Styles ---
import styles from './HomePage.module.css';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <Container className='h-100'>
          <Row className='h-100 align-items-center text-center'>
            <Col>
              <h1 className='display-4 text-white fw-bold'>Your Ultimate Call of Duty Toolkit</h1>
              <p className='lead text-white-50'>
                Random class generators, weapon stats, and more for every Call of Duty game.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;
