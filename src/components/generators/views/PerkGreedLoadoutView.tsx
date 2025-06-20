// --- React ---
import React from 'react';
import { Row, Col, Card, Placeholder } from 'react-bootstrap';
// --- Types ---
import { PerkObject } from '@/types/Generator';
// --- Styles ---
import styles from './ModernLoadout.module.css';

// --- Props ---
interface PerkGreedLoadoutViewProps {
  isGenerating: boolean;
  perks: PerkObject;
  cardClassName?: string;
  headerClassName?: string;
}

interface PerkColumnProps {
  title: string;
  perk?: string;
  greedPerk?: string;
  isGenerating: boolean;
  cardClassName?: string;
  headerClassName?: string;
}

const PerkColumn: React.FC<PerkColumnProps> = ({
  title,
  perk,
  greedPerk,
  isGenerating,
  cardClassName,
  headerClassName,
}) => (
  <Col md={4} className='text-center mb-4 mb-md-0'>
    <Card className={cardClassName}>
      <Card.Header as='h5' className={headerClassName}>
        {title}
      </Card.Header>
      <Card.Body style={{ minHeight: '110px' }}>
        {isGenerating ? (
          <>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={7} size='lg' />
            </Placeholder>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={5} />
            </Placeholder>
          </>
        ) : (
          <>
            <Card.Text className='fw-bold fs-5 mb-1'>{perk}</Card.Text>
            {greedPerk && <Card.Text className='text-muted'>+ {greedPerk}</Card.Text>}
          </>
        )}
      </Card.Body>
    </Card>
  </Col>
);

const PerkGreedLoadoutView: React.FC<PerkGreedLoadoutViewProps> = ({
  isGenerating,
  perks,
  cardClassName,
  headerClassName,
}) => {
  const fullCardClassName = [styles.card, cardClassName, isGenerating ? styles.generating : '']
    .filter(Boolean)
    .join(' '); // Join them into a final string.

  return (
    <Row className='justify-content-md-center'>
      <PerkColumn
        title='Perk 1'
        perk={perks.perk1}
        greedPerk={perks.perk1Greed}
        isGenerating={isGenerating}
        cardClassName={fullCardClassName}
        headerClassName={headerClassName}
      />
      <PerkColumn
        title='Perk 2'
        perk={perks.perk2}
        greedPerk={perks.perk2Greed}
        isGenerating={isGenerating}
        cardClassName={fullCardClassName}
        headerClassName={headerClassName}
      />
      <PerkColumn
        title='Perk 3'
        perk={perks.perk3}
        greedPerk={perks.perk3Greed}
        isGenerating={isGenerating}
        cardClassName={fullCardClassName}
        headerClassName={headerClassName}
      />
    </Row>
  );
};

export default PerkGreedLoadoutView;
