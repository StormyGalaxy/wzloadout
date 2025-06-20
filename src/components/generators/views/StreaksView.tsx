// --- React ---
import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

interface ViewProps {
  streaks: string;
  isGenerating: boolean;
}

const StreaksView: React.FC<ViewProps> = ({ streaks, isGenerating }) => {
  if (!isGenerating && !streaks) {
    return null;
  }

  return (
    <Card className='h-100'>
      <Card.Header>Streaks</Card.Header>
      <Card.Body className='d-flex align-items-center justify-content-center'>
        {isGenerating ? (
          <Placeholder as={Card.Text} animation='glow' className='mb-0 w-100'>
            <Placeholder xs={6} />
          </Placeholder>
        ) : (
          <Card.Text className='mb-0'>{streaks}</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default StreaksView;
