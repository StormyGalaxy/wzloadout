'use client';

// --- React ---
import { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
// --- Hooks ---
import { useBlackOpsSixZombiesGenerator } from '@/hooks/black-ops/six/useBlackOpsSixZombiesGenerator';
// --- Components ---
import { CustomModal } from '@silocitypages/ui-core';
import CodClassName from '@/components/CodClassName';
import GeneratorSkeleton from '@/components/generators/views/skeletons/GeneratorSkeleton';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ValueCardView from '@/components/generators/views/ValueCardView';
import ListViewCard from '@/components/generators/views/ListViewCard';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faGears } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function BlackOpsSixZombiesLoadout() {
  const { data, settings, isLoading, isGenerating, generateLoadout, updateSettings } =
    useBlackOpsSixZombiesGenerator();
  const [showModal, setShowModal] = useState(false);

  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating,
  };

  const handleModal = () => setShowModal(!showModal);
  const handleSave = () => {
    handleModal();
  };

  if (isLoading) {
    return <GeneratorSkeleton />;
  }

  const { randClassName, weapons, equipment, gobblegum, zombieMap, augments } = data;
  const { rollMap, rollAugments, rollGobblegum } = settings;

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />

      <Row className='justify-content-md-center mb-4 text-center'>
        <Col xs={12} md={6} className='mb-3'>
          {weapons.primary && (
            <WeaponCard
              title='Primary'
              weapon={{ ...weapons.primary, attachments: weapons.primary.attachments }}
              {...cardProps}
            />
          )}
        </Col>
        <Col xs={12} md={6} className='mb-3'>
          {weapons.primary && (
            <ValueCardView title='Ammo Mod' value={weapons.primary.ammoMod} {...cardProps} />
          )}
        </Col>
      </Row>

      <hr />

      <Row className='justify-content-md-center mb-4 text-center'>
        <Col xs={6} md={3} className='mb-3'>
          <ValueCardView title='Melee' value={weapons.melee?.name} {...cardProps} />
        </Col>
        <Col xs={6} md={3} className='mb-3'>
          <ValueCardView
            title='Field Upgrade'
            value={equipment.fieldUpgrade?.name}
            {...cardProps}
          />
        </Col>
        <Col xs={6} md={3} className='mb-3'>
          <ValueCardView title='Tactical' value={equipment.tactical?.name} {...cardProps} />
        </Col>
        <Col xs={6} md={3} className='mb-3'>
          <ValueCardView title='Lethal' value={equipment.lethal?.name} {...cardProps} />
        </Col>
      </Row>

      {(rollGobblegum || rollMap) && <hr />}

      <Row className='justify-content-md-center mb-4 text-center'>
        {rollGobblegum && (
          <Col xs={12} md={6} className='mb-3'>
            <ValueCardView title='Gobblegum' value={gobblegum} {...cardProps} />
          </Col>
        )}
        {rollMap && (
          <Col xs={12} md={6} className='mb-3'>
            <ValueCardView title='Map' value={zombieMap.name} {...cardProps} />
          </Col>
        )}
      </Row>

      {rollAugments && augments && (
        <>
          <hr />
          <h3 className='text-center mb-4'>Augments</h3>
          <Row className='mb-4 text-center'>
            {Object.values(augments).map((item: any) => (
              <Col key={item?.name} xs={12} sm={6} md='4' className='mb-3'>
                <ListViewCard
                  title={item?.name}
                  values={[
                    { title: 'Major', value: item?.major },
                    { title: 'Minor', value: item?.minor },
                  ]}
                  {...cardProps}
                />
              </Col>
            ))}
          </Row>
        </>
      )}

      <Row className='justify-content-md-center'>
        <Col xs md='8' lg='6' className='text-center'>
          <div className='d-flex justify-content-center'>
            <Button
              variant='black-ops'
              disabled={isGenerating}
              onClick={handleModal}
              className='w-50 me-2'>
              <FontAwesomeIcon icon={faGears} className='me-2' />
              Settings
            </Button>
            <Button
              variant='black-ops'
              className='w-50'
              disabled={isGenerating}
              onClick={() => generateLoadout()}>
              <FontAwesomeIcon icon={faSkull} className='me-2' />
              {isGenerating ? 'Generating...' : 'Generate Loadout'}
            </Button>
          </div>
        </Col>
      </Row>

      <CustomModal
        variant='black-ops'
        show={showModal}
        onClose={handleModal}
        onSave={handleSave}
        title='Settings'>
        <Row>
          <Col>
            <Form.Label htmlFor='rollMap'>Roll Map:</Form.Label>
            <Form.Check
              type='switch'
              id='rollMap'
              onChange={(e) => updateSettings({ rollMap: e.target.checked })}
              checked={settings.rollMap}
            />
          </Col>
          <Col>
            <Form.Label htmlFor='rollGobblegum'>Roll Gobblegum:</Form.Label>
            <Form.Check
              type='switch'
              id='rollGobblegum'
              onChange={(e) => updateSettings({ rollGobblegum: e.target.checked })}
              checked={settings.rollGobblegum}
            />
          </Col>
          <Col>
            <Form.Label htmlFor='rollAugments'>Roll Augments:</Form.Label>
            <Form.Check
              type='switch'
              id='rollAugments'
              onChange={(e) => updateSettings({ rollAugments: e.target.checked })}
              checked={settings.rollAugments}
            />
          </Col>
        </Row>
      </CustomModal>
    </>
  );
}
