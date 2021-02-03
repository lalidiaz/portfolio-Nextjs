import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
