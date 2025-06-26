// --- React ---
import React from 'react';
import { Row, Col } from 'react-bootstrap';
// --- Components ---
import WeaponCard from './WeaponCard';
import ListViewCard from './ListViewCard';
import PerkGreedLoadoutView from './PerkGreedLoadoutView';
import ValueCardView from './ValueCardView';
import StreaksView from './StreaksView';
// --- Types ---
import { Weapon, PerkObject } from '@/types/Generator';
// --- Styles ---
import styles from './ModernLoadout.module.css';

interface SimpleLoadoutViewProps {
  primary?: Weapon;
  secondary?: Weapon;
  perks: PerkObject | null;
  lethal?: string;
  tactical?: string;
  fieldUpgrade?: string;
  wildcard?: string;
  streaks?: string;
  isGenerating: boolean;
}

const SimpleLoadoutView: React.FC<SimpleLoadoutViewProps> = ({
  primary,
  secondary,
  perks,
  lethal,
  tactical,
  fieldUpgrade,
  wildcard,
  streaks,
  isGenerating,
}) => {
  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating: isGenerating,
  };

  const equipmentData = [
    { title: 'Lethal', value: lethal ?? '' },
    { title: 'Tactical', value: tactical ?? '' },
    { title: 'Field Upgrade', value: fieldUpgrade ?? '' },
  ];

  return (
    <>
      {/* --- Weapon Cards --- */}
      <Row className='justify-content-md-center text-center mb-4'>
        <Col md={6} className='mb-4 mb-md-0'>
          {primary && <WeaponCard title='Primary' weapon={primary} {...cardProps} />}
        </Col>
        <Col md={6}>
          {secondary && <WeaponCard title='Secondary' weapon={secondary} {...cardProps} />}
        </Col>
      </Row>

      {/* --- Perk Cards --- */}
      {/* Assuming PerkGreedLoadoutView can also accept these props to style its internal cards */}
      {perks && <PerkGreedLoadoutView perks={perks} {...cardProps} />}

      <hr className='my-4' />

      {/* --- Other Info (Now clean and consistent) --- */}
      <Row className='justify-content-md-center text-center'>
        <Col md={4} sm={6} className='mb-4'>
          <ListViewCard title='Equipment' values={equipmentData} {...cardProps} />
        </Col>
        <Col md={4} sm={6} className='mb-4'>
          <ValueCardView value={wildcard ?? ''} title='Wildcard' {...cardProps} />
        </Col>
        <Col md={4} sm={6} className='mb-4'>
          <StreaksView streaks={streaks ?? ''} {...cardProps} />
        </Col>
      </Row>
    </>
  );
};

export default SimpleLoadoutView;
