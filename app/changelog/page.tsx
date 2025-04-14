import { Container, Row, Col } from "react-bootstrap";
import type { Metadata } from "next";
// --- Layout ---
import PageLayout from "@/components/PageLayout";
// --- Components ---
import ChangelogTabs from "@/components/ChangelogTabs";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Stay up-to-date on the latest features, bug fixes, and improvements to our Call of Duty random class generator. See what's new and how we're making your loadout experience even better.",
};

export default function ChangelogPage() {
  return (
    <PageLayout>
      <Container className="mt-3 mb-3">
        <Row className="shadow-lg p-3 bg-body rounded">
          <Col>
            <ChangelogTabs />
          </Col>
        </Row>
      </Container>
    </PageLayout>
  );
}
