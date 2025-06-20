// src/components/generators/views/skeletons/GeneratorSkeleton.tsx
import React from 'react';
import { Container, Row, Col, Card, Placeholder, Button } from 'react-bootstrap';

const SkeletonWeaponCard = () => (
  <Card>
    <Card.Header>
      <Placeholder animation='glow'>
        <Placeholder xs={5} />
      </Placeholder>
    </Card.Header>
    <Card.Body>
      <Placeholder as={Card.Title} animation='glow'>
        <Placeholder xs={7} />
      </Placeholder>
      <Placeholder as={Card.Text} animation='glow'>
        <Placeholder xs={10} /> <Placeholder xs={8} />
      </Placeholder>
    </Card.Body>
  </Card>
);

const SkeletonPerkCard = () => (
  <Card className='h-100'>
    <Card.Header>
      <Placeholder animation='glow'>
        <Placeholder xs={4} />
      </Placeholder>
    </Card.Header>
    <Card.Body className='text-center'>
      <Placeholder as={Card.Text} animation='glow'>
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation='glow'>
        <Placeholder xs={5} className='text-muted' />
      </Placeholder>
    </Card.Body>
  </Card>
);

const GeneratorSkeleton: React.FC = () => {
  return (
    <Container>
      {/* CodClassName Skeleton */}
      <h3 className='text-center display-4 my-3'>
        <Placeholder animation='glow'>
          <Placeholder xs={3} />
        </Placeholder>
      </h3>

      {/* Weapon Cards Skeleton */}
      <Row className='justify-content-md-center mb-3'>
        <Col md={6} className='mb-3 mb-md-0'>
          <SkeletonWeaponCard />
        </Col>
        <Col md={6}>
          <SkeletonWeaponCard />
        </Col>
      </Row>

      <hr />

      {/* Perk Cards Skeleton */}
      <Row className='justify-content-md-center'>
        <Col md={4} className='mb-3 mb-md-0'>
          <SkeletonPerkCard />
        </Col>
        <Col md={4} className='mb-3 mb-md-0'>
          <SkeletonPerkCard />
        </Col>
        <Col md={4}>
          <SkeletonPerkCard />
        </Col>
      </Row>

      <hr />

      {/* Other Info Skeleton */}
      <Row className='justify-content-md-center text-center'>
        <Col md={4} sm={6} className='mb-3'>
          <Card>
            <Card.Header>
              <Placeholder animation='glow'>
                <Placeholder xs={6} />
              </Placeholder>
            </Card.Header>
            <Card.Body>
              <Placeholder as={Card.Text} animation='glow' className='mb-2'>
                <strong>Lethal:</strong> <Placeholder xs={5} />
              </Placeholder>
              <Placeholder as={Card.Text} animation='glow' className='mb-2'>
                <strong>Tactical:</strong> <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation='glow' className='mb-0'>
                <strong>Field Upgrade:</strong> <Placeholder xs={7} />
              </Placeholder>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className='mb-3'>
          <SkeletonPerkCard />
        </Col>
        <Col md={4} sm={12} className='mb-3'>
          <SkeletonPerkCard />
        </Col>
      </Row>

      {/* Button Skeleton */}
      <Row className='mt-4'>
        <Col className='text-center'>
          <Button variant='danger' size='lg' disabled>
            <Placeholder animation='glow' as='span' style={{ color: 'white' }}>
              Generating...
            </Placeholder>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GeneratorSkeleton;
