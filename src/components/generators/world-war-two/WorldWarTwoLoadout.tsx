'use client';

// --- React ---
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useWorldWarTwoGenerator } from '@/hooks/world-war-two/useWorldWarTwoGenerator';
// --- Helpers ---
import { scrollToTop } from '@/helpers/scrollToTop';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import GeneratorSkeleton from '@/components/generators/views/skeletons/GeneratorSkeleton';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ListViewCard from '@/components/generators/views/ListViewCard';
import StreaksView from '@/components/generators/views/StreaksView';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

const WorldWarTwoLoadout: React.FC = () => {
  const { data, isLoading, isGenerating, generateLoadout } = useWorldWarTwoGenerator();
  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating: isGenerating,
  };

  const handleRegenerateClick = async () => {
    scrollToTop();
    await generateLoadout();
  };

  if (isLoading) {
    return <GeneratorSkeleton />;
  }

  const { randClassName, streaks, weapons, equipment, division, basic } = data;

  const equipmentData = [
    {
      title: 'Lethal',
      value: equipment?.lethal?.name + (basic === 'Saboteur' || basic === 'Concussed' ? ' x2' : ''),
    },
    {
      title: 'Tactical',
      value:
        equipment?.tactical?.name + (basic === 'Serrated' || basic === 'Concussed' ? ' x2' : ''),
    },
  ];

  const perks = [
    { title: 'Division', value: division ?? '' },
    { title: 'Basic Training', value: basic ?? '' },
  ];

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />
      {/* --- Weapon Cards --- */}
      <Row className='justify-content-md-center text-center mb-4'>
        <Col md={6} className='mb-4 mb-md-0'>
          {weapons.primary && (
            <WeaponCard title='Primary' weapon={weapons.primary} {...cardProps} />
          )}
        </Col>
        <Col md={6}>
          {weapons.secondary && (
            <WeaponCard title='Secondary' weapon={weapons.secondary} {...cardProps} />
          )}
        </Col>
      </Row>

      <hr />
      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs='12' md='4'>
          <ListViewCard title='Equipment' values={equipmentData} {...cardProps} />
        </Col>
        <Col xs='12' md='4'>
          <ListViewCard title='Perks' values={perks} {...cardProps} />
        </Col>
        <Col xs='12' md='4'>
          <StreaksView streaks={streaks ?? ''} {...cardProps} />
        </Col>
      </Row>

      <Row id='button-row'>
        <Col className='text-center'>
          <Button variant='ww2' disabled={isGenerating} onClick={handleRegenerateClick}>
            <FontAwesomeIcon icon={faDice} className='me-2' />
            {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default WorldWarTwoLoadout;
