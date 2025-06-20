// src/components/generators/views/SimpleLoadoutView.tsx
// --- React ---
import React from 'react';
import { Row, Col } from 'react-bootstrap';
// --- Components ---
import WeaponCard from './WeaponCard';
import EquipmentCard from './EquipmentCard';
import PerkGreedLoadoutView from './PerkGreedLoadoutView';
import WildcardView from './WildcardView';
import StreaksView from './StreaksView'; // Import the new component
// --- Types ---
import { Weapon, PerkObject } from '@/types/Generator';

interface SimpleLoadoutViewProps {
  primary?: Weapon;
  secondary?: Weapon;
  perks: PerkObject;
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
  return (
    <>
      {/* --- Weapon Cards --- */}
      <Row className='justify-content-md-center text-center mb-3'>
        <Col md={6} className='mb-3 mb-md-0'>
          {primary && <WeaponCard title='Primary' weapon={primary} isGenerating={isGenerating} />}
        </Col>
        <Col md={6}>
          {secondary && (
            <WeaponCard title='Secondary' weapon={secondary} isGenerating={isGenerating} />
          )}
        </Col>
      </Row>

      <hr />

      {/* --- Perk Cards --- */}
      <PerkGreedLoadoutView isGenerating={isGenerating} perks={perks} />

      <hr />

      {/* --- Other Info (Now clean and consistent) --- */}
      <Row className='justify-content-md-center text-center'>
        <Col md={4} sm={6} className='mb-3'>
          <EquipmentCard
            lethal={lethal ?? ''}
            tactical={tactical ?? ''}
            fieldUpgrade={fieldUpgrade ?? ''}
            isGenerating={isGenerating}
          />
        </Col>
        <Col md={4} sm={6} className='mb-3'>
          <WildcardView wildcard={wildcard ?? ''} isGenerating={isGenerating} />
        </Col>
        <Col md={4} sm={6} className='mb-3'>
          <StreaksView streaks={streaks ?? ''} isGenerating={isGenerating} />
        </Col>
      </Row>
    </>
  );
};

export default SimpleLoadoutView;
