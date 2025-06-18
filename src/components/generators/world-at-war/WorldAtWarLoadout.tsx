'use client';

import { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import SimpleGeneratorView from '@/components/generators/cod/SimpleGeneratorView';
import CodClassName from '@/components/CodClassName';
//Helpers
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
//MWR Specific
import { fetchAttachments } from '@/helpers/generator/world-at-war/fetchAttachments';
import { fetchPerk } from '@/helpers/generator/world-at-war/fetchPerk';
//Utils
import { sendEvent } from '@/utils/gtag';
//json
import defaultData from '@/json/cod/default-generator-info.json';

export default function WorldAtWarLoadoutLoadout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(true);
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    fetchLoadoutData(setData);
    setIsGenerating(false);
    setIsLoading(false);
  }, []);

  const handleClick = async () => {
    setIsGenerating(true);

    setTimeout(() => {
      fetchLoadoutData(setData);
      setIsGenerating(false);
      scrollToTop();
    }, 1000);
  };

  const { randClassName, perkObj, weapons, equipment } = data;

  if (isLoading) {
    return <div className='text-center'>Loading...</div>;
  }

  return (
    <>
      <CodClassName isGenerating={isGenerating} value={randClassName} />
      <Row className='justify-content-md-center'>
        <Col sm className='text-center mb-3 mb-md-0'>
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Primary'
            value={weapons.primary.weapon.name}
          />
          <br />
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Primary Attachment'
            value={weapons.primary.weapon.no_attach ? 'No Attachment' : weapons.primary.attachments}
          />
        </Col>
        <Col sm className='text-center mb-3 mb-md-0'>
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Sidearm'
            value={weapons.secondary.weapon.name}
          />
        </Col>
      </Row>
      <hr />
      <Row className='justify-content-md-center mb-4'>
        <Col sm className='text-center mb-3 mb-md-0'>
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Primary Grenade'
            value={
              lethalMap[perkObj.perk1] ||
              (perkObj.perk1 === '2x Primary Grenades'
                ? `${equipment.lethal.name} x2`
                : equipment.lethal.name)
            }
          />
        </Col>
        <Col sm className='text-center mb-3 mb-md-0'>
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Special Grenade'
            value={perkObj.perk1 === '3x Special Grenades' ? 'Smoke x3' : equipment.tactical.name}
          />
        </Col>
      </Row>
      <hr />
      <Row className='justify-content-md-center mb-4'>
        <Col sm className='text-center mb-3 mb-md-0'>
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Perk 1'
            value={perkObj.perk1 ? perkObj.perk1 : 'None'}
          />
        </Col>
        <Col sm className='text-center mb-3 mb-md-0'>
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Perk 2'
            value={perkObj.perk2 ? perkObj.perk2 : 'None'}
          />
        </Col>
        <Col sm className='text-center mb-3 mb-md-0'>
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Perk 3'
            value={perkObj.perk3 ? perkObj.perk3 : 'None'}
          />
        </Col>
        <Col sm className='text-center mb-3 mb-md-0'>
          <SimpleGeneratorView
            isGenerating={isGenerating}
            title='Vehicle Perk'
            value={perkObj.vehiclePerk ? perkObj.vehiclePerk : 'None'}
          />
        </Col>
      </Row>
      <Row id='button-row'>
        <Col className='text-center'>
          <Button
            variant='secondary'
            disabled={isGenerating}
            onClick={isGenerating ? undefined : handleClick}>
            {isGenerating ? 'Generating Loadout...' : 'Generate Loadout'}
          </Button>
        </Col>
      </Row>
    </>
  );
}

const lethalMap = {
  '2x Satchel Charge': 'Satchel Charge x2',
  '2x Bouncing Betty': 'Bouncing Betty x2',
};

async function fetchLoadoutData(setData) {
  sendEvent('button_click', {
    button_id: 'waw_fetchLoadoutData',
    label: 'WorldAtWarLoadout',
    category: 'COD_Loadouts',
  });

  try {
    const game = 'world-at-war';
    const randClassName = fetchClassName();
    const perkObj = {
      perk1: fetchPerk('perk1'),
      perk2: fetchPerk('perk2'),
      perk3: fetchPerk('perk3'),
      vehiclePerk: fetchPerk('vehicle-perk'),
    };

    const equipment = {
      tactical: fetchEquipment('tactical', game),
      lethal: fetchEquipment('lethal', game),
    };

    const weapons = {
      primary: { weapon: fetchWeapon('primary', game), attachments: '' },
      secondary: { weapon: fetchWeapon('secondary', game), attachments: '' },
    };

    weapons.primary.attachments = implodeObject(fetchAttachments(weapons.primary.weapon, 1));

    if (perkObj.perk2 === 'Overkill') {
      weapons.secondary.weapon = fetchWeapon('primary', game, weapons.primary.weapon.name);
    }

    setData({ randClassName, perkObj, weapons, equipment });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unknown error occurred.');
    }
  }
}
