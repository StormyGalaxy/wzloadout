'use client';

// --- React ---
import { Row, Col, Button } from 'react-bootstrap';
// --- Components
import CodClassName from '@/components/CodClassName';
import GeneratorSkeleton from '@/components/generators/views/skeletons/GeneratorSkeleton';
import ListViewCard from '@/components/generators/views/ListViewCard';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ValueCardView from '@/components/generators/views/ValueCardView';
// --- Hooks ---
import { useModernWarfareRemasteredGenerator } from '@/hooks/modern-warfare/remastered/useModernWarfareRemasteredGenerator';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function ModernWarfareRemasteredLoadout() {
  const { data, isLoading, isGenerating, generateLoadout } = useModernWarfareRemasteredGenerator();
  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating,
  };

  const { randClassName, perkObj, weapons, equipment } = data;

  if (isLoading) {
    return <GeneratorSkeleton />;
  }

  const perkData = [
    { title: 'Perk 1', value: perkObj?.perk1 ?? 'None' },
    { title: 'Perk 2', value: perkObj?.perk2 ?? 'None' },
    { title: 'Perk 3', value: perkObj?.perk3 ?? 'None' },
  ];

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
        <Col xs={12} md={6} className='mb-3'>
          <ValueCardView
            title='Tactical'
            value={equipment?.tactical?.name ?? 'None'}
            {...cardProps}
          />
        </Col>
        <Col xs={12} md={6} className='mb-3'>
          <ListViewCard title='Perks' values={perkData} {...cardProps} />
        </Col>
      </Row>
      <Row id='button-row'>
        <Col className='text-center'>
          <Button variant='success' disabled={isGenerating} onClick={() => generateLoadout()}>
            <FontAwesomeIcon icon={faDice} className='me-2' />
            {isGenerating ? 'Generating...' : 'Generate New Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
}
