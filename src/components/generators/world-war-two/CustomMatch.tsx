'use client';

import { useState, useEffect } from 'react';
import { Row, Col, Tabs, Tab, Button, Spinner } from 'react-bootstrap';
// --- Components ---
import CustomSettingsGeneral from '@/components/generators/cod/custom-settings/CustomSettingsGeneral';
import CustomSettingsSection from '@/components/generators/cod/custom-settings/CustomSettingsSection';
// --- Data ---
import generalSettings from '@/json/world-war-two/custom-match/general.json';
import rulesSettings from '@/json/world-war-two/custom-match/rules.json';

export default function CustomMatch() {
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState<string>('general');
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleClick = async () => {
    setIsLoading(true);
    setCount(count + 1);
    setKey('general');

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

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
          <Tabs activeKey={key} onSelect={(k) => setKey(k ?? 'general')} className='mb-3'>
            <Tab eventKey='general' title='General'>
              <CustomSettingsGeneral data={generalSettings} count={count} />
            </Tab>
            <Tab eventKey='rules' title='Rules'>
              <CustomSettingsSection data={rulesSettings} count={count} />
            </Tab>
          </Tabs>
          <Row id='button-row'>
            <Col className='text-center'>
              <Button variant='ww2' href='#' onClick={handleClick}>
                Generate Settings
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
