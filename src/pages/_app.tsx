import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { MessageProvider } from '@/contexts/MessageContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='fixed w-full'>
      <MessageProvider>

        <Component {...pageProps} />;
      </MessageProvider>

    </div>)
}

