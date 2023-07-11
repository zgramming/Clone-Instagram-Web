import MantineCustomProvider from '@/contexts/MantineCustomContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineCustomProvider>
      <Component {...pageProps} />
    </MantineCustomProvider>
  );
}
