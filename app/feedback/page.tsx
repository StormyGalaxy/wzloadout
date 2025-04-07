// app/feedback/page.tsx
'use client'; // ** IMPORTANT: Mark this as a Client Component **

import React, { useState, useEffect, Suspense } from 'react'; // Import Suspense
import { useRouter, useSearchParams } from 'next/navigation'; // Use hooks from next/navigation
import type { Metadata } from 'next'; // Keep type for potential future use if needed outside component
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap'; // Import Spinner
import Select, { MultiValue } from 'react-select';
import Link from "next/link";

// Assume Header/Footer are in app/layout.tsx
// import Header from "@/components/Header"; // No longer needed here
// import Footer from "@/components/Footer"; // No longer needed here
import { generateGithubLink } from '@/helpers/_silabs/generateGithubLink';

// JSON imports (ensure paths are correct relative to this file or use aliases)
import githubLabels from '@/json/github/labels.json';
import githubAssignees from '@/json/github/assignees.json';
import githubTemplates from '@/json/github/templates.json';

// --- Types and Initial State (can stay outside component) ---
type OptionType = {
    value: string;
    label: string;
};

const initialFeedbackState = {
    title: '',
    assignees: [] as OptionType[],
    labels: [] as OptionType[],
    template: '',
    body: '',
};

const parseOptions = (
    valueString: string,
    options: OptionType[]
): OptionType[] => {
    if (!valueString) return [];
    const uniqueValues = new Set(valueString.split(',').map((v) => v.trim()));
    return Array.from(uniqueValues)
        .map((value) => options.find((option) => option.value === value))
        .filter((option): option is OptionType => option !== undefined);
};


// --- Metadata (Exported separately - cannot be in Client Component) ---
// Note: Static metadata is defined outside. If you needed dynamic metadata
// based on searchParams, you'd use a 'generateMetadata' function in a
// separate page.tsx or layout.tsx wrapping this client component.
// For a feedback form, static metadata is likely sufficient.
// We cannot export this from a 'use client' file directly.
// So, if you need metadata for this route, create app/feedback/layout.tsx
// or add it to the parent layout. For simplicity here, we'll omit
// the metadata export from this file. Add metadata in app/layout.tsx or a specific
// app/feedback/layout.tsx if needed.
/*
export const metadata: Metadata = {
 title: 'Feedback',
 description: 'Provide feedback or report an issue.',
};
*/


