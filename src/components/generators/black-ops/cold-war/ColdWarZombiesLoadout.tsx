'use client';

import { Row, Col, Button } from 'react-bootstrap';
import SimpleGeneratorView from '@/components/generators/cod/SimpleGeneratorView';
import CodClassName from '@/components/CodClassName';
import { useColdWarZombiesLoadout } from '@/hooks/black-ops/cold-war/useColdWarZombiesLoadout';

export default function ColdWarZombiesLoadout() {
  const { isLoading, isGenerating, data, regenerateLoadout } = useColdWarZombiesLoadout();

  const { randClassName, weapons, field_upgrade, zombieMap } = data;

  if (isLoading) {
    return <div className='text-center'>Loading...</div>;
  }

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />
      <Row className='justify-content-md-center mb-4'>
        <Col xs md='8' lg='6' className='text-center'>
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Primary'
            value={weapons.primary.name}
          />
          <br />
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Primary Attachments'
            value={weapons.primary.no_attach ? 'No Attachments' : weapons.primary.attachments}
          />
        </Col>
      </Row>
      <hr />
      <Row className='justify-content-md-center mb-4'>
        <Col xs='12' md='4' lg='3' className='text-center mb-2'>
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Field Upgrade'
            value={field_upgrade}
          />
        </Col>
        <Col xs='12' md='4' lg='3' className='text-center mb-2'>
          <SimpleGeneratorView isGenerating={isGenerating} title='Mode' value={zombieMap.mode} />
        </Col>
        <Col xs='12' md='4' lg='3' className='text-center mb-2'>
          <SimpleGeneratorView isGenerating={isGenerating} title='Map' value={zombieMap.name} />
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col xs md='8' lg='6' className='text-center'>
          <Button
            variant='danger'
            disabled={isGenerating}
            onClick={isGenerating ? undefined : regenerateLoadout}>
            {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
}
