// --- React ---
import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

interface ViewProps {
  wildcard: string;
  isGenerating: boolean;
  className?: string;
  headerClassName?: string;
}

const WildcardView: React.FC<ViewProps> = ({
  wildcard,
  isGenerating,
  className,
  headerClassName,
}) => {
  return (
    <Card className={className}>
      <Card.Header as='h5' className={headerClassName}>
        Wildcard
      </Card.Header>
      <Card.Body
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '80px' }}>
        {isGenerating ? (
          <Placeholder as={Card.Text} animation='glow' className='mb-0 w-100 text-center'>
            <Placeholder xs={7} size='lg' />
          </Placeholder>
        ) : (
          <Card.Text className='mb-0 fw-bold fs-5 text-center'>{wildcard}</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default WildcardView;
