'use client';

// --- React ---
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useBlackOpsSixGenerator } from '@/hooks/black-ops/six/useBlackOpsSixGenerator';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import SpinnerComponent from '@/components/common/SpinnerComponent';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ValueCardView from '@/components/generators/views/ValueCardView';
import ListViewCard from '@/components/generators/views/ListViewCard';
import StreaksView from '@/components/generators/views/StreaksView';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function BlackOpsSixLoadout() {
  const { data, isLoading, isGenerating, generateLoadout } = useBlackOpsSixGenerator();
  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating,
  };

  if (isLoading) {
    return <SpinnerComponent />;
  }

  const { randClassName, perks, streaks, weapons, equipment, wildcard } = data;

  const equipmentData = [
    { title: 'Lethal', value: equipment.lethal?.name ?? '' },
    { title: 'Tactical', value: equipment.tactical?.name ?? '' },
    { title: 'Field Upgrade', value: equipment.fieldUpgrade?.name ?? '' },
  ];

  if (wildcard?.name === 'Prepper' && equipment?.fieldUpgrade2?.name) {
    equipmentData.push({ title: 'Field Upgrade 2', value: equipment.fieldUpgrade2?.name ?? '' });
  }

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={4} className='mb-3'>
          <WeaponCard title='Primary' weapon={weapons.primary} {...cardProps} />
        </Col>
        <Col xs={12} md={4} className='mb-3'>
          <WeaponCard title='Secondary' weapon={weapons.secondary} {...cardProps} />
        </Col>
        <Col xs={12} md={4} className='mb-3'>
          <ValueCardView title='Melee' value={weapons?.melee?.name ?? ''} {...cardProps} />
        </Col>
      </Row>
      <hr />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={6} lg={3} className='mb-3'>
          <ListViewCard title='Equipment' values={equipmentData} {...cardProps} />
        </Col>
        <Col xs={12} md={6} lg={3} className='mb-3'>
          <ValueCardView title='Perks' value={perks} {...cardProps} />
        </Col>
        <Col xs={12} md={6} lg={3} className='mb-3'>
          <ValueCardView title='Wildcard' value={wildcard?.name ?? ''} {...cardProps} />
        </Col>
        <Col xs={12} md={6} lg={3} className='mb-3'>
          <StreaksView streaks={streaks} {...cardProps} />
        </Col>
      </Row>

      <Row className='justify-content-md-center'>
        <Col xs md='8' lg='6' className='text-center'>
          <Button variant='black-ops' disabled={isGenerating} onClick={() => generateLoadout()}>
            <FontAwesomeIcon icon={faDice} className='me-2' />
            {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
}
