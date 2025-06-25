// --- React ---
import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

interface ValueCardProps {
  /** The title to display in the card header. */
  title: string;
  /** The value to display in the card body. */
  value: string;
  /** Flag to determine if the component is in a loading state. */
  isGenerating: boolean;
  /** Optional additional CSS class for the Card component. */
  className?: string;
  /** Optional additional CSS class for the Card.Header component. */
  headerClassName?: string;
}

const ValueCardView: React.FC<ValueCardProps> = ({
  title,
  value,
  isGenerating,
  className,
  headerClassName,
}) => {
  return (
    <Card className={className}>
      <Card.Header as='h5' className={headerClassName}>
        {title}
      </Card.Header>
      <Card.Body
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '80px' }}>
        {isGenerating ? (
          <Placeholder as={Card.Text} animation='glow' className='mb-0 w-100 text-center'>
            <Placeholder xs={7} size='lg' />
          </Placeholder>
        ) : (
          <Card.Text className='mb-0 fw-bold fs-5 text-center'>{value}</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default ValueCardView;
