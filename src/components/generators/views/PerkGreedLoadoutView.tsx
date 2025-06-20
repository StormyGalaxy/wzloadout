// --- React ---
import React from 'react';
import { Row, Col, Card, Placeholder } from 'react-bootstrap';
// --- Types ---
import { PerkObject } from '@/types/Generator';

interface PerkGreedLoadoutViewProps {
  isGenerating: boolean;
  perks: PerkObject;
}

const PerkColumn: React.FC<{
  title: string;
  perk?: string;
  greedPerk?: string;
  isGenerating: boolean;
}> = ({ title, perk, greedPerk, isGenerating }) => (
  <Col md={4} className='text-center mb-3 mb-md-0'>
    <Card className='h-100'>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        {isGenerating ? (
          <>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={6} />
            </Placeholder>
            {greedPerk !== '' && (
              <Placeholder as={Card.Text} animation='glow'>
                <Placeholder xs={5} />
              </Placeholder>
            )}
          </>
        ) : (
          <>
            <Card.Text className='mb-1'>{perk}</Card.Text>
            {greedPerk && <Card.Text className='text-muted'>{greedPerk}</Card.Text>}
          </>
        )}
      </Card.Body>
    </Card>
  </Col>
);

const PerkGreedLoadoutView: React.FC<PerkGreedLoadoutViewProps> = ({ isGenerating, perks }) => {
  return (
    <Row className='justify-content-md-center'>
      <PerkColumn
        title='Perk 1'
        perk={perks.perk1}
        greedPerk={perks.perk1Greed}
        isGenerating={isGenerating}
      />
      <PerkColumn
        title='Perk 2'
        perk={perks.perk2}
        greedPerk={perks.perk2Greed}
        isGenerating={isGenerating}
      />
      <PerkColumn
        title='Perk 3'
        perk={perks.perk3}
        greedPerk={perks.perk3Greed}
        isGenerating={isGenerating}
      />
    </Row>
  );
};

export default PerkGreedLoadoutView;
