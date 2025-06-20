// --- React ---
import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

interface EquipmentCardProps {
  lethal: string;
  tactical: string;
  fieldUpgrade?: string;
  isGenerating: boolean;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({
  lethal,
  tactical,
  fieldUpgrade,
  isGenerating,
}) => {
  if (!isGenerating && !lethal && !tactical && !fieldUpgrade) {
    return null;
  }
  return (
    <Card className='mb-3'>
      <Card.Header>Equipment</Card.Header>
      <Card.Body>
        {isGenerating ? (
          <>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={5} />
            </Placeholder>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={6} />
            </Placeholder>
            {fieldUpgrade && (
              <Placeholder as={Card.Text} animation='glow'>
                <Placeholder xs={7} />
              </Placeholder>
            )}
          </>
        ) : (
          <>
            <Card.Text>
              <strong>Lethal:</strong> {lethal}
            </Card.Text>
            <Card.Text>
              <strong>Tactical:</strong> {tactical}
            </Card.Text>
            {fieldUpgrade && (
              <Card.Text>
                <strong>Field Upgrade:</strong> {fieldUpgrade}
              </Card.Text>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default EquipmentCard;
