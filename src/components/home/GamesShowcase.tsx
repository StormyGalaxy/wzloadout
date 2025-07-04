'use client';

// --- React ---
import { Row, Col, Card } from 'react-bootstrap';
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
            <a href={game.link} className={styles.gameLink}>
              <Card className={`${styles.gameCard} ${styles.comingSoonCard}`}>
                <Card.Img
                  variant='top'
                  src={game.logoUrl}
                  alt={`${game.name} Logo`}
                  className={styles.gameLogo}
                  loading='lazy'
                />
                <div className={styles.comingSoonOverlay}>
                  <span className='text-white'>Coming Soon</span>
                </div>
                <div className={styles.gameNameOverlay}>
                  <span className='text-white'>{game.name}</span>
                </div>
              </Card>
            </a>
          ) : (
            <a href={game.link} className={styles.gameLink}>
              <Card className={styles.gameCard}>
                <Card.Img
                  variant='top'
                  src={game.logoUrl}
                  alt={`${game.name} Logo`}
                  className={styles.gameLogo}
                  loading='lazy'
                />
                <div className={styles.gameNameOverlay}>
                  <span className='text-white'>{game.name}</span>
                </div>
              </Card>
            </a>
          )}
        </Col>
      ))}
    </Row>
  );
};

export default GamesShowcase;
