import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import WhereWeDroppin from "@/components/WhereWeDroppin";
//json
import mapInfo from "@/json/drop-spot/reload/oasis.json";

export default function WhereWeDroppinOasis() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Changelog", href: "/changelog" },
  ];

  return (
    <>
      <Head>
        <title>Fortnite Reload: Oasis - Where We Droppin?</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite reload oasis."
        />
        <meta name="keywords" content="" />
      </Head>
      <Header navLinks={navLinks} />
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center my-3">
              Fortnite Reload: Oasis
              <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
              <br className="d-block d-sm-none" />
              Where We Droppin?
            </h2>

            <WhereWeDroppin
              map="Reload - Oasis"
              button_key="reload-oasis"
              ga_label="ReloadOasis"
              mapInfo={mapInfo}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
