import { Container, Row, Col } from "react-bootstrap";
// --- Components ---
import SclCard from "@/components/_silabs/SclCard";
// --- Data ---
import generatorList from "@/json/index/generator-list.json";
import zombieGeneratorList from "@/json/index/zombie-generator-list.json";

export default function HomePage() {
  return (
    <Container className="my-3">
      <Row className="shadow-lg p-3 bg-body rounded">
        <Col className="mx-auto">
          <Row>
            <h3 className="text-center">Multiplayer</h3>
            <hr />
            {generatorList.map((card, index) => (
              <Col
                key={index}
                xl={3}
                lg={4}
                md={6}
                className="text-center mb-4"
              >
                <SclCard
                  title={card.title}
                  text={card.text}
                  variant={card.variant}
                  buttons={card.buttons}
                />
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
            <h3 className="text-center">Zombies</h3>
            <hr />
            {zombieGeneratorList.map((card, index) => (
              <Col
                key={index}
                xl={3}
                lg={4}
                md={6}
                className="text-center mb-4"
              >
                <SclCard
                  title={card.title}
                  text={card.text}
                  variant={card.variant}
                  buttons={card.buttons}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
