// --- React ---
import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

interface EquipmentCardProps {
  lethal: string;
  tactical: string;
  fieldUpgrade?: string;
  isGenerating: boolean;
  className?: string;
  headerClassName?: string;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({
  lethal,
  tactical,
  fieldUpgrade,
  isGenerating,
  className,
  headerClassName,
}) => {
  return (
    <Card className={className}>
      <Card.Header as='h5' className={headerClassName}>
        Equipment
      </Card.Header>
      <Card.Body style={{ minHeight: '120px' }}>
        {isGenerating ? (
          <>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder as={Card.Text} animation='glow'>
              <Placeholder xs={7} />
            </Placeholder>
            {fieldUpgrade !== undefined && (
              <Placeholder as={Card.Text} animation='glow'>
                <Placeholder xs={9} />
              </Placeholder>
            )}
          </>
        ) : (
          <>
            <p className='mb-2'>
              <span className='text-muted'>Lethal:</span>
              <br />
              <strong className='fs-6'>{lethal}</strong>
            </p>
            <p className='mb-2'>
              <span className='text-muted'>Tactical:</span>
              <br />
              <strong className='fs-6'>{tactical}</strong>
            </p>
            {fieldUpgrade && (
              <p className='mb-0'>
                <span className='text-muted'>Field Upgrade:</span>
                <br />
                <strong className='fs-6'>{fieldUpgrade}</strong>
              </p>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default EquipmentCard;
