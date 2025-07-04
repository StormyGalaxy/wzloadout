// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WhereWeDroppin from '@/components/generators/warzone/where-we-droppin/WhereWeDroppin';
// --- Data ---
import mapInfo from '@/data/warzone/drop_spots/verdansk.json';

export const metadata: Metadata = {
  title: 'Warzone Random Drop Picker - Verdansk | Where We Droppin?',
  description:
    "Can't decide where to land in Verdansk? Use our random drop zone generator to pick a POI for an extra challenge in Call of Duty: Warzone. Spin the wheel and conquer Verdansk!",
  keywords: [
    'Warzone Verdansk drops',
    'Verdansk random drop',
    'Where to drop Verdansk',
    'COD Warzone',
    'Verdansk POIs',
    'Random drop picker',
    'Superstore drop',
    'Verdansk map',
    'Battle Royale',
  ],
};

export default function WhereWeDroppinBrVerdanskPage() {
  return (
    <PageLayout containerClassName='theme-warzone'>
      <Container>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WhereWeDroppin
              map='Verdansk'
              button_key='br-verdansk'
              ga_label='Verdansk'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
