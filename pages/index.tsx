import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta
          name="description"
          content="SiloCityPages: A framework by SiloCityLabs leveraging Bootstrap, React, and Next.js for efficient static site development. Deploy seamlessly to GitHub Pages."
        />
        <meta
          name="keywords"
          content="SiloCityPages, SiloCityLabs, Bootstrap, React, Next.js, GitHub Pages, static site generator, static site framework, web development, front-end, component-based, rapid deployment, web application, responsive design, website builder, React components, Next.js framework, GitHub hosting"
        />
      </Head>
      <div className="main-container">
        <Header />
        <Container className="main-content">
          <h3 className="text-center my-3">SiloCityPages</h3>
          <Row className="shadow-lg p-3 bg-body rounded">
            <Col lg={8} className="mx-auto">
              SiloCityPages, developed by SiloCityLabs, is a streamlined
              framework designed to accelerate the development and deployment of
              static websites. Leveraging the power of Bootstrap for responsive
              design, React for component-driven architecture, and Next.js for
              efficient rendering, SiloCityPages provides a robust foundation
              for building modern web applications. Optimized for seamless
              deployment to GitHub Pages, this framework simplifies the process
              of creating and hosting performant, visually appealing websites,
              allowing developers to focus on content and functionality rather
              than complex configurations.
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
