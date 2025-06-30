'use client';

// --- React ---
import { useMemo } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useWorldAtWarGenerator } from '@/hooks/world-at-war/useWorldAtWarGenerator';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import GeneratorSkeleton from '@/components/generators/views/skeletons/GeneratorSkeleton';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ValueCardView from '@/components/generators/views/ValueCardView';
import ListViewCard from '@/components/generators/views/ListViewCard';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

const lethalMap: { [key: string]: string } = {
  '2x Satchel Charge': 'Satchel Charge x2',
  '2x Bouncing Betty': 'Bouncing Betty x2',
};

export default function WorldAtWarLoadout() {
  const { data, isLoading, isGenerating, generateLoadout } = useWorldAtWarGenerator();

  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating,
  };

  const equipmentValues = useMemo(() => {
    const lethalName =
      lethalMap[data.perkObj?.perk1 ?? ''] ||
      (data.perkObj?.perk1 === '2x Primary Grenades'
        ? `${data.equipment?.lethal?.name} x2`
        : data.equipment?.lethal?.name);

    const tacticalName =
      data.perkObj?.perk1 === '3x Special Grenades' ? 'Smoke x3' : data.equipment?.tactical?.name;

    return [
      { title: 'Primary Grenade', value: lethalName || 'None' },
      { title: 'Special Grenade', value: tacticalName || 'None' },
    ];
  }, [data.perkObj, data.equipment]);

  if (isLoading) {
    return <GeneratorSkeleton />;
  }

  const { randClassName, perkObj, weapons } = data;

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={6} className='mb-3'>
          <WeaponCard title='Primary' weapon={weapons.primary} {...cardProps} />
        </Col>
        <Col xs={12} md={6} className='mb-3'>
          <ValueCardView title='Sidearm' value={weapons.secondary?.name} {...cardProps} />
        </Col>
      </Row>

      <hr />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={6} lg={4} className='mb-3'>
          <ListViewCard
            title='Perks'
            values={[
              { title: 'Perk 1', value: perkObj?.perk1 || 'None' },
              { title: 'Perk 2', value: perkObj?.perk2 || 'None' },
              { title: 'Perk 3', value: perkObj?.perk3 || 'None' },
            ]}
            {...cardProps}
          />
        </Col>
        <Col xs={12} md={6} lg={4} className='mb-3'>
          <ListViewCard title='Equipment' values={equipmentValues} {...cardProps} />
        </Col>
        <Col xs={12} md={6} lg={4} className='mb-3'>
          <ValueCardView
            title='Vehicle Perk'
            value={perkObj?.vehiclePerk || 'None'}
            {...cardProps}
          />
        </Col>
      </Row>

      <hr />

      <Row className='justify-content-md-center'>
        <Col xs md='8' lg='6' className='text-center'>
          <Button variant='secondary' disabled={isGenerating} onClick={() => generateLoadout()}>
            <FontAwesomeIcon icon={faDice} className='me-2' />
            {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
}
