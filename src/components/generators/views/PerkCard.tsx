// PerkCard.tsx

// --- React ---
import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

interface PerkCardProps {
  title: string;
  perks: string[];
  isGenerating: boolean;
  cardClassName?: string;
  headerClassName?: string;
}

const PerkCard: React.FC<PerkCardProps> = ({
  title,
  perks,
  isGenerating,
  cardClassName,
  headerClassName,
}) => {
  if (!perks || perks.length === 0) {
    return null;
  }

  return (
    // Apply the passed-in class names here
    <Card className={cardClassName}>
      <Card.Header as='h5' className={headerClassName}>
        {title}
      </Card.Header>
      <Card.Body>
        {isGenerating ? (
          <Placeholder as='div' animation='glow' className='mb-0'>
            <Placeholder xs={7} size='lg' className='d-block mb-2' />
            <Placeholder xs={6} size='lg' className='d-block mb-2' />
            <Placeholder xs={8} size='lg' className='d-block mb-0' />
          </Placeholder>
        ) : (
          <ul className='list-unstyled mb-0'>
            {perks.map((perk, index) => (
              // Add styling for better readability
              <li key={index} className='fw-bold fs-6 mb-1'>
                {perk}
              </li>
            ))}
          </ul>
        )}
      </Card.Body>
    </Card>
  );
};

export default PerkCard;
