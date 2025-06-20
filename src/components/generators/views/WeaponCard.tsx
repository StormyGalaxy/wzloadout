// --- React ---
import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';
// --- Types ---
import { Weapon } from '@/types/Generator';

interface WeaponCardProps {
  title: string;
  weapon: Weapon;
  isGenerating: boolean;
}

const WeaponCard: React.FC<WeaponCardProps> = ({ title, weapon, isGenerating }) => {
  if (!weapon) return null;

  return (
    <Card className='mb-3 h-100'>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        {isGenerating ? (
          <Placeholder as={Card.Title} animation='glow'>
            <Placeholder xs={7} />
          </Placeholder>
        ) : (
          <Card.Title>{weapon.name}</Card.Title>
        )}
        {isGenerating ? (
          <Placeholder as={Card.Text} animation='glow'>
            <Placeholder xs={10} /> <Placeholder xs={8} />
          </Placeholder>
        ) : (
          <Card.Text
            dangerouslySetInnerHTML={{
              __html: weapon.no_attach ? 'No Attachments' : (weapon.attachments ?? ''),
            }}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default WeaponCard;
