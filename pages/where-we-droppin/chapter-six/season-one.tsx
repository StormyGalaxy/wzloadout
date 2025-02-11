import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import FortniteDropSpot from "@/components/FortniteDropSpot";
//json
import mapInfo from "@/json/drop-spot/battle-royal/chapter-six/season-one.json";

export default function WhereWeDroppin() {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Changelog", href: "/changelog" },
    ];

    return (
        <>
            <Head>
                <title>Fortnite Chapter 6 Season One - Where We Droppin?</title>
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite chapter 6 season 1."
                />
                <meta
                    name="keywords"
                    content=""
                />
            </Head>
            <Header className="warzone" navLinks={navLinks} />
            <Container fluid>
                <Row>
                    <Col>
                        <h2 className="text-center my-3">
                            Fortnite Chapter 6 Season One
                            <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
                            <br className="d-block d-sm-none" />
                            Where We Droppin?
                        </h2>

                        <FortniteDropSpot map="Chapter 6 Season One" button_key="br-ch6-1" ga_label="BrCh6-1" mapInfo={mapInfo} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
