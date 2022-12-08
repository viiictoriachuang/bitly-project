import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav';
import '../styles/display.css';
import '../styles/spacing.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
