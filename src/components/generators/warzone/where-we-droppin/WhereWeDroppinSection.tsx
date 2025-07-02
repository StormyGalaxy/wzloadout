// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import Link from 'next/link';
// --- Components ---
import { SclBadge } from '@silocitypages/ui-core';
// --- Data ---
import generatorList from '@/data/warzone/drop-spot-list.json';

const WhereWeDroppinSection = () => {
  return (
    <Container id='where-we-droppin' className='feature-section'>
      <h2>Where We Droppin</h2>
      <Row>
        {generatorList.map((item) => (
          <Col md={6} lg={4} key={`item-${item.title}`} className='mb-4'>
            <div className='where-we-droppin-card'>
              <h4 className='text-center mb-3'>{item.title}</h4>
              <div className='d-flex flex-wrap justify-content-center'>
                {item.drops.map((drop) => (
                  <Link key={drop.title} href={drop.link} className='text-decoration-none m-1'>
                    <SclBadge name={drop.title} variant='success' />
                  </Link>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhereWeDroppinSection;
