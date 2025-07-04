'use client';

// --- React ---
import { ListGroup, Badge, Button } from 'react-bootstrap';

// --- Styles ---
import styles from './HomePage.module.css';

// Interface matching the structure of the changelog JSON
interface Update {
  Date: string;
  Type: string;
  Link: { Url: string; Text: string };
  Changes: string;
}

interface LatestUpdatesProps {
  updates: Update[];
}

// Helper function to map update type to a Bootstrap color variant
const getBadgeVariant = (type: string) => {
  switch (type.toLowerCase()) {
    case 'new':
      return 'success';
    case 'upgrade':
      return 'info';
    case 'fix':
      return 'warning';
    default:
      return 'secondary';
  }
};

const LatestUpdates = ({ updates }: LatestUpdatesProps) => {
  // Ensure we only process the first 3 updates passed in the props
  const latestThreeUpdates = updates.slice(0, 3);

  return (
    <>
      <ListGroup variant='flush'>
        {latestThreeUpdates.map((update, index) => (
          <ListGroup.Item
            key={index}
            className={`d-flex justify-content-between align-items-start ${styles.updateItem}`}>
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>
                <a
                  href={update.Link.Url}
                  className='text-decoration-none'
                  target='_blank'
                  rel='noopener noreferrer'>
                  {update.Link.Text}
                </a>
                <span className='ms-1 fw-normal'>{update.Changes}</span>
              </div>
              <small className='text-muted'>{update.Date}</small>
            </div>
            <Badge bg={getBadgeVariant(update.Type)} pill>
              {update.Type}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className='text-center mt-4'>
        <Button href='/changelog' variant='primary'>
          View Full Changelog
        </Button>
      </div>
    </>
  );
};

export default LatestUpdates;
