'use client';

// --- React ---
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
// --- Components ---
import WheelComponent from 'react-wheel-of-prizes-react19';
import Breadcrumbs from '@/components/common/breadcrumbs/Breadcrumbs';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Styles ---
import styles from './WhereWeDroppin.module.css';

interface WhereWeDroppinProps {
  map: string;
  ga_label: string;
  button_key: string;
  mapInfo: string[];
}

function WhereWeDroppin({ map, button_key, ga_label, mapInfo }: WhereWeDroppinProps) {
  const ga_button_id = `${button_key}WhereWeDroppin_rollSpot`;
  const ga_label_id = `${ga_label}_WhereWeDroppin`;

  const [isLoading, setIsLoading] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState('????');
  const [isWinnerRevealed, setIsWinnerRevealed] = useState(false);

  const segColors = ['#329337', '#9D4EBB'];

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const onFinished = (newWinner: string) => {
    setWinner(newWinner);
    setIsWinnerRevealed(true);
    sendEvent('button_click', {
      button_id: ga_button_id,
      label: ga_label_id,
      category: 'WhereWeDroppin',
    });

    // Reset animation class after it plays
    setTimeout(() => setIsWinnerRevealed(false), 500);
  };

  const handleRandomizeClick = () => {
    setIsSpinning(true);
    setIsWinnerRevealed(false);
    setWinner(''); // Clear previous winner

    sendEvent('button_click', {
      button_id: ga_button_id,
      label: ga_label_id,
      category: 'WhereWeDroppin',
    });

    setTimeout(() => {
      const newWinner = mapInfo[Math.floor(Math.random() * mapInfo.length)];
      setWinner(newWinner);
      setIsSpinning(false);
      setIsWinnerRevealed(true);
      // Reset animation class after it plays
      setTimeout(() => setIsWinnerRevealed(false), 500);
    }, 1200); // Increased delay for suspense
  };

  const breadcrumbLinks = [
    { href: '/warzone', text: 'Warzone' },
    { href: '/warzone/where-we-droppin', text: 'Where We Droppin' },
    { text: map },
  ];

  return (
    <Container id='where-we-droppin' className={styles.rouletteContainer}>
      <Row className='justify-content-md-center'>
        {isLoading && (
          <>
            <Row className='mb-3 text-center'>
              <Breadcrumbs links={breadcrumbLinks} className='mb-4' />
              <Col md={6} className='mb-3 mb-md-0'>
                <span className='fw-bolder fs-5'>Map:</span> <br />
                <span className={styles.mapName}>{map}</span>
              </Col>
              <Col md={6}>
                <span className='fw-bolder fs-5'>Winner:</span> <br />
                <div
                  className={`${styles.winnerDisplay} ${
                    isWinnerRevealed ? styles.winnerReveal : ''
                  }`}>
                  {isSpinning ? <Spinner animation='border' className={styles.spinner} /> : winner}
                </div>
              </Col>
            </Row>
            <Col lg={12} className='d-flex justify-content-center d-none d-md-flex my-4'>
              <WheelComponent
                segments={mapInfo}
                segColors={segColors}
                winningSegment='random'
                onFinished={(winner) => onFinished(winner)}
                primaryColor='black'
                contrastColor='white'
                buttonText='Spin'
                isOnlyOnce={false}
                size={300}
                upDuration={200}
                downDuration={600}
                randomWinningSegment={true}
              />
            </Col>
            <Col xs={12} className='text-center mt-3 d-block d-md-none'>
              <Button
                variant='success'
                size='lg'
                className={styles.randomizeButton}
                disabled={isSpinning}
                onClick={handleRandomizeClick}>
                {isSpinning ? 'Choosing...' : 'Randomize Spot'}
              </Button>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}

export default WhereWeDroppin;
