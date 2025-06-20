// --- React ---
import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

interface ViewProps {
  streaks: string;
  isGenerating: boolean;
  className?: string;
  headerClassName?: string;
}

const StreaksView: React.FC<ViewProps> = ({
  streaks,
  isGenerating,
  className,
  headerClassName,
}) => {
  return (
    <Card className={className}>
      <Card.Header as='h5' className={headerClassName}>
        Scorestreaks
      </Card.Header>
      <Card.Body
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '80px' }}>
        {isGenerating ? (
          <Placeholder as={Card.Text} animation='glow' className='mb-0 w-100 text-center'>
            <Placeholder xs={8} size='lg' />
          </Placeholder>
        ) : (
          <div className='text-center'>
            {streaks.split(',').map((streak, index) => (
              <Card.Text key={index} className='mb-1 fw-bold fs-6'>
                {streak.trim()}
              </Card.Text>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default StreaksView;
