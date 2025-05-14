import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers
import StructuredData from '../StructuredData'; // Adjust path if necessary
import type { WebSite, WithContext, Organization } from 'schema-dts';

// Mock console.warn and console.error to spy on them
let consoleWarnSpy: jest.SpyInstance;
let consoleErrorSpy: jest.SpyInstance;

beforeEach(() => {
  // Spy on console.warn and console.error before each test
  consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  // Set NODE_ENV to development for testing warnings/errors
  process.env.NODE_ENV = 'development';
});

afterEach(() => {
  // Restore console.warn and console.error after each test
  consoleWarnSpy.mockRestore();
  consoleErrorSpy.mockRestore();
  // Reset NODE_ENV if necessary, or set it to 'test'
  process.env.NODE_ENV = 'test';
});

describe('StructuredData Component', () => {
  const mockWebSiteData: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Test Site',
    url: 'https://example.com',
  };

  const mockOrganizationData: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Test Org',
    url: 'https://org.example.com',
    logo: 'https://org.example.com/logo.png',
  };

  it('should render a script tag with correct type and content', () => {
    render(<StructuredData data={mockWebSiteData} />);
    const scriptTag = screen.getByTestId('structured-data');

    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag.tagName).toBe('SCRIPT');
    expect(scriptTag).toHaveAttribute('type', 'application/ld+json');
    expect(scriptTag.innerHTML).toBe(JSON.stringify(mockWebSiteData));
  });

  it('should render with a given id and include it in data-testid', () => {
    const testId = 'my-custom-website-schema';
    render(<StructuredData data={mockWebSiteData} id={testId} />);
    const scriptTag = screen.getByTestId(`structured-data-${testId}`);

    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag).toHaveAttribute('id', testId);
  });

  it('should render different types of schema data correctly', () => {
    const { rerender } = render(<StructuredData data={mockWebSiteData} id='website-data' />);
    let scriptTag = screen.getByTestId('structured-data-website-data');
    expect(scriptTag.innerHTML).toBe(JSON.stringify(mockWebSiteData));

    rerender(<StructuredData data={mockOrganizationData} id='org-data' />);
    scriptTag = screen.getByTestId('structured-data-org-data');
    expect(scriptTag.innerHTML).toBe(JSON.stringify(mockOrganizationData));
  });

  it('should return null if no data is provided', () => {
    // @ts-expect-error Testing invalid prop for null case
    const { container } = render(<StructuredData data={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('should return null if data is undefined', () => {
    // @ts-expect-error Testing invalid prop for null case
    const { container } = render(<StructuredData data={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it('should warn if data is missing "@context" in development', () => {
    const dataWithoutContext = {
      '@type': 'WebSite',
      name: 'No Context Site',
    } as unknown as WithContext<WebSite>;
    render(<StructuredData data={dataWithoutContext} />);
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'StructuredData component: Missing "@context" in data. Schema will likely be invalid.',
      dataWithoutContext
    );
  });

  it('should not warn if data is missing "@context" in production', () => {
    process.env.NODE_ENV = 'production';
    const dataWithoutContext = {
      '@type': 'WebSite',
      name: 'No Context Site Prod',
    } as unknown as WithContext<WebSite>;
    render(<StructuredData data={dataWithoutContext} />);
    expect(consoleWarnSpy).not.toHaveBeenCalled();
    process.env.NODE_ENV = 'development'; // Reset for other tests
  });

  it('should return null and log an error if JSON.stringify fails in development', () => {
    const circularData: any = { '@context': 'https://schema.org', name: 'Circular' };
    circularData.self = circularData; // Create a circular reference

    const { container } = render(<StructuredData data={circularData as WithContext<WebSite>} />);
    expect(container.firstChild).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'StructuredData component: Error stringifying JSON-LD data.',
      expect.any(Error), // The actual TypeError from JSON.stringify
      circularData
    );
  });

  it('should return null and not log an error if JSON.stringify fails in production', () => {
    process.env.NODE_ENV = 'production';
    const circularData: any = { '@context': 'https://schema.org', name: 'Circular Prod' };
    circularData.self = circularData;

    const { container } = render(<StructuredData data={circularData as WithContext<WebSite>} />);
    expect(container.firstChild).toBeNull();
    expect(consoleErrorSpy).not.toHaveBeenCalled();
    process.env.NODE_ENV = 'development'; // Reset for other tests
  });

  it('should render correctly even if "@context" is missing (though it warns)', () => {
    // This tests that the component still tries to render, relying on the warning
    const dataWithoutContext = {
      '@type': 'WebSite',
      name: 'No Context Site But Render',
      url: 'https://nocontext.example.com',
    } as unknown as WithContext<WebSite>; // Cast to bypass strict type checking for test

    render(<StructuredData data={dataWithoutContext} id='no-context-render' />);
    const scriptTag = screen.getByTestId('structured-data-no-context-render');

    expect(scriptTag).toBeInTheDocument();
    expect(scriptTag.innerHTML).toBe(JSON.stringify(dataWithoutContext)); // It will still stringify
    expect(consoleWarnSpy).toHaveBeenCalled(); // Warning should have fired
  });
});
