// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WhereWeDroppin from '@/components/generators/warzone/where-we-droppin/WhereWeDroppin';
// --- Data ---
import mapInfo from '@/data/warzone/drop_spots/urzikstan.json';

export const metadata: Metadata = {
  title: 'Warzone Random Drop Picker - Urzikstan | Where We Droppin?',
  description:
    "Can't decide where to land in Urzikstan? Use our random drop zone generator to pick a POI for an extra challenge in Call of Duty: Warzone. Spin the wheel and conquer Urzikstan!",
  keywords: [
    'Warzone Urzikstan drops',
    'Urzikstan random drop',
    'Where to drop Urzikstan',
    'COD Warzone',
    'Urzikstan POIs',
    'Random drop picker',
    'Zaravan City drop',
    'Urzikstan map',
    'Battle Royale',
  ],
};

export default function WhereWeDroppinBrUrzikstanPage() {
  return (
    <PageLayout containerClassName='theme-warzone'>
      <Container>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WhereWeDroppin
              map='Urzikstan'
              button_key='br-urzikstan'
              ga_label='Urzikstan'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
