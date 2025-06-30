'use client';

// --- React ---
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// --- Next ---
import Link from 'next/link';
// --- Components ---
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

// --- Types ---
interface IToolCard {
  title: string;
  description: string;
  href: string;
  icon: IconDefinition;
}

interface LandingPageComponentProps {
  title: string;
  subtitle: string;
  toolCards: IToolCard[];
  buttonVariant: string;
}

export default function LandingPageComponent({
  title,
  subtitle,
  toolCards,
  buttonVariant,
}: LandingPageComponentProps) {
  return (
    <Container>
      <div className='text-center mb-4'>
        <h1 className={styles.pageTitle}>{title}</h1>
        <p className='lead'>{subtitle}</p>
      </div>

      <Row className='p-3 p-md-4 bg-light rounded mb-4 justify-content-center'>
        <Breadcrumbs links={[{ text: title }]} className='mb-4' />
        {toolCards.map((card) => (
          <Col xs={12} md={6} lg={4} className='mb-4' key={card.href}>
            <Card className='h-100 text-center'>
              <Card.Body className='d-flex flex-column'>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Link href={card.href} className='mt-auto w-100'>
                  <Button variant={buttonVariant} className='w-100'>
                    <FontAwesomeIcon icon={card.icon} className='me-2' />
                    Go to {card.title}
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
