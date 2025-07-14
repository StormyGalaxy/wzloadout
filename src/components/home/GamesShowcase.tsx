'use client';

// --- React ---
import { Row, Col, Card } from 'react-bootstrap';
// --- Next ---
import Image from 'next/image';
import Link from 'next/link';
// --- Styles ---
import styles from './HomePage.module.css';

interface Game {
  name: string;
  link: string;
  logoUrl: string;
  status: string;
}

interface GamesShowcaseProps {
  games: Game[];
}

const GamesShowcase = ({ games }: GamesShowcaseProps) => {
  return (
    <Row className='g-4'>
      {games.map((game, index) => (
        <Col xs={6} md={4} lg={3} xl={2} key={index}>
          {game.status === 'coming-soon' ? (
            <Link href={game.link} className={styles.gameLink}>
              <Card className={`${styles.gameCard} ${styles.comingSoonCard}`}>
                <Image
                  src={game.logoUrl}
                  alt={`${game.name} Logo`}
                  width={200}
                  height={110}
                  className={`card-img-top ${styles.gameLogo}`}
                  loading='lazy'
                />
                <div className={styles.comingSoonOverlay}>
                  <span className='text-white'>Coming Soon</span>
                </div>
                <div className={styles.gameNameOverlay}>
                  <span className='text-white'>{game.name}</span>
                </div>
              </Card>
            </Link>
          ) : (
            <Link href={game.link} className={styles.gameLink}>
              <Card className={styles.gameCard}>
                <Image
                  src={game.logoUrl}
                  alt={`${game.name} Logo`}
                  width={200}
                  height={110}
                  className={`card-img-top ${styles.gameLogo}`}
                  loading='lazy'
                />
                <div className={styles.gameNameOverlay}>
                  <span className='text-white'>{game.name}</span>
                </div>
              </Card>
            </Link>
          )}
        </Col>
      ))}
    </Row>
  );
};

export default GamesShowcase;
