'use client';

// --- React ---
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useVanguardGenerator } from '@/hooks/vanguard/useVanguardGenerator';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import GeneratorSkeleton from '@/components/generators/views/skeletons/GeneratorSkeleton';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ValueCardView from '@/components/generators/views/ValueCardView';
import ListViewCard from '@/components/generators/views/ListViewCard';
import StreaksView from '@/components/generators/views/StreaksView';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function VanguardLoadout() {
  const { data, isLoading, isGenerating, generateLoadout } = useVanguardGenerator();
  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating,
  };

  if (isLoading) {
    return <GeneratorSkeleton />;
  }

  const { randClassName, perks, streaks, weapons, equipment } = data;

  const equipmentData = [
    { title: 'Lethal', value: equipment.lethal?.name ?? '' },
    { title: 'Tactical', value: equipment.tactical?.name ?? '' },
    { title: 'Field Upgrade', value: equipment.fieldUpgrade?.name ?? '' },
  ];

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={6} lg={4} className='mb-3'>
          <WeaponCard title='Primary' weapon={weapons.primary} {...cardProps} />
        </Col>
        <Col xs={12} md={6} lg={4} className='mb-3'>
          <WeaponCard title='Secondary' weapon={weapons.secondary} {...cardProps} />
        </Col>
      </Row>
      <hr />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={4} className='mb-3'>
          <ListViewCard title='Equipment' values={equipmentData} {...cardProps} />
        </Col>
        <Col xs={12} md={4} className='mb-3'>
          <ValueCardView title='Perks' value={perks} {...cardProps} />
        </Col>
        <Col xs={12} md={4} className='mb-3'>
          <StreaksView streaks={streaks} {...cardProps} />
        </Col>
      </Row>

      <Row className='justify-content-md-center'>
        <Col xs md='8' lg='6' className='text-center'>
          <Button variant='danger' disabled={isGenerating} onClick={() => generateLoadout()}>
            <FontAwesomeIcon icon={faDice} className='me-2' />
            {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
}
