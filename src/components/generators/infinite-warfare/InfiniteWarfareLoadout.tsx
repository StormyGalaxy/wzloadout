'use client';

// --- React ---
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useInfiniteWarfareGenerator } from '@/hooks/infinite-warfare/useInfiniteWarfareGenerator';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import SpinnerComponent from '@/components/common/SpinnerComponent';
import ValueCardView from '@/components/generators/views/ValueCardView';
import ListViewCard from '@/components/generators/views/ListViewCard';
import StreaksView from '@/components/generators/views/StreaksView';
import PerkGreedLoadoutView from '@/components/generators/views/PerkGreedLoadoutView';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function InfiniteWarfareLoadout() {
  const { data, isLoading, isGenerating, generateLoadout } = useInfiniteWarfareGenerator();

  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating,
  };

  if (isLoading) {
    return <SpinnerComponent />;
  }

  const { randClassName, streaks, weapons, equipment, wildcards, combat_rig } = data;

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />

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
      {data?.perkObj && <PerkGreedLoadoutView perks={data.perkObj} {...cardProps} />}
      <hr />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={6} lg={3} className='mb-3'>
          <ListViewCard
            title='Equipment'
            values={[
              { title: 'Tactical', value: equipment.tactical?.name || 'None' },
              { title: 'Lethal', value: equipment.lethal?.name || 'None' },
            ]}
            {...cardProps}
          />
        </Col>
        <Col xs={12} md={6} lg={3} className='mb-3'>
          <ValueCardView title='Wildcards' value={wildcards || 'None'} {...cardProps} />
        </Col>
        <Col xs={12} md={6} lg={3} className='mb-3'>
          <ValueCardView title='Combat Rig' value={combat_rig ?? ''} {...cardProps} />
        </Col>
        <Col xs={12} md={6} lg={3} className='mb-3'>
          <StreaksView streaks={streaks} {...cardProps} />
        </Col>
      </Row>

      <hr />

      <Row className='justify-content-md-center'>
        <Col xs md='8' lg='6' className='text-center'>
          <Button
            variant='infinite-warfare'
            disabled={isGenerating}
            onClick={() => generateLoadout()}>
            <FontAwesomeIcon icon={faDice} className='me-2' />
            {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
}
