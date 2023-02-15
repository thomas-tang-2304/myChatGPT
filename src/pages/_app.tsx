import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

