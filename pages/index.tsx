import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  return (
    <>
      <Head>
        <title>bootstrap-nextjs-github-pages</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <div className="main-container">
        <Header />
        <Container className="main-content">
          <Row>
            <h3 className="text-center mt-4">Hello World</h3>
            <h1 className="text-center mt-4">Welcome to {appName}</h1>
            <p className="text-center mt-4">API URL: {apiUrl}</p>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