// --- Client Component ---
function FeedbackForm() { // Renamed component slightly
    const router = useRouter(); // Use App Router's useRouter
    const searchParams = useSearchParams(); // Hook to get search params

    // State remains the same
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState(initialFeedbackState);

    // Effect to read initial state from URL search params
    useEffect(() => {
        // searchParams object might be null initially, wait for it
        if (!searchParams) {
            return;
        }

        // Only initialize state once when params are first available
        if (isLoading) {
            const assigneesString = searchParams.get('assignees') ?? '';
            const labelsString = searchParams.get('labels') ?? '';

            setFormData({
                title: searchParams.get('title') ?? '',
                assignees: parseOptions(assigneesString, githubAssignees),
                labels: parseOptions(labelsString, githubLabels),
                template: searchParams.get('template') ?? '',
                body: searchParams.get('body') ?? '',
            });
            setIsLoading(false); // Mark loading as complete
        }

        // Dependency: run when searchParams object instance changes,
        // but the internal isLoading flag prevents re-initialization.
    }, [searchParams, isLoading]);


    // --- Event Handlers remain largely the same ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        // Determine if it's the template select or other input
        const isTemplateSelect = e.target.name === 'template'; // Check name attribute
        const label = e.target.name; // Use name attribute directly
        const value = e.target.value;

        setFormData((prevFormData) => ({ ...prevFormData, [label]: value }));
    };

    const handleChangeSelect = (
        selectedOptions: MultiValue<OptionType> | null,
        name: 'assignees' | 'labels'
    ) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: selectedOptions || [],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const feedbackData = {
            title: formData.title,
            assignees: formData.assignees.map((item) => item.value),
            labels: formData.labels.map((item) => item.value),
            template: formData.template,
            body: formData.body,
        };

        const githubLink = generateGithubLink(
            process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
            process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
            feedbackData
        );

        // Use App Router's router.replace
        router.replace(githubLink);
    };

    // --- Conditional Loading UI ---
    if (isLoading) {
        // Improved loading state
        return (
            <Container className="main-content text-center py-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p className="mt-2">Loading Feedback Form...</p>
            </Container>
        );
    }

    // --- Render the Form ---
    return (
        // Removed Fragment, Head, main-container, Header, Footer
        <Container className="main-content py-3 py-md-4"> {/* Added padding */}
            <h3 className="text-center mt-4">Feedback</h3>
            <Row className="justify-content-center mt-3"> {/* Center the form column */}
                <Col md={10} lg={8}> {/* Constrain form width */}
                    <div className="shadow-lg p-3 p-md-4 bg-body rounded"> {/* Moved shadow/padding here */}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="title"> {/* Added margin bottom */}
                                <Form.Label>Title:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            {githubAssignees.length > 0 && (
                                <Form.Group className="mb-3" controlId="assignees">
                                    <Form.Label>Assignees:</Form.Label>
                                    <Select<OptionType, true> // Explicit types
                                        isMulti
                                        options={githubAssignees}
                                        value={formData.assignees}
                                        onChange={(selectedOptions) =>
                                            handleChangeSelect(selectedOptions, 'assignees')
                                        }
                                        closeMenuOnSelect={false}
                                        placeholder="None"
                                        aria-label="Select Assignees" // Accessibility
                                    />
                                </Form.Group>
                            )}

                            {githubLabels.length > 0 && (
                                <Form.Group className="mb-3" controlId="labels">
                                    <Form.Label>Labels:</Form.Label>
                                    <Select<OptionType, true> // Explicit types
                                        isMulti
                                        options={githubLabels}
                                        value={formData.labels}
                                        onChange={(selectedOptions) =>
                                            handleChangeSelect(selectedOptions, 'labels')
                                        }
                                        closeMenuOnSelect={false}
                                        placeholder="None"
                                        aria-label="Select Labels" // Accessibility
                                    />
                                </Form.Group>
                            )}

                            {githubTemplates.length > 0 && (
                                <Form.Group className="mb-3" controlId="template">
                                    <Form.Label>Template:</Form.Label>
                                    <Form.Select
                                        name="template" // Ensure name attribute is set
                                        value={formData.template || ''}
                                        onChange={handleInputChange}
                                        aria-label="Select Template" // Accessibility
                                    >
                                        <option value="">None</option>
                                        {githubTemplates.map((template) => (
                                            <option key={template.value} value={template.value}>
                                                {template.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            )}

                            {/* Show body only if no template is selected */}
                            {formData.template === '' && (
                                <Form.Group className="mb-3" controlId="body">
                                    <Form.Label>Description:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="body" // Ensure name attribute is set
                                        value={formData.body}
                                        onChange={handleInputChange}
                                        rows={5}
                                        aria-label="Feedback Description" // Accessibility
                                    />
                                </Form.Group>
                            )}

                            <div className="text-center mt-4 d-flex justify-content-center">
                                {/* Use Link for internal Cancel navigation */}
                                <Link href="/" passHref legacyBehavior>
                                    <Button variant="outline-secondary" className="me-3"> {/* Adjusted styling */}
                                        Cancel
                                    </Button>
                                </Link>
                                <Button variant="primary" type="submit"> {/* Primary action */}
                                    Create GitHub Issue
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


// --- Default Export with Suspense ---
// Since useSearchParams() needs to read params potentially passed during server render,
// wrap the client component in Suspense for robustness.
export default function FeedbackPage() {
    return (
        <Suspense fallback={
            <Container className="main-content text-center py-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        }>
            <FeedbackForm />
        </Suspense>
    );
}