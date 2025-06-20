// --- React ---
import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

interface PerkCardProps {
  title: string;
  perks: string[];
  isGenerating: boolean;
}

const PerkCard: React.FC<PerkCardProps> = ({ title, perks, isGenerating }) => {
  if (!perks || perks.length === 0) return null;

  return (
    <Card className='mb-3'>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        {isGenerating ? (
          <Placeholder as='ul' animation='glow' className='list-unstyled mb-0'>
            <li>
              <Placeholder xs={5} />
            </li>
            <li>
              <Placeholder xs={4} />
            </li>
            <li>
              <Placeholder xs={6} />
            </li>
          </Placeholder>
        ) : (
          <ul className='list-unstyled mb-0'>
            {perks.map((perk, index) => (
              <li key={index}>{perk}</li>
            ))}
          </ul>
        )}
      </Card.Body>
    </Card>
  );
};

export default PerkCard;
