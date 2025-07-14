'use client';

// --- React ---
import { Row, Col, Card, Button } from 'react-bootstrap';
// --- Styles ---
import styles from './HomePage.module.css';

interface Tool {
  title: string;
  game: string;
  description: string;
  link: string;
}

interface FeaturedToolsProps {
  tools: Tool[];
}

const FeaturedTools = ({ tools }: FeaturedToolsProps) => {
  return (
    <Row>
      {tools.map((tool, index) => (
        <Col md={4} className='mb-4' key={index}>
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
