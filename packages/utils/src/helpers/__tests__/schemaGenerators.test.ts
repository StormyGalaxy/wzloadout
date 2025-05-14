import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
  generateArticleSchema,
  generateBreadcrumbListSchema,
  generatePersonSchema,
  generateVideoObjectSchema,
  generateFAQPageSchema,
} from '../schemaGenerators';
import type { Person, WithContext, Organization, WebSite } from 'schema-dts';

describe('Schema Generators', () => {
  const commonContext = 'https://schema.org';

  describe('generateOrganizationSchema', () => {
    it('should generate a minimal Organization schema', () => {
      const args = { name: 'Test Corp', url: 'https://example.com' };
      const schema = generateOrganizationSchema(args);
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'Organization',
        name: 'Test Corp',
        url: 'https://example.com',
        logo: undefined,
        sameAs: undefined,
        contactPoint: undefined,
      });
    });

    it('should generate a full Organization schema', () => {
      const args = {
        name: 'Test Corp Full',
        url: 'https://example.com/full',
        logoUrl: 'https://example.com/logo.png',
        sameAs: ['https://twitter.com/testcorp', 'https://linkedin.com/company/testcorp'],
        contactPoint: [
          {
            '@type': 'ContactPoint' as const, // Use 'as const' for literal types
            telephone: '+1-800-555-1212',
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish'],
          },
        ],
      };
      const schema = generateOrganizationSchema(args);
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'Organization',
        name: 'Test Corp Full',
        url: 'https://example.com/full',
        logo: { '@type': 'ImageObject', url: 'https://example.com/logo.png' },
        sameAs: ['https://twitter.com/testcorp', 'https://linkedin.com/company/testcorp'],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+1-800-555-1212',
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish'],
          },
        ],
      });
    });
  });

  describe('generateWebSiteSchema', () => {
    it('should generate a minimal WebSite schema', () => {
      const args = { name: 'My Site', url: 'https://mysite.com' };
      const schema = generateWebSiteSchema(args);
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'WebSite',
        name: 'My Site',
        url: 'https://mysite.com',
        description: undefined,
        publisher: undefined,
        potentialAction: undefined,
      });
    });

    it('should generate a WebSite schema with search action and publisher', () => {
      const publisherOrg = generateOrganizationSchema({ name: 'PubCo', url: 'https://pubco.com' });
      const args = {
        name: 'My Searchable Site',
        url: 'https://search.mysite.com',
        description: 'A site with a search.',
        publisher: publisherOrg,
        potentialAction: [
          {
            '@type': 'SearchAction' as const,
            target: 'https://search.mysite.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        ],
      };
      const schema = generateWebSiteSchema(args);
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'WebSite',
        name: 'My Searchable Site',
        url: 'https://search.mysite.com',
        description: 'A site with a search.',
        publisher: publisherOrg,
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: 'https://search.mysite.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        ],
      });
    });
  });

  describe('generateWebPageSchema', () => {
    const datePublished = new Date().toISOString();
    it('should generate a minimal WebPage schema', () => {
      const args = { name: 'My Page', url: 'https://example.com/my-page' };
      const schema = generateWebPageSchema(args);
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'WebPage',
        name: 'My Page',
        url: 'https://example.com/my-page',
        dateModified: undefined, // or datePublished if datePublished is provided and dateModified isn't
      });
    });

    it('should use datePublished for dateModified if dateModified is not provided', () => {
      const args = { name: 'My Page', url: 'https://example.com/my-page', datePublished };
      const schema = generateWebPageSchema(args);
      expect(schema.dateModified).toBe(datePublished);
    });

    it('should include breadcrumbs and publisher', () => {
      const websiteSchema = generateWebSiteSchema({
        name: 'Example Site',
        url: 'https://example.com',
      });
      const publisherSchema = generateOrganizationSchema({
        name: 'Example Org',
        url: 'https://example.org',
      });
      const breadcrumbSchema = generateBreadcrumbListSchema([
        { position: 1, name: 'Home', item: 'https://example.com' },
        { position: 2, name: 'My Page' },
      ]);

      const args = {
        name: 'My Page Detailed',
        url: 'https://example.com/my-page-detailed',
        datePublished,
        isPartOf: websiteSchema,
        publisher: publisherSchema,
        breadcrumb: breadcrumbSchema,
      };
      const schema = generateWebPageSchema(args);
      expect(schema.isPartOf).toEqual(websiteSchema);
      expect(schema.publisher).toEqual(publisherSchema);
      expect(schema.breadcrumb).toEqual(breadcrumbSchema);
    });
  });

  describe('generateArticleSchema', () => {
    const datePublished = '2023-01-01T12:00:00Z';
    const dateModified = '2023-01-02T15:30:00Z';

    it('should generate an Article schema with minimal required fields and authorName', () => {
      const args = {
        headline: 'Test Article',
        url: 'https://example.com/article/test',
        datePublished,
        authorName: 'John Doe',
        publisherName: 'Test Publisher',
      };
      const schema = generateArticleSchema(args);
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'Article',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://example.com/article/test' },
        headline: 'Test Article',
        datePublished,
        dateModified: datePublished, // Fallback
        author: { '@context': commonContext, '@type': 'Person', name: 'John Doe' },
        publisher: { '@type': 'Organization', name: 'Test Publisher', logo: undefined },
        image: undefined,
        description: undefined,
        articleBody: undefined,
        keywords: undefined,
      });
    });

    it('should use full author schema if provided', () => {
      const author: WithContext<Person> = {
        '@context': commonContext,
        '@type': 'Person',
        name: 'Jane Smith',
        url: 'https://example.com/jane-smith',
      };
      const args = {
        headline: 'Another Article',
        url: 'https://example.com/article/another',
        datePublished,
        author: author,
        publisherName: 'Awesome Books Inc.',
        publisherLogoUrl: 'https://example.com/logo.png',
        imageUrl: 'https://example.com/image.jpg',
        description: 'A great article.',
        articleBody: 'Some interesting content.',
        keywords: ['test', 'schema'],
        dateModified,
      };
      const schema = generateArticleSchema(args);
      expect(schema.author).toEqual(author);
      expect(schema.publisher?.logo).toEqual({
        '@type': 'ImageObject',
        url: 'https://example.com/logo.png',
      });
      expect(schema.dateModified).toBe(dateModified);
      expect(schema.image).toBe('https://example.com/image.jpg');
      expect(schema.description).toBe('A great article.');
      expect(schema.articleBody).toBe('Some interesting content.');
      expect(schema.keywords).toEqual(['test', 'schema']);
    });

    it('should handle array of image URLs', () => {
      const args = {
        headline: 'Article With Multiple Images',
        url: 'https://example.com/article/multi-image',
        datePublished,
        authorName: 'Multi Img Author',
        publisherName: 'Image Central',
        imageUrl: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
      };
      const schema = generateArticleSchema(args);
      expect(schema.image).toEqual([
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
      ]);
    });
  });

  describe('generateBreadcrumbListSchema', () => {
    it('should generate a BreadcrumbList schema', () => {
      const items = [
        { position: 1, name: 'Home', item: 'https://example.com/' },
        { position: 2, name: 'Category', item: 'https://example.com/category/' },
        { position: 3, name: 'Current Page' }, // No item URL for the last one
      ];
      const schema = generateBreadcrumbListSchema(items);
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://example.com/' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Category',
            item: 'https://example.com/category/',
          },
          { '@type': 'ListItem', position: 3, name: 'Current Page', item: undefined },
        ],
      });
    });

    it('should handle an empty list of items', () => {
      const schema = generateBreadcrumbListSchema([]);
      expect(schema.itemListElement).toEqual([]);
    });
  });

  describe('generatePersonSchema', () => {
    it('should generate a minimal Person schema', () => {
      const args = { name: 'Alice Wonderland' };
      const schema = generatePersonSchema(args);
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'Person',
        name: 'Alice Wonderland',
      });
    });

    it('should generate a full Person schema', () => {
      const worksForOrg = generateOrganizationSchema({
        name: 'Wonderland Inc.',
        url: 'https://wonderland.inc',
      });
      const args = {
        name: 'Bob The Builder',
        url: 'https://example.com/bob',
        jobTitle: 'Chief Constructor',
        image: 'https://example.com/bob.jpg',
        sameAs: ['https://twitter.com/bobthebuilder'],
        worksFor: worksForOrg,
      };
      const schema = generatePersonSchema(args);
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'Person',
        name: 'Bob The Builder',
        url: 'https://example.com/bob',
        jobTitle: 'Chief Constructor',
        image: 'https://example.com/bob.jpg',
        sameAs: ['https://twitter.com/bobthebuilder'],
        worksFor: worksForOrg,
        alumniOf: undefined,
      });
    });
  });

  describe('generateVideoObjectSchema', () => {
    const uploadDate = '2023-05-01T10:00:00Z';
    it('should generate a minimal VideoObject schema', () => {
      const args = {
        name: 'My Awesome Video',
        description: 'A video about things.',
        thumbnailUrl: 'https://example.com/thumb.jpg',
        uploadDate,
      };
      const schema = generateVideoObjectSchema(args);
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'VideoObject',
        name: 'My Awesome Video',
        description: 'A video about things.',
        thumbnailUrl: 'https://example.com/thumb.jpg',
        uploadDate,
      });
    });

    it('should generate a full VideoObject schema', () => {
      const publisherOrg = generateOrganizationSchema({
        name: 'Video Makers',
        url: 'https://videomakers.com',
      });
      const args = {
        name: 'Full Video Details',
        description: 'This video has everything.',
        thumbnailUrl: ['https://example.com/thumb1.jpg', 'https://example.com/thumb2.jpg'],
        uploadDate,
        duration: 'PT2M30S',
        contentUrl: 'https://example.com/video.mp4',
        embedUrl: 'https://example.com/embed/video',
        publisher: publisherOrg,
        expires: '2025-12-31T23:59:59Z',
        regionsAllowed: 'US, CA',
      };
      const schema = generateVideoObjectSchema(args);
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'VideoObject',
        name: 'Full Video Details',
        description: 'This video has everything.',
        thumbnailUrl: ['https://example.com/thumb1.jpg', 'https://example.com/thumb2.jpg'],
        uploadDate,
        duration: 'PT2M30S',
        contentUrl: 'https://example.com/video.mp4',
        embedUrl: 'https://example.com/embed/video',
        publisher: publisherOrg,
        expires: '2025-12-31T23:59:59Z',
        regionsAllowed: 'US, CA',
      });
    });
  });

  describe('generateFAQPageSchema', () => {
    it('should generate an FAQPage schema', () => {
      const questions = [
        { questionName: 'What is foo?', acceptedAnswerText: 'Foo is a metasyntactic variable.' },
        { questionName: 'How to bar?', acceptedAnswerText: 'You bar by baz-ing.' },
      ];
      const schema = generateFAQPageSchema(
        questions,
        'My FAQ',
        'Frequently asked questions about my product.'
      );
      expect(schema).toEqual({
        '@context': commonContext,
        '@type': 'FAQPage',
        name: 'My FAQ',
        description: 'Frequently asked questions about my product.',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is foo?',
            acceptedAnswer: { '@type': 'Answer', text: 'Foo is a metasyntactic variable.' },
          },
          {
            '@type': 'Question',
            name: 'How to bar?',
            acceptedAnswer: { '@type': 'Answer', text: 'You bar by baz-ing.' },
          },
        ],
      });
    });

    it('should generate an FAQPage schema without optional name and description', () => {
      const questions = [
        { questionName: 'Minimal Question?', acceptedAnswerText: 'Minimal Answer.' },
      ];
      const schema = generateFAQPageSchema(questions);
      expect(schema.name).toBeUndefined();
      expect(schema.description).toBeUndefined();
      expect(schema.mainEntity).toHaveLength(1);
    });
  });
});
