'use client';

// --- React ---
import { Card, Button, Stack } from 'react-bootstrap';
// --- Styles ---
import styles from './HomePage.module.css';

const CommunitySupport = () => {
  return (
    <Card className={styles.toolCard}>
      <Card.Body>
        <Card.Title>Help Us Build the Future of CODRCG</Card.Title>
        <Card.Text className='text-muted'>
          Our community is the most important part of COD RCG. We could use your help building new
          features, finding bugs, and gathering data from all the Call of Duty games to make this
          the best random class generator.
        </Card.Text>
        <Stack gap={2}>
          <Button href='/feedback' variant='primary'>
            Suggest a Feature
          </Button>
          <Button href='/feedback' variant='outline-danger'>
            Report a Bug
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default CommunitySupport;
