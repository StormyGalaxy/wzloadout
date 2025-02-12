import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import FortniteDropSpot from "@/components/FortniteDropSpot";
//json
import mapInfo from "@/json/drop-spot/og/season-two.json";

export default function WhereWeDroppinOgS02() {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Changelog", href: "/changelog" },
    ];

    return (
        <>
            <Head>
                <title>Fortnite OG Season 2 - Where We Droppin?</title>
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite og season 2."
                />
                <meta
                    name="keywords"
                    content=""
                />
            </Head>
            <Header className="og" navLinks={navLinks} />
            <Container fluid>
                <Row>
                    <Col>
                        <h2 className="text-center my-3">
                            Fortnite OG Season 1
                            <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
                            <br className="d-block d-sm-none" />
                            Where We Droppin?
                        </h2>

                        <FortniteDropSpot map="OG Season Two" button_key="br-og-2" ga_label="BrOg-2" mapInfo={mapInfo} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
