'use client';

// --- React ---
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useColdWarZombiesLoadout } from '@/hooks/black-ops/cold-war/useColdWarZombiesLoadout';
// --- Helpers ---
import { scrollToTop } from '@/helpers/scrollToTop';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import GeneratorSkeleton from '@/components/generators/views/skeletons/GeneratorSkeleton';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ValueCardView from '@/components/generators/views/ValueCardView';
import ListViewCard from '@/components/generators/views/ListViewCard';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function ColdWarZombiesLoadout() {
  const { isLoading, isGenerating, data, generateLoadout } = useColdWarZombiesLoadout();
  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating: isGenerating,
  };

  const handleRegenerateClick = () => {
    scrollToTop();
    generateLoadout(false);
  };

  if (isLoading) {
    // TODO: This should be updated!
    return <GeneratorSkeleton />;
  }

  const { randClassName, weapons, field_upgrade, zombieMap } = data;

  const mapData = [
    { title: 'Map', value: zombieMap.name ?? '' },
    { title: 'Mode', value: zombieMap.mode ?? '' },
  ];

  if (isLoading) {
    return <div className='text-center'>Loading...</div>;
  }

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />
      <Row className='justify-content-md-center mb-4'>
        <Col xs md='8' lg='6' className='text-center'>
          {weapons.primary && (
            <WeaponCard title='Primary' weapon={weapons.primary} {...cardProps} />
          )}
        </Col>
      </Row>
      <hr />
      <Row className='justify-content-md-center mb-4'>
        <Col xs='12' md='6' className='text-center mb-2'>
          <ValueCardView value={field_upgrade ?? ''} title='Field Upgrade' {...cardProps} />
        </Col>
        <Col xs='12' md='6' className='text-center mb-2'>
          <ListViewCard title='Match Details' values={mapData} {...cardProps} />
        </Col>
      </Row>

      {/* --- Generate Button --- */}
      <Row className='mt-4'>
        <Col className='text-center'>
          <Button
            variant='danger'
            size='lg'
            disabled={isGenerating}
            onClick={handleRegenerateClick}
            className={styles.generateButton}>
            <FontAwesomeIcon icon={faSkull} className='me-2' />
            {isGenerating ? 'Generating...' : 'Generate New Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
}
