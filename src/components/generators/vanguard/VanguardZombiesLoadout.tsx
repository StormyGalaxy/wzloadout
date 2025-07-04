'use client';

// --- React ---
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useVanguardZombiesGenerator } from '@/hooks/vanguard/useVanguardZombiesGenerator';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import SpinnerComponent from '@/components/common/SpinnerComponent';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ValueCardView from '@/components/generators/views/ValueCardView';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';
// --- Types ---
import type { Weapon } from '@/types/Generator';

export default function VanguardZombiesLoadout() {
  const { data, isLoading, isGenerating, generateLoadout } = useVanguardZombiesGenerator();
  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating,
  };

  if (isLoading) {
    return <SpinnerComponent />;
  }

  const { randClassName, weapons, artifact, zombieMap } = data;

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={6} className='mb-3'>
          <WeaponCard title='Primary' weapon={weapons?.primary ?? ({} as Weapon)} {...cardProps} />
        </Col>
      </Row>
      <hr />
      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={6} className='mb-3'>
          <ValueCardView title='Artifact' value={artifact?.name ?? ''} {...cardProps} />
        </Col>
        <Col xs={12} md={6} className='mb-3'>
          <ValueCardView title='Map' value={zombieMap.name} {...cardProps} />
        </Col>
      </Row>

      <Row className='justify-content-md-center'>
        <Col xs md='8' lg='6' className='text-center'>
          <Button variant='danger' disabled={isGenerating} onClick={() => generateLoadout()}>
            <FontAwesomeIcon icon={faSkull} className='me-2' />
            {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
}
