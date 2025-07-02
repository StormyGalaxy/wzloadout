'use client';

// --- React ---
import { useEffect, useState, useRef } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
// --- Hooks ---
import { useDatabase } from '@/contexts/DatabaseContext';
import { useWarzoneGenerator } from '@/hooks/warzone/useWarzoneGenerator';
// --- Components ---
import CodClassName from '@/components/CodClassName';
import GeneratorSkeleton from '@/components/generators/views/skeletons/GeneratorSkeleton';
import WeaponCard from '@/components/generators/views/WeaponCard';
import ValueCardView from '@/components/generators/views/ValueCardView';
import ListViewCard from '@/components/generators/views/ListViewCard';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';
// --- DB ---
import { getDocumentByColumn } from '@silocitypages/data-access';
// --- Types ---
import type { sclSettings } from '@silocitypages/ui-core';
// --- Styles ---
import styles from '@/components/generators/views/ModernLoadout.module.css';

export default function WarzoneLoadout() {
  const { dbs, isReady } = useDatabase();
  const [settings, setSettings] = useState<sclSettings>({});
  const settingsFetched = useRef(false);

  const { data, isLoading, isGenerating, generateLoadout } = useWarzoneGenerator();

  // Fetch settings once and then trigger the initial loadout generation.
  useEffect(() => {
    if (isReady && !settingsFetched.current) {
      settingsFetched.current = true;

      async function fetchAndGenerate() {
        let loadedSettings: sclSettings = {};
        if (dbs.settings) {
          try {
            const wzSettings = await getDocumentByColumn(
              dbs.settings,
              'name',
              'warzone',
              'settings'
            );
            if (wzSettings && wzSettings.value !== '') {
              loadedSettings = JSON.parse(wzSettings.value as string);
              setSettings(loadedSettings);
            }
          } catch (err: unknown) {
            console.warn(err instanceof Error ? err.message : 'Failed to fetch settings.');
          }
        }
        // Generate the initial loadout with the loaded (or empty) settings.
        generateLoadout(loadedSettings, true);
      }
      fetchAndGenerate();
    }
  }, [dbs, isReady, generateLoadout]);

  const generatingClass = isGenerating ? styles.generating : '';

  const cardProps = {
    className: `${styles.card} ${generatingClass}`,
    headerClassName: styles.cardHeader,
    isGenerating,
  };

  if (isLoading) {
    return <GeneratorSkeleton />;
  }

  const { randClassName, perks, weapons, equipment, wildcard } = data;

  console.log('data', data);

  const equipmentData = [
    { title: 'Lethal', value: equipment.lethal?.name ?? '' },
    { title: 'Tactical', value: equipment.tactical?.name ?? '' },
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
        <Col xs={12} md={4} className='mb-3'>
          <ListViewCard title='Equipment' values={equipmentData} {...cardProps} />
        </Col>
        <Col xs={12} md={4} className='mb-3'>
          <ValueCardView title='Perks' value={perks} {...cardProps} />
        </Col>
        <Col xs={12} md={4} className='mb-3'>
          <ValueCardView title='Wildcard' value={wildcard?.name ?? ''} {...cardProps} />
        </Col>
      </Row>

      <Row className='justify-content-md-center'>
        <Col xs md='8' lg='6' className='text-center'>
          <Button
            variant='success'
            disabled={isGenerating}
            onClick={() => generateLoadout(settings)}>
            <FontAwesomeIcon icon={faDice} className='me-2' />
            {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
}
