'use client';

// --- React ---
import { Container, Row, Col, Card } from 'react-bootstrap';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faMap, faParachuteBox } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  return (
    <Container className='feature-section text-center'>
      <h2>How It Works</h2>
      <Row>
        <Col md={4} className='mb-4'>
          <Card className='how-it-works-card'>
            <Card.Body>
              <div className='icon'>
                <FontAwesomeIcon icon={faMap} />
              </div>
              <Card.Title>1. Pick Your Map</Card.Title>
              <Card.Text>
                Choose from any Battle Royale or Resurgence map, including Verdansk, Rebirth Island,
                and more.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='mb-4'>
          <Card className='how-it-works-card'>
            <Card.Body>
              <div className='icon'>
                <FontAwesomeIcon icon={faDice} />
              </div>
              <Card.Title>2. Get Your Drop</Card.Title>
              <Card.Text>
                Hit the button to randomly select a named location or point of interest from your
                chosen map.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className='mb-4'>
          <Card className='how-it-works-card'>
            <Card.Body>
              <div className='icon'>
                <FontAwesomeIcon icon={faParachuteBox} />
              </div>
              <Card.Title>3. Drop & Dominate</Card.Title>
              <Card.Text>
                Challenge yourself with a new drop spot and adapt your strategy to conquer the
                battleground.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HowItWorks;
