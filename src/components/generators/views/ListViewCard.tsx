// --- React ---
import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';

// Define the shape of the data for each row
interface RowData {
  title: string;
  value: string;
}

interface ListViewCardProps {
  /** The title to display in the card header. */
  title: string;
  /** An array of objects (for title/value pairs) or an array of strings. */
  values: (RowData | string)[];
  /** Flag to determine if the component is in a loading state. */
  isGenerating: boolean;
  /** Optional additional CSS class for the Card component. */
  className?: string;
  /** Optional additional CSS class for the Card.Header component. */
  headerClassName?: string;
}

const ListViewCard: React.FC<ListViewCardProps> = ({
  title,
  values,
  isGenerating,
  className,
  headerClassName,
}) => {
  return (
    <Card className={className}>
      <Card.Header as='h5' className={headerClassName}>
        {title}
      </Card.Header>
      <Card.Body style={{ minHeight: '120px' }}>
        {isGenerating ? (
          <>
            {/* Render placeholders based on the number of data items */}
            {values.map((_, index) => (
              <Placeholder as={Card.Text} animation='glow' key={index}>
                <Placeholder xs={8} />
              </Placeholder>
            ))}
          </>
        ) : (
          <>
            {/* Map over the values array to render each row */}
            {values.map((item, index) => {
              const pClassName = index === values.length - 1 ? 'mb-0' : 'mb-2';

              // Check if the item is a string and render it directly
              if (typeof item === 'string') {
                return (
                  <p className={pClassName} key={index}>
                    <strong className='fs-6'>{item}</strong>
                  </p>
                );
              }

              // Otherwise, render the title and value from the object
              return (
                <p className={pClassName} key={index}>
                  <span className='text-muted'>{item.title}:</span>
                  <br />
                  <strong className='fs-6'>{item.value}</strong>
                </p>
              );
            })}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ListViewCard;
