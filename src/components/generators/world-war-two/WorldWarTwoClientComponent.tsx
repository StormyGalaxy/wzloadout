'use client';

// --- React ---
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// --- Next ---
import Link from 'next/link';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDice,
  faSkull,
  faSliders,
  faCircleInfo,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

interface IToolCard {
  title: string;
  description: string;
  href: string;
  icon: IconDefinition;
}

const toolCards: IToolCard[] = [
  {
    title: 'Multiplayer Generator',
    description:
      'Stuck in a rut using the same old classes? Spice up your multiplayer experience with a randomly generated loadout. Discover new weapon combinations and strategies you never thought to try.',
    href: '/world-war-two/generator',
    icon: faDice,
  },
  {
    title: 'Zombies Generator',
    description:
      "Challenge yourself and your friends in your next Zombies match. Generate a random loadout and see how long you can survive against the undead hordes with the weapons and perks you're given.",
    href: '/world-war-two/zombies-generator',
    icon: faSkull,
  },
  {
    title: 'Custom Match',
    description:
      'Set up the perfect private match with our custom match generator. Easily randomize teams, game modes, and settings for a unique and fun experience every time you play with your friends.',
    href: '/world-war-two/custom-match',
    icon: faSliders,
  },
  {
    title: 'Loadout Info',
    description:
      'Get all the details on the weapons, attachments, perks, and equipment available in Call of Duty: WWII. A perfect resource for theory-crafting your next dominant class setup.',
    href: '/world-war-two/info',
    icon: faCircleInfo,
  },
];

export default function WorldWarTwoClientComponent() {
  return (
    <Container>
      <div className='text-center mb-4'>
        <h1 className={styles.pageTitle}>Call of Duty: WWII</h1>
        <p className='lead'>
          Your central hub for all things Call of Duty: World War Two. Below you'll find a suite of
          tools to enhance your gameplay, from generating random loadouts to creating custom matches
          for you and your friends.
        </p>
      </div>

      <Row className='p-3 p-md-4 bg-light rounded mb-4'>
        {toolCards.map((card) => (
          <Col md={6} className='mb-4' key={card.href}>
            <Card className='h-100 text-center'>
              <Card.Body className='d-flex flex-column'>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Link href={card.href}>
                  <Button variant='ww2' className='mt-auto w-100'>
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
