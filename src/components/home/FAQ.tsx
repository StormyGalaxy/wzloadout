'use client';

// --- React ---
import { Accordion } from 'react-bootstrap';
// --- Styles ---
import styles from './HomePage.module.css';

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqData: FaqItem[];
}

const FAQ = ({ faqData }: FAQProps) => {
  return (
    <Accordion defaultActiveKey='0' flush>
      {faqData.map((item, index) => (
        <Accordion.Item eventKey={String(index)} key={index} className={styles.faqItem}>
          <Accordion.Header>{item.question}</Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FAQ;
