'use client';

// --- React ---
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useColdWarGenerator } from '@/hooks/black-ops/cold-war/useColdWarGenerator';
// --- Components ---
import SimpleLoadoutView from '@/components/generators/views/SimpleLoadoutView';
import CodClassName from '@/components/CodClassName';
import GeneratorSkeleton from '@/components/generators/views/skeletons/GeneratorSkeleton';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';

const ColdWarGenerator: React.FC = () => {
  const { data, isLoading, isGenerating, generateLoadout } = useColdWarGenerator();

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
        perks={perkObj ?? null}
        lethal={equipment?.lethal?.name}
        tactical={equipment?.tactical?.name}
        fieldUpgrade={equipment?.fieldUpgrade?.name ?? ''}
        wildcard={wildcard?.name ?? ''}
        streaks={streaks}
      />

      {/* --- Generate Button --- */}
      <Row className='mt-4'>
        <Col className='text-center'>
          <Button variant='danger' disabled={isGenerating} onClick={() => generateLoadout()}>
            <FontAwesomeIcon icon={faDice} className='me-2' />
            {isGenerating ? 'Generating...' : 'Generate New Loadout'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ColdWarGenerator;
