'use client';

// --- React ---
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useBlackOpsThreeGenerator } from '@/hooks/black-ops/three/useBlackOpsThreeGenerator';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import SpinnerComponent from '@/components/common/SpinnerComponent';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ValueCardView from '@/components/generators/views/ValueCardView';
import ListViewCard from '@/components/generators/views/ListViewCard';
import StreaksView from '@/components/generators/views/StreaksView';
import PerkGreedLoadoutView from '@/components/generators/views/PerkGreedLoadoutView';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// --- Types ---
import { Weapon } from '@/types/Generator';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function BlackOpsThreeLoadout() {
  const { data, isLoading, isGenerating, generateLoadout } = useBlackOpsThreeGenerator();

  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating,
  };

  const formatWeapon = (weaponData: Weapon): Weapon => {
    if (!weaponData?.name) return { name: 'None', type: '', game: '' };
    const attachments = [weaponData.optic, weaponData.attachments].filter(Boolean).join(', ');
    return { ...weaponData, attachments: attachments || 'None' };
  };

  if (isLoading) {
    return <SpinnerComponent />;
  }

  const { randClassName, streaks, weapons, equipment, wildcards, specialist } = data;

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col xs={12} md={6} className='mb-3'>
          <WeaponCard title='Primary' weapon={formatWeapon(weapons.primary)} {...cardProps} />
        </Col>
        <Col xs={12} md={6} className='mb-3'>
          <WeaponCard title='Secondary' weapon={formatWeapon(weapons.secondary)} {...cardProps} />
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
          <ValueCardView title='Specialist' value={specialist.name} {...cardProps} />
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
