'use client';

// --- React ---
import React from 'react';
import { Row, Col, Tabs, Tab, Button, Spinner } from 'react-bootstrap';
// --- Hooks ---
import { useCustomMatchGenerator } from '@/hooks/world-war-two/useCustomMatchGenerator';
// --- Components ---
import CustomSettingsGeneral from '@/components/generators/cod/custom-settings/CustomSettingsGeneral';
import CustomSettingsSection from '@/components/generators/cod/custom-settings/CustomSettingsSection';
// --- Font Awesome ---
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
// --- Data ---
import generalSettings from '@/json/world-war-two/custom-match/general.json';
import rulesSettings from '@/json/world-war-two/custom-match/rules.json';

const CustomMatch: React.FC = () => {
  const { isLoading, key, setKey, count, generateSettings } = useCustomMatchGenerator();

  if (isLoading) {
    return (
      <div className='text-center'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <Tabs activeKey={key} onSelect={(k) => setKey(k ?? 'general')} className='mb-3' justify>
        <Tab eventKey='general' title='General'>
          <CustomSettingsGeneral data={generalSettings} count={count} />
        </Tab>
        <Tab eventKey='rules' title='Rules'>
          <CustomSettingsSection data={rulesSettings} count={count} />
        </Tab>
      </Tabs>
      <Row id='button-row' className='mt-4'>
        <Col className='text-center'>
          <Button variant='ww2' onClick={generateSettings}>
            <FontAwesomeIcon icon={faSliders} className='me-2' />
            Generate Settings
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CustomMatch;
