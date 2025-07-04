'use client';

// --- React ---
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useModernWarfareThreeZombiesGenerator } from '@/hooks/modern-warfare/three/useModernWarfareThreeZombiesGenerator';
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

export default function ModernWarfareThreeZombiesLoadout() {
  const { data, isLoading, isGenerating, generateLoadout } =
    useModernWarfareThreeZombiesGenerator();
  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating,
  };

  if (isLoading) {
    return <SpinnerComponent />;
  }

  const { randClassName, weapons, equipment } = data;

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={6} className='mb-3'>
          {weapons.primary && (
            <WeaponCard title='Primary' weapon={weapons.primary} {...cardProps} />
          )}
        </Col>
        <Col xs={12} md={6} className='mb-3'>
          {weapons.secondary && (
            <WeaponCard title='Secondary' weapon={weapons.secondary} {...cardProps} />
          )}
        </Col>
      </Row>
      <hr />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={4} className='mb-3'>
          <ValueCardView title='Lethal' value={equipment.lethal?.name ?? ''} {...cardProps} />
        </Col>
        <Col xs={12} md={4} className='mb-3'>
          <ValueCardView title='Tactical' value={equipment.tactical?.name ?? ''} {...cardProps} />
        </Col>
        <Col xs={12} md={4} className='mb-3'>
          <ValueCardView title='Perks' value={equipment.fieldUpgrade?.name ?? ''} {...cardProps} />
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
