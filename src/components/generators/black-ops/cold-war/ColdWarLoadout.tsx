'use client';

// --- React ---
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useColdWarGenerator } from '@/hooks/useColdWarGenerator';
// --- Helpers ---
import { scrollToTop } from '@/helpers/scrollToTop';
// --- Components ---
import SimpleLoadoutView from '@/components/generators/views/SimpleLoadoutView';
import CodClassName from '@/components/CodClassName';
import GeneratorSkeleton from '@/components/generators/views/skeletons/GeneratorSkeleton';

const ColdWarGenerator: React.FC = () => {
  const { data, isLoading, isGenerating, generateLoadout } = useColdWarGenerator();

  const handleClick = () => {
    generateLoadout();
    scrollToTop();
  };

  if (isLoading) {
    // TODO: This should be updated!
    return <GeneratorSkeleton />;
  }

  const { randClassName, perkObj, streaks, weapons, equipment, wildcard } = data;

  return (
    <Container>
      <CodClassName isGenerating={isGenerating} value={randClassName} />

      <SimpleLoadoutView
        isGenerating={isGenerating}
        primary={weapons.primary}
        secondary={weapons.secondary}
        perks={perkObj}
        lethal={equipment.lethal.name}
        tactical={equipment.tactical.name}
        fieldUpgrade={equipment.fieldUpgrade.name}
        wildcard={wildcard.name}
        streaks={streaks}
      />

      {/* --- Generate Button --- */}
      <Row className='mt-4'>
        <Col className='text-center'>
          <Button variant='danger' size='lg' disabled={isGenerating} onClick={handleClick}>
            {isGenerating ? 'Generating...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ColdWarGenerator;
