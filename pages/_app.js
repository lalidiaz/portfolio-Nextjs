import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Footer from '@components/Footer';

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <div className="maiWrapper">
        <Component {...pageProps} />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
