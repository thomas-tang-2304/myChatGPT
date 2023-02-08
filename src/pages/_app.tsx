import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import {useState} from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  return <div className={theme=="dark" ? "dark" : "light"}>
    <Component {...pageProps} theme={theme} setTheme={setTheme}/>;
    </div>
    
}
