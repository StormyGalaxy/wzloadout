// --- React ---
import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

interface ViewProps {
  wildcard: string;
  isGenerating: boolean;
}

const WildcardView: React.FC<ViewProps> = ({ wildcard, isGenerating }) => {
  if (!isGenerating && !wildcard) {
    return null;
  }

  return (
    <Card className='h-100'>
      <Card.Header>Wildcard</Card.Header>
      <Card.Body className='d-flex align-items-center justify-content-center'>
        {isGenerating ? (
          <Placeholder as={Card.Text} animation='glow' className='mb-0 w-100'>
            <Placeholder xs={6} />
          </Placeholder>
        ) : (
          <Card.Text className='mb-0'>{wildcard}</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default WildcardView;
