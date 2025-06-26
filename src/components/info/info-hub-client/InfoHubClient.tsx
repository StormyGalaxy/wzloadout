'use client';

// --- React ---
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// --- Next ---
import Link from 'next/link';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from './InfoHub.module.css';

interface InfoLink {
  icon: IconDefinition;
  title: string;
  description: string;
  link: string;
}

interface InfoHubClientProps {
  heroTitle: string;
  heroSubTitle: string;
  multiplayerLink: string;
  multiplayerLinks: InfoLink[];
  zombiesLink?: string;
  zombiesLinks?: InfoLink[];
  buttonVariant: string;
}

export default function InfoHubClient({
  heroTitle,
  heroSubTitle,
  multiplayerLink,
  multiplayerLinks,
  zombiesLink,
  zombiesLinks,
  buttonVariant,
}: InfoHubClientProps) {
  return (
    <>
      {/* --- Hero Section --- */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          <Container className='text-center text-white'>
            <h1 className='display-3 fw-bold'>{heroTitle}</h1>
            <p className='lead'>{heroSubTitle}</p>
          </Container>
        </div>
      </div>

      <Container className='py-5'>
        {/* --- Multiplayer Section --- */}
        <section id='multiplayer' className='mb-5'>
          <h2 className='display-5 text-center mb-4'>Multiplayer Arsenal</h2>
          <Row xs={1} md={2} lg={4} className='g-4'>
            {multiplayerLinks.map((item) => (
              <Col key={item.title}>
                <Card className='h-100 text-center bg-light border-2'>
                  <Card.Body className='d-flex flex-column'>
                    <div className='mb-3'>
                      <FontAwesomeIcon icon={item.icon} size='3x' className='text-muted' />
                    </div>
                    <Card.Title as='h4'>{item.title}</Card.Title>
                    <Card.Text className='flex-grow-1'>{item.description}</Card.Text>
                    <Link href={item.link}>
                      <Button variant={buttonVariant} className='mt-auto'>
                        View {item.title}
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className='mt-4'>
            <Col className='text-center'>
              <Link href={multiplayerLink}>
                <Button variant='dark' size='lg' className='w-50'>
                  <FontAwesomeIcon icon={faGamepad} className='me-2' />
                  Go to Multiplayer Generator
                </Button>
              </Link>
            </Col>
          </Row>
        </section>

        {/* --- Zombies Section --- */}
        {zombiesLink && zombiesLinks && (
          <section id='zombies'>
            <h2 className='display-5 text-center mb-4'>Nazi Zombies Command</h2>
            <Row xs={1} md={2} lg={3} className='g-4 justify-content-center'>
              {zombiesLinks.map((item) => (
                <Col key={item.title}>
                  <Card className='h-100 text-center bg-light border-2'>
                    <Card.Body className='d-flex flex-column'>
                      <div className='mb-3'>
                        <FontAwesomeIcon icon={item.icon} size='3x' className='text-muted' />
                      </div>
                      <Card.Title as='h4'>{item.title}</Card.Title>
                      <Card.Text className='flex-grow-1'>{item.description}</Card.Text>
                      <Link href={item.link}>
                        <Button variant={buttonVariant} className='mt-auto'>
                          View {item.title}
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row className='mt-4'>
              <Col className='text-center'>
                <Link href={zombiesLink}>
                  <Button variant='dark' size='lg' className='w-50'>
                    <FontAwesomeIcon icon={faGamepad} className='me-2' />
                    Go to Zombies Generator
                  </Button>
                </Link>
              </Col>
            </Row>
          </section>
        )}
      </Container>
    </>
  );
}
