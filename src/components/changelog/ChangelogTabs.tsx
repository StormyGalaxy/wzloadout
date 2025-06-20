'use client';

// --- React ---
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
// --- Components ---
import Changelog from '@/components/changelog/Changelog';
// --- Data ---
import changelog2024 from '@/json/changelog/2024.json';
import changelog2025 from '@/json/changelog/2025.json';

export default function ChangelogTabs() {
  const [key, setKey] = useState<string>('2025');

  return (
    <Tabs activeKey={key} onSelect={(k) => setKey(k ?? '2025')} className='mb-3'>
      <Tab eventKey='2024' title='2024'>
        <Changelog data={changelog2024} />
      </Tab>
      <Tab eventKey='2025' title='2025'>
        <Changelog data={changelog2025} />
      </Tab>
    </Tabs>
  );
}
