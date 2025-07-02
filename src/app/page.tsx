// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import { SclCard } from '@silocitypages/ui-core';
// --- Data ---
import generatorList from '@/data/index/generator-list.json';
import zombieGeneratorList from '@/data/index/zombie-generator-list.json';

export default function HomePage() {
  return (
    <PageLayout>
      <Container className='mt-3 mb-3'>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col className='mx-auto'>
            <Row>
              <h3 className='text-center'>Multiplayer</h3>
              <hr />
              {generatorList.map((card, index) => (
                <Col key={index} xl={3} lg={4} md={6} className='text-center mb-4'>
                  <SclCard
                    title={card.title}
                    text={card.text}
                    variant={card.variant}
                    buttons={card.buttons}
                  />
                </Col>
              ))}
            </Row>
            <Row className='mt-5'>
              <h3 className='text-center'>Zombies</h3>
              <hr />
              {zombieGeneratorList.map((card, index) => (
                <Col key={index} xl={3} lg={4} md={6} className='text-center mb-4'>
                  <SclCard
                    title={card.title}
                    text={card.text}
                    variant={card.variant}
                    buttons={card.buttons}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
