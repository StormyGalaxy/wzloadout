'use client';

// --- React ---
import { Card, Button, Stack } from 'react-bootstrap';
// --- Styles ---
import styles from './HomePage.module.css';

const CommunitySupport = () => {
  return (
    <Card className={styles.toolCard}>
      <Card.Body>
        <Card.Title>We Want to Hear From You!</Card.Title>
        <Card.Text className='text-muted'>
          Our community is the most important part of COD RCG. Join our Discord, give us feedback,
          or report any bugs you find.
        </Card.Text>
        <Stack gap={2}>
          <Button href='/feedback' variant='primary'>
            Submit Feedback
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
