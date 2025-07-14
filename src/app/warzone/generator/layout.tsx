// --- Components ---
import ClientDatabaseProviderWrapper from '@/components/ClientDatabaseProviderWrapper';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return <ClientDatabaseProviderWrapper>{children}</ClientDatabaseProviderWrapper>;
}
