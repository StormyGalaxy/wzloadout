// --- React ---
import { Container, Row, Col } from 'react-bootstrap';
// --- Next ---
import type { Metadata } from 'next';
// --- Layout ---
import PageLayout from '@/components/PageLayout';
// --- Components ---
import WhereWeDroppin from '@/components/generators/warzone/where-we-droppin/WhereWeDroppin';
// --- Data ---
import mapInfo from '@/data/warzone/drop_spots/rebirth_island.json';

export const metadata: Metadata = {
  title: 'Warzone Random Drop Picker - Rebirth Island | Where We Droppin?',
  description:
    "Can't decide where to land on Rebirth Island? Use our random drop zone generator to pick a POI for an extra challenge in Call of Duty: Warzone's Resurgence mode. Spin the wheel and conquer the island!",
  keywords: [
    'Warzone Rebirth Island drops',
    'Rebirth Island random drop',
    'Where to drop Rebirth Island',
    'COD Warzone Resurgence',
    'Rebirth Island POIs',
    'Random drop picker',
    'Prison Block drop',
    'Rebirth Island map',
    'Resurgence',
  ],
};

export default function WhereWeDroppinRsRebirthIslandPage() {
  return (
    <PageLayout containerClassName='theme-warzone'>
      <Container>
        <Row className='p-3 p-md-4 bg-light rounded mb-4'>
          <Col>
            <WhereWeDroppin
              map='Rebirth Island'
              button_key='rs-rebirth-island'
              ga_label='RebirthIsland'
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
