import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import WhereWeDroppin from "@/components/WhereWeDroppin";
//json
import mapInfo from "@/json/drop-spot/og/season-one.json";

export default function WhereWeDroppinOgS01() {
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Changelog", href: "/changelog" },
    ];

    return (
        <>
            <Head>
                <title>Fortnite OG Season 1 - Where We Droppin?</title>
                <link rel="manifest" href="/manifest.json" />
                <meta
                    name="description"
                    content="Spice up your Fortnite gameplay! Randomly roll where you should land in fortnite og season 1."
                />
                <meta
                    name="keywords"
                    content=""
                />
            </Head>
            <Header navLinks={navLinks} />
            <Container fluid>
                <Row>
                    <Col>
                        <h2 className="text-center my-3">
                            Fortnite OG Season 1
                            <span className="d-none d-sm-inline-block">&nbsp;-&nbsp;</span>
                            <br className="d-block d-sm-none" />
                            Where We Droppin?
                        </h2>

                        <WhereWeDroppin map="OG Season One" button_key="br-og-1" ga_label="BrOg-1" mapInfo={mapInfo} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
