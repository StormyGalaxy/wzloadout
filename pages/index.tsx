import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GeneratorCard from "@/components/GeneratorCard";
//json
import generatorList from "@/json/index/drop-spot-list.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Silo City Games - Fortnite</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Your hub for all fortnite tools built by Silo City Games"
        />
        <meta
          name="keywords"
          content="Fortnite, hub, location picker, drop spot"
        />
      </Head>
      <div className="main-container">
        <Header />
        <Container className="main-content">
          <Row>
            <h3 className="text-center mt-4">Where We Droppin?</h3>
            <hr />
            {generatorList.map((card, index) => (
              <Col
                key={index}
                xl={3}
                lg={4}
                md={6}
                className="text-center mb-4"
              >
                <GeneratorCard
                  title={card.title}
                  text={card.text}
                  variant={card.variant}
                  btn1Text={card.btn1Text}
                  link={card.link}
                  disabled={card.disabled}
                  btn2Text={card?.btn2Text}
                  link2={card?.link2}
                  disabled2={card?.disabled2}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
