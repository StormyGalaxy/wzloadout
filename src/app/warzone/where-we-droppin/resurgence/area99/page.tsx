// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WhereWeDroppin from '@/components/generators/warzone/where-we-droppin/WhereWeDroppin';
// --- Data ---
import mapInfo from '@/data/warzone/drop_spots/area99.json';

export const metadata: Metadata = {
  title: 'Warzone Random Drop Picker - Area 99 | Where We Droppin?',
  description:
    "Can't decide where to land in Area 99? Use our random drop zone generator to pick a POI for an extra challenge in Call of Duty: Warzone's Resurgence mode. Spin the wheel and conquer the base!",
  keywords: [
    'Warzone Area 99 drops',
    'Area 99 random drop',
    'Where to drop Area 99',
    'COD Warzone Resurgence',
    'Area 99 POIs',
    'Random drop picker',
    'Bunker drop',
    'Area 99 map',
    'Resurgence',
  ],
};

export default function WhereWeDroppinRsArea99Page() {
  return (
    <PageLayout containerClassName='theme-warzone'>
      <Container>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WhereWeDroppin
              map='Area 99'
              button_key='rs-area-99'
              ga_label='Area99'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
