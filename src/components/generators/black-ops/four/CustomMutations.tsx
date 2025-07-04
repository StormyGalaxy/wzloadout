// src/components/generators/black-ops/four/CustomMutations.tsx
'use client';

import { Row, Col, Tabs, Tab, Button, Spinner } from 'react-bootstrap';
// --- Hooks ---
import { useCustomMutations } from '@/hooks/black-ops/four/useCustomMutations';
// --- Components ---
import CustomSettingsGeneral from '@/components/generators/cod/custom-settings/CustomSettingsGeneral';
import CustomSettingsSection from '@/components/generators/cod/custom-settings/CustomSettingsSection';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVial } from '@fortawesome/free-solid-svg-icons';
// --- Data ---
import generalSettings from '@/data/black-ops/four/zombies/custom-mutations/general.json';
import systemsSettings from '@/data/black-ops/four/zombies/custom-mutations/systems.json';
import weaponSettings from '@/data/black-ops/four/zombies/custom-mutations/weapons.json';
import enemiesSettings from '@/data/black-ops/four/zombies/custom-mutations/enemies.json';
import playerSettings from '@/data/black-ops/four/zombies/custom-mutations/player.json';

export default function CustomMutations() {
  const { isLoading, key, setKey, count, generateSettings } = useCustomMutations();

  return (
    <>
      {isLoading ? (
        <div className='text-center'>
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Tabs activeKey={key} onSelect={(k) => setKey(k ?? 'general')} className='mb-3' justify>
            <Tab eventKey='general' title='General'>
              <CustomSettingsGeneral data={generalSettings} count={count} />
            </Tab>
            <Tab eventKey='systems' title='Systems'>
              <CustomSettingsSection data={systemsSettings} count={count} />
            </Tab>
            <Tab eventKey='weapons' title='Weapons'>
              <CustomSettingsSection data={weaponSettings} count={count} />
            </Tab>
            <Tab eventKey='enemies' title='Enemies'>
              <CustomSettingsSection data={enemiesSettings} count={count} />
            </Tab>
            <Tab eventKey='player' title='Player'>
              <CustomSettingsSection data={playerSettings} count={count} />
            </Tab>
          </Tabs>
          <Row id='button-row'>
            <Col className='text-center'>
              <Button variant='black-ops' onClick={generateSettings}>
                <FontAwesomeIcon icon={faVial} className='me-2' />
                Generate Settings
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
