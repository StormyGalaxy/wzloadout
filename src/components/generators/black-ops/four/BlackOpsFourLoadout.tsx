'use client';

// --- React ---
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useBlackOpsFourGenerator } from '@/hooks/black-ops/four/useBlackOpsFourGenerator';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import SpinnerComponent from '@/components/common/SpinnerComponent';
import ListViewCard from '@/components/generators/views/ListViewCard';
import PerkGreedLoadoutView from '@/components/generators/views/PerkGreedLoadoutView';
import ValueCardView from '@/components/generators/views/ValueCardView';
import StreaksView from '@/components/generators/views/StreaksView';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function BlackOpsFourLoadout() {
  const { data, isLoading, isGenerating, generateLoadout } = useBlackOpsFourGenerator();
  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating: isGenerating,
  };

  const { randClassName, perkObj, streaks, weapons, equipment, wildcards, specialist } = data;

  if (isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />
      {/* --- Weapon Cards --- */}
      <Row className='justify-content-md-center text-center mb-4'>
        <Col md={6} className='mb-4 mb-md-0'>
          {weapons.primary && (
            <ListViewCard
              title='Primary'
              values={[
                { title: 'Weapon', value: weapons.primary.name ? weapons.primary.name : 'None' },
                { title: 'Optic', value: weapons.primary.optic ? weapons.primary.optic : 'None' },
                {
                  title: 'Attachments',
                  value: weapons.primary.attachments ? weapons.primary.attachments : 'None',
                },
              ]}
              {...cardProps}
            />
          )}
        </Col>
        <Col md={6} className='mb-4 mb-md-0'>
          {weapons.primary && (
            <ListViewCard
              title='Secondary'
              values={[
                {
                  title: 'Weapon',
                  value: weapons.secondary.name ? weapons.secondary.name : 'None',
                },
                {
                  title: 'Optic',
                  value: weapons.secondary.optic ? weapons.secondary.optic : 'None',
                },
                {
                  title: 'Attachments',
                  value: weapons.secondary.attachments ? weapons.secondary.attachments : 'None',
                },
              ]}
              {...cardProps}
            />
          )}
        </Col>
      </Row>
      <hr />

      {/* --- Perk Cards --- */}
      {perkObj && <PerkGreedLoadoutView perks={perkObj} {...cardProps} />}
      <hr />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col md={6} lg={3} className='mb-4 mb-md-0'>
          <ListViewCard
            title='Equipment'
            values={[
              { title: 'Gear', value: equipment.gear ? equipment.gear : 'None' },
              {
                title: 'Equipment',
                value: equipment.equipment
                  ? equipment.equipment
                  : `Special Issue (${specialist?.equipment})`,
              },
            ]}
            {...cardProps}
          />
        </Col>
        <Col md={6} lg={3} className='mb-4 mb-md-0'>
          <ValueCardView
            title='Specialist'
            value={specialist ? `${specialist?.name} - ${specialist?.equipment}` : 'None'}
            {...cardProps}
          />
        </Col>
        <Col md={6} lg={3} className='mb-4 mb-md-0'>
          <ValueCardView title='Wildcards' value={wildcards ? wildcards : 'None'} {...cardProps} />
        </Col>
        <Col md={6} lg={3} className='mb-4 mb-md-0'>
          <StreaksView streaks={streaks ?? ''} {...cardProps} />
        </Col>
      </Row>

      <Row id='button-row'>
        <Col className='text-center'>
          <Button variant='black-ops' disabled={isGenerating} onClick={() => generateLoadout()}>
            <FontAwesomeIcon icon={faDice} className='me-2' />
            {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
}
