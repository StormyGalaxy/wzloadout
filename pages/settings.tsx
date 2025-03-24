import { useState } from "react";
import Head from "next/head";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Header from "@/components/Header";
//Components
import Warzone from "@/components/settings/Warzone";

export default function Settings() {
  const [key, setKey] = useState<string>("warzone");

  return (
    <>
      <Head>
        <title>Settings - Call Of Duty Random Class Generator</title>
      </Head>
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <Container className="shadow-lg p-3  mt-4 bg-body rounded">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k ?? "warzone")}
                className="mb-3"
              >
                <Tab eventKey="warzone" title="Warzone">
                  <Warzone />
                </Tab>
              </Tabs>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
