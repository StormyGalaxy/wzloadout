'use client';

// --- React ---
import { Row, Col, Card, Button } from 'react-bootstrap';
// --- Styles ---
import styles from './HomePage.module.css';

interface Tool {
  title: string;
  description: string;
  link: string;
  game: string;
}

interface FeaturedToolsProps {
  tools: Tool[];
}

const FeaturedTools = ({ tools }: FeaturedToolsProps) => {
  // Shuffle the tools array and select the first 3 for a random selection
  const selectedTools = [...tools].sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <Row>
      {selectedTools.map((tool, index) => (
        <Col md={4} key={index} className='mb-4'>
          <Card className={`h-100 ${styles.toolCard}`}>
            <Card.Body className='d-flex flex-column text-dark'>
              <Card.Title>{tool.title}</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>{tool.game}</Card.Subtitle>
              <Card.Text className='flex-grow-1'>{tool.description}</Card.Text>
              <Button href={tool.link} variant='primary' className='mt-auto'>
                Go to Tool
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default FeaturedTools;
