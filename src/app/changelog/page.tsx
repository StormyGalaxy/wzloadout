// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import ChangelogTabs from '@/components/changelog/ChangelogTabs';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    "Stay up-to-date on the latest features, bug fixes, and improvements to our Call of Duty random class generator. See what's new and how we're making your loadout experience even better.",
};

export default function ChangelogPage() {
  return (
    <PageLayout>
      <Container className='mt-3 mb-3'>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <ChangelogTabs />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
