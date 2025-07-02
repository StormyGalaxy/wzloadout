// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- FontAwesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';

const Why = () => {
  return (
    <Container className='feature-section bg-light py-5'>
      <h2 className='text-center mb-4'>Why Use Our Generators?</h2>
      <Row className='align-items-center'>
        <Col md={4} className='text-center mb-4'>
          <div className='icon'>
            <FontAwesomeIcon icon={faSmile} className='mb-3' />
          </div>
          <h4>Break the Monotony</h4>
          <p>
            Inject pure randomness and fun into your matches. Break out of the meta and discover new
            favorite loadouts and playstyles!
          </p>
        </Col>
        <Col md={4} className='text-center mb-4'>
          <div className='icon'>
            <FontAwesomeIcon icon={faStar} className='mb-3' />
          </div>
          <h4>Challenge Yourself</h4>
          <p>
            Master unfamiliar weapons and perks. Improve your adaptability by forcing yourself to
            use off-meta classes and become a more versatile player.
          </p>
        </Col>
        <Col md={4} className='text-center mb-4'>
          <div className='icon'>
            <FontAwesomeIcon icon={faUsers} className='mb-3' />
          </div>
          <h4>Settle Squad Disputes</h4>
          <p>
            No more arguing over who runs what! Use the generator for a fair and fun way to assign
            roles or challenges for your entire squad.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Why;
