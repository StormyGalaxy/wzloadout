'use client';

// --- React ---
import React, { useState, useMemo } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
// --- Hooks ---
import { useBlackOpsFourZombiesGenerator } from '@/hooks/black-ops/four/useBlackOpsFourZombiesGenerator';
// --- Components ---
import SimpleGeneratorView from '@/components/generators/cod/SimpleGeneratorView';
import CodClassName from '@/components/CodClassName';
import GeneratorSkeleton from '@/components/generators/views/skeletons/GeneratorSkeleton';
import ValueCardView from '@/components/generators/views/ValueCardView';
import ListViewCard from '@/components/generators/views/ListViewCard';
import { CustomModal } from '@silocitypages/ui-core';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faGears } from '@fortawesome/free-solid-svg-icons';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function BlackOpsFourZombiesLoadout() {
  const { data, settings, isLoading, isGenerating, generateLoadout, updateSettings } =
    useBlackOpsFourZombiesGenerator();
  const [showModal, setShowModal] = useState(false);

  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating: isGenerating,
  };

  const handleModal = () => setShowModal(!showModal);
  const handleSave = () => {
    // Settings are already saved onChange, so just close the modal
    handleModal();
  };

  const { randClassName, story, weapons, equipment, elixers, talisman, zombieMap, zombiePerks } =
    data;
  const { rollMap, rollElixers, rollTalisman } = settings;

  const perks = useMemo(
    () => [
      { title: story.key === 'chaos_story' ? 'DANU' : 'BREW', value: zombiePerks[0] },
      { title: story.key === 'chaos_story' ? 'RA' : 'COLA', value: zombiePerks[1] },
      { title: story.key === 'chaos_story' ? 'ZEUS' : 'SODA', value: zombiePerks[2] },
      { title: story.key === 'chaos_story' ? 'ODIN' : 'TONIC', value: zombiePerks[3] },
    ],
    [story.key, zombiePerks]
  );

  const matchDetails = useMemo(() => {
    if (!rollMap) return [];

    const details = [
      { title: 'Mode', value: zombieMap?.mode ?? '' },
      { title: 'Map', value: zombieMap?.name ?? '' },
    ];

    if (zombieMap?.mode === 'Classic') {
      details.push({ title: 'Difficulty', value: zombieMap?.difficulty ?? '' });
    }

    return details;
  }, [rollMap, zombieMap]);

  if (isLoading) {
    return <GeneratorSkeleton />;
  }

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />
      <Row className='justify-content-md-center text-center mb-4'>
        <Col md={6} lg={3} className='mb-4 mb-md-0'>
          <ValueCardView title='Story' value={story.display} {...cardProps} />
        </Col>
        <Col md={6} lg={3} className='mb-4 mb-md-0'>
          <ValueCardView title='Special Weapon' value={weapons.special.name} {...cardProps} />
        </Col>
        <Col md={6} lg={3} className='mb-4 mb-md-0'>
          <ValueCardView title='Equipment' value={equipment.lethal.name} {...cardProps} />
        </Col>
        <Col md={6} lg={3} className='mb-4 mb-md-0'>
          <ValueCardView title='Starting Weapon' value={weapons.starting.name} {...cardProps} />
        </Col>
      </Row>
      <hr />

      <Row className='justify-content-md-center text-center mb-4'>
        <Col md={6} lg={3} className='mb-4 mb-md-0'>
          <ListViewCard title='Perks' values={perks} {...cardProps} />
        </Col>
        {rollMap && (
          <Col md={6} lg={3} className='mb-4 mb-md-0'>
            <ListViewCard title='Match Details' values={matchDetails} {...cardProps} />
          </Col>
        )}
        {rollTalisman && (
          <Col md={6} lg={3} className='mb-4 mb-md-0'>
            <ValueCardView title='Talisman' value={talisman} {...cardProps} />
          </Col>
        )}
        {rollElixers && (
          <Col md={6} lg={3} className='mb-4 mb-md-0'>
            <ValueCardView title='Elixers' value={elixers} {...cardProps} />
          </Col>
        )}
      </Row>

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
              disabled={isGenerating}
              onClick={() => generateLoadout()}
              className='w-50 me-2'>
              <FontAwesomeIcon icon={faSkull} className='me-2' />
              {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateSettings({ rollMap: e.target.checked })
              }
              checked={rollMap}
            />
          </Col>
          <Col>
            <Form.Label htmlFor='rollElixers'>Roll Elixers:</Form.Label>
            <Form.Check
              type='switch'
              id='rollElixers'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateSettings({ rollElixers: e.target.checked })
              }
              checked={rollElixers}
            />
          </Col>
          <Col>
            <Form.Label htmlFor='rollTalisman'>Roll Talisman:</Form.Label>
            <Form.Check
              type='switch'
              id='rollTalisman'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateSettings({ rollTalisman: e.target.checked })
              }
              checked={rollTalisman}
            />
          </Col>
        </Row>
      </CustomModal>
    </>
  );
}
