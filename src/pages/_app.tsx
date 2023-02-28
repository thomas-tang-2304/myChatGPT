import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { MessageProvider } from '@/contexts/MessageContext';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <MessageProvider>

      <Component {...pageProps} />
    </MessageProvider>

  )
}

