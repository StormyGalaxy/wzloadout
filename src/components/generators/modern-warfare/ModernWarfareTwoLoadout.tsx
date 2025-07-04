'use client';

// --- React ---
import { Container, Row, Col, Button } from 'react-bootstrap';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import SpinnerComponent from '@/components/common/SpinnerComponent';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ValueCardView from '@/components/generators/views/ValueCardView';
import ListViewCard from '@/components/generators/views/ListViewCard';
import StreaksView from '@/components/generators/views/StreaksView';
// --- Hooks ---
import { useModernWarfareTwoGenerator } from '@/hooks/modern-warfare/two/useModernWarfareTwoGenerator';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function ModernWarfareTwoLoadout() {
  const { data, isLoading, isGenerating, generateLoadout } = useModernWarfareTwoGenerator();
  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating,
  };

  const { randClassName, perks, streaks, weapons, equipment } = data;

  const equipmentData = [
    { title: 'Lethal', value: equipment.lethal?.name ?? '' },
    { title: 'Tactical', value: equipment.tactical?.name ?? '' },
    {
      title: 'Field Upgrade',
      value: equipment?.fieldUpgrade?.name ? equipment.fieldUpgrade.name : 'None',
    },
    {
      title: 'Field Upgrade 2',
      value: equipment?.fieldUpgrade2?.name ? equipment.fieldUpgrade2.name : 'None',
    },
  ];

  if (isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <Container>
      <CodClassName isGenerating={isGenerating} value={randClassName} />
      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={6} className='mb-3'>
          <WeaponCard title='Primary' weapon={weapons.primary} {...cardProps} />
        </Col>
        <Col xs={12} md={6} className='mb-3'>
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

      {/* --- Generate Button --- */}
      <Row className='mt-4'>
        <Col className='text-center'>
          <Button variant='mw2' disabled={isGenerating} onClick={() => generateLoadout()}>
            <FontAwesomeIcon icon={faDice} className='me-2' />
            {isGenerating ? 'Generating...' : 'Generate New Loadout'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
