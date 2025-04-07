'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import Link from 'next/link';

const redirects: Record<string, string> = {
    // Example: Key is the OLD path, Value is the NEW path
    "/old": "/new",
};

// NOTE: You cannot export 'metadata' directly from a Client Component.
// Define general 404 metadata in your root app/layout.tsx instead.

export default function NotFound() {
    const router = useRouter();
    const [isCheckingRedirect, setIsCheckingRedirect] = useState(true);
    const [redirectTarget, setRedirectTarget] = useState<string | null>(null);

    useEffect(() => {
        // This code runs only on the client side after hydration
        const currentPath = window.location.pathname; // Use window.location here for the exact path entered
        const newPath = redirects[currentPath];

        if (newPath) {
            // Found a redirect match
            setRedirectTarget(newPath);
            router.replace(newPath); // Perform client-side redirect
        } else {
            // No redirect needed for this path
            setIsCheckingRedirect(false);
        }
        // Run only once on component mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures it runs only once client-side

    return (
        <Container className="main-content text-center py-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <div className="shadow-lg p-4 p-md-5 mb-5 bg-body rounded">
                        {isCheckingRedirect && !redirectTarget && (
                            // Initial state while checking
                            <>
                                <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
                                <p className="mt-2 mb-0">Checking for redirects...</p>
                            </>
                        )}

                        {redirectTarget && (
                            // State when redirect is found and initiated
                            <>
                                <h1 className="display-1 fw-bold text-warning">Redirecting</h1>
                                <p className="lead mt-3 mb-4">
                                    This page has moved. Redirecting you to{' '}
                                    <Link href={redirectTarget}>{redirectTarget}</Link>...
                                </p>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </>
                        )}

                        {!isCheckingRedirect && !redirectTarget && (
                            // Standard 404 content when no redirect applies
                            <>
                                <h1 className="display-1 fw-bold">404</h1>
                                <h2 className="mb-4">Page Not Found</h2>
                                <p className="lead mb-4">
                                    Sorry, the page you are looking for does not exist or might have
                                    been moved.
                                </p>
                                <Link href="/" passHref legacyBehavior>
                                    <Button variant="primary">Go back to Homepage</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}