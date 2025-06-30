'use client';

// --- React ---
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useWorldWarTwoZombiesGenerator } from '@/hooks/world-war-two/useWorldWarTwoZombiesGenerator';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import GeneratorSkeleton from '@/components/generators/views/skeletons/GeneratorSkeleton';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ValueCardView from '@/components/generators/views/ValueCardView';
import ListViewCard from '@/components/generators/views/ListViewCard';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

const WorldWarTwoZombiesLoadout: React.FC = () => {
  const { data, isLoading, isGenerating, generateLoadout } = useWorldWarTwoZombiesGenerator();
  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating: isGenerating,
  };

  if (isLoading) {
    return <GeneratorSkeleton />;
  }

  const { randClassName, weapons, lethal, special, character, zombieMap, mods } = data;

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />
      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs='12' md='4'>
          {character && <ValueCardView title='Character' value={character} {...cardProps} />}
        </Col>
        <Col xs='12' md='4'>
          {weapons.primary && (
            <WeaponCard title='Primary' weapon={weapons.primary} {...cardProps} />
          )}
        </Col>
        <Col xs='12' md='4'>
          {special && <ValueCardView title='Special' value={special} {...cardProps} />}
        </Col>
      </Row>
      <hr />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs='12' md='4'>
          {mods && <ListViewCard title='Mods' values={mods} {...cardProps} />}
        </Col>
        <Col xs='12' md='4'>
          {lethal && <ValueCardView title='Lethal' value={lethal} {...cardProps} />}
        </Col>
        <Col xs='12' md='4'>
          {zombieMap.name && <ValueCardView title='Map' value={zombieMap.name} {...cardProps} />}
        </Col>
      </Row>

      <Row className='justify-content-md-center'>
        <Col xs md='8' lg='6' className='text-center'>
          <Button variant='ww2' disabled={isGenerating} onClick={() => generateLoadout()}>
            <FontAwesomeIcon icon={faSkull} className='me-2' />
            {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default WorldWarTwoZombiesLoadout;
